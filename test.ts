import {
  ActionGenerator,
  encryptMessage,
  decryptMessage,
} from "@newchat/new.chat-sdk";
import sha512 from "crypto-js/sha512";

const name = "Alice Doe";
const phone = "911";
const email = "alice@gmail.com";
const photoID = "1234567890";

const salt = "this is salt";
const pepper = "this is pepper";

const hash = sha512(
  `${name}:${phone}:${email}:${photoID}:${salt}:${pepper}`
).toString();

const encryptResult = encryptMessage(
  hash,
  "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
);

//broadcast encryptResult to the chain

const actGen = new ActionGenerator("app.newchat", "eosio.token");

const action = actGen.sendDirectMessage(
    {
        actor: 'alice',
        permission: 'active'

    },
    'alice',
    'bob',
    encryptResult.iv,
    encryptResult.ephemPubKey,
    encryptResult.cipherText,
    encryptResult.mac
);

//sign and broadcast action to the chain


//pull message and decrypt from chain
const decryptResult = decryptMessage(
  encryptResult.iv,
  encryptResult.ephemPubKey,
  encryptResult.cipherText,
  encryptResult.mac,
  "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
);
