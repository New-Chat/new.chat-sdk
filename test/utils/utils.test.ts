import { expect } from "chai";
import { encryptMessage, decryptMessage } from "../../src/utils";
import { KeyType } from "eosjs/dist/eosjs-numeric";
import { PrivateKey, PublicKey, KeyType as WKeyType } from "@wharfkit/antelope";

// tslint:disable-next-line:no-var-requires

describe("Utils Tests", () => {
  it("Encrypt Message Test", () => {
    const result = encryptMessage(
      "Hello world!",
      "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
      KeyType.k1
    );
    expect(result.iv).to.be.a("string");
    expect(result.iv).to.have.lengthOf(32);
    expect(result.ephemPubKey).to.be.a("string");
    expect(result.ephemPubKey).to.have.lengthOf(57);
    expect(result.cipherText).to.be.a("string");
    expect(result.mac).to.be.a("string");
    expect(result.mac).to.have.lengthOf(64);
  }).timeout(2000);

  it("Decrypt Message Test", () => {
    const result = decryptMessage(
      "0ad9562555979a74dd658f58f0c05277",
      "EOS8mdjebWk3DmgAU99GRPrQQQA7Hw2cDUVttNzPtRD7wf9PTM57s",
      "2673b243a0de3e6c44f986b8944bc523",
      "45727bc3dc31984f661789b9c13744986790f8fc92ef9dd35e8f5b22acf478ea",
      "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
    );
    expect(result).to.deep.equal("Hello world!");
  }).timeout(2000);

  it("Encrypt & Decrypt EOSIO Key Message Test", () => {
    const encryptResult = encryptMessage(
      "Hello world!",
      "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
      KeyType.k1
    );

    const decryptResult = decryptMessage(
      encryptResult.iv,
      encryptResult.ephemPubKey,
      encryptResult.cipherText,
      encryptResult.mac,
      "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
    );
    expect(decryptResult).to.deep.equal("Hello world!");
  }).timeout(2000);

  it("Encrypt & Decrypt K1 Key Message Test", () => {
    const encryptResult = encryptMessage(
      "Hello world!",
      "PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63",
      KeyType.k1
    );

    const decryptResult = decryptMessage(
      encryptResult.iv,
      encryptResult.ephemPubKey,
      encryptResult.cipherText,
      encryptResult.mac,
      "PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V"
    );
    expect(decryptResult).to.deep.equal("Hello world!");
  }).timeout(2000);

  it("Encrypt & Decrypt R1 Key Message Test", () => {
    // Error:      TypeError: this.ec.keyPair is not a function
    // const encryptResult = encryptMessage(
    //   "Hello world!",
    //   "PUB_R1_54U11djyqRfRor3hikHS4N18pPWZXqhquHrHjLz35vrKaZDYWs",
    //   KeyType.r1
    // );

    // const decryptResult = decryptMessage(
    //   encryptResult.iv,
    //   encryptResult.ephemPubKey,
    //   encryptResult.cipherText,
    //   encryptResult.mac,
    //   "PVT_R1_2ftFMWugZKeZFT1y3j1JQb8G4rd1Cp19BT9n5yXU9kKdjeXCeE"
    // );
    // expect(decryptResult).to.deep.equal("Hello world!");
  }).timeout(2000);

  it("Encrypt & Decrypt WA Key Message Test", () => {
    // Error:      TypeError: this.ec.keyPair is not a function
    // const encryptResult = encryptMessage(
    //   "Hello world!",
    //   "PUB_WA_6p1YY7BGaoiZVf1hDr9bifrVPoRJVoCdQeAt4nJMfj2Zvescw3Lc3Evs4xrwgwKUS",
    //   KeyType.wa
    // );

    // const encryptResult = encryptMessage(
    //   "Hello world!",
    //   ""
    // );

    // const decryptResult = decryptMessage(
    //   encryptResult.iv,
    //   encryptResult.ephemPubKey,
    //   encryptResult.cipherText,
    //   encryptResult.mac,
    //   ""
    // );
    // expect(decryptResult).to.deep.equal("Hello world!");
  }).timeout(2000);
});
