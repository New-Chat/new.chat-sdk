import { DirectMessagePayload } from "../interfaces/message.interface";

const { PrivateKey } = require("eosjs/dist/PrivateKey");
const { PublicKey } = require("eosjs/dist/PublicKey");
const { KeyType } = require("eosjs/dist/eosjs-numeric");
const EC = require("elliptic").ec;

const crypto = require("crypto");
const shajs = require("sha.js");

export async function encryptMessage(
  from: string,
  to: string,
  rcptPubKey: string,
  plainText: Buffer
): Promise<DirectMessagePayload> {
  let ellipticKey = PublicKey.fromString(rcptPubKey).toElliptic();

  let ephemKey = new EC("secp256k1").genKeyPair();
  let ephemPublicKey = PublicKey.fromElliptic(ephemKey, KeyType.k1);

  let shared = Buffer.from(
    ephemKey.derive(ellipticKey.getPublic()).toString("hex"),
    "hex"
  );
  let hash = new shajs.sha512().update(shared).digest();

  let iv = crypto.randomBytes(16);
  let encryptionKey = hash.slice(0, 32);
  let macKey = hash.slice(32);

  let cipher = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
  let firstChunk = cipher.update(plainText);
  let secondChunk = cipher.final();
  let ciphertext = Buffer.concat([firstChunk, secondChunk]);

  let dataToMac = Buffer.concat([iv, ephemPublicKey.key.data, ciphertext]);
  let mac = crypto.createHmac("sha256", macKey).update(dataToMac).digest();

  return {
    from: from,
    to: to,
    iv: iv.toString("hex"),
    ephem_key: ephemPublicKey.toString(),
    cipher_text: ciphertext.toString("hex"),
    mac: mac.toString("hex"),
  };
}

export async function decryptMessage(
  rcptPrvKey: string,
  msg: DirectMessagePayload
): Promise<string> {
  let ellipticKey = PrivateKey.fromString(rcptPrvKey).toElliptic();
  let ephemPublicKey = PublicKey.fromString(msg.ephem_key);
  let ephemEllKey = ephemPublicKey.toElliptic();
  let iv = Buffer.from(msg.iv, "hex");
  let cipherText = Buffer.from(msg.cipher_text, "hex");
  let mac = Buffer.from(msg.mac, "hex");

  let shared = Buffer.from(
    ellipticKey.derive(ephemEllKey.getPublic()).toString("hex"),
    "hex"
  );
  let hash = shajs("sha512").update(shared).digest();

  let encryptionKey = hash.slice(0, 32);
  let macKey = hash.slice(32);

  let dataToMac = Buffer.concat([iv, ephemPublicKey.key.data, cipherText]);
  let realMac = crypto.createHmac("sha256", macKey).update(dataToMac).digest();

  if (!realMac.equals(mac)) {
    throw Error("Invalid mac");
  }

  let cipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
  let firstChunk = cipher.update(cipherText);
  let secondChunk = cipher.final();
  let plainText = Buffer.concat([firstChunk, secondChunk]);

  return plainText.toString("hex");
}
