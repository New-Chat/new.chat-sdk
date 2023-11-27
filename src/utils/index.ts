import { KeyType } from "eosjs/dist/eosjs-numeric";
import { PrivateKey } from "eosjs/dist/PrivateKey";
const { PublicKey } = require("eosjs/dist/PublicKey");

// import { PublicKey, PrivateKey } from "@wharfkit/antelope";

import { ec } from "elliptic";
import CryptoJS from "crypto-js";
import wordArray from "crypto-js/lib-typedarrays";
import encHex from "crypto-js/enc-hex";
import sha512 from "crypto-js/sha512";
import hmacSHA256 from "crypto-js/hmac-sha256";
import AES from "crypto-js/aes";

import { EncodeResult } from "../types";

export function encryptMessage(
  plainText: string,
  rcptPubKey: string,
  keyType: KeyType = KeyType.k1
): EncodeResult {
    /** Export public key as `elliptic`-format public key */
  const ellipticKey = PublicKey.fromString(rcptPubKey, keyType).toElliptic();

  const ephemKey = new ec("secp256k1").genKeyPair();
  const ephemPublicKey = PublicKey.fromElliptic(ephemKey, keyType);

  const shared = Buffer.from(
    ephemKey.derive(ellipticKey.getPublic()).toString("hex"),
    "hex"
  );
  const hash = sha512(encHex.parse(shared.toString("hex"))).toString();

  const iv = wordArray.random(16).toString();
  const encryptionKey = hash.slice(0, 64);
  const macKey = hash.slice(64);

  const plaintextFinal = Buffer.from(plainText, "utf8").toString("hex");

  const encrypted = AES.encrypt(
    encHex.parse(plaintextFinal),
    encHex.parse(encryptionKey),
    {
      iv: encHex.parse(iv),
    }
  ).ciphertext.toString();

  const ephemPublicKeyStr = Buffer.from(ephemPublicKey.key.data).toString(
    "hex"
  );
  const dataToMac = iv + ephemPublicKeyStr + encrypted;
  const mac = hmacSHA256(
    encHex.parse(dataToMac),
    encHex.parse(macKey)
  ).toString();

  const result: EncodeResult = {
    iv: iv,
    ephemPubKey: ephemPublicKey.toString(),
    cipherText: encrypted,
    mac: mac,
  };

  return result;
}

export function decryptMessage(
  iv: string,
  ephemKey: string,
  cipherText: string,
  mac: string,
  rcptPrvKey: string
): string {
  const ellipticKey = PrivateKey.fromString(rcptPrvKey).toElliptic();
  const ephemPublicKey = PublicKey.fromString(ephemKey);
  const ephemEllKey = ephemPublicKey.toElliptic();

  const shared = Buffer.from(
    ellipticKey.derive(ephemEllKey.getPublic()).toString("hex"),
    "hex"
  );

  const hash = sha512(encHex.parse(shared.toString("hex"))).toString();
  const encryptionKey = hash.slice(0, 64);
  const macKey = hash.slice(64);

  const ephemPublicKeyStr = Buffer.from(ephemPublicKey.key.data).toString("hex");
  const dataToMac = iv + ephemPublicKeyStr + cipherText;
  const realMac = hmacSHA256(
    encHex.parse(dataToMac.toString()),
    encHex.parse(macKey)
  ).toString();

  if (realMac !== mac) {
    throw Error("Invalid mac");
  }

  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: encHex.parse(cipherText),
  });

  const plainText = AES.decrypt(cipherParams, encHex.parse(encryptionKey), {
    iv: encHex.parse(iv),
  }).toString(CryptoJS.enc.Utf8);

  return plainText;
}
