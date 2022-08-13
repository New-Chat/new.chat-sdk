import { expect } from "chai";
import { encryptMessage, decryptMessage } from "../../src/utils";

// tslint:disable-next-line:no-var-requires

describe("Utils Tests", () => {
  it("Encrypt Message Test", () => {
    const result = encryptMessage(
        "Hello world!",
        "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
    );
    expect(result.iv).to.be.a('string');
    expect(result.iv).to.have.lengthOf(32);
    expect(result.ephemPubKey).to.be.a('string');
    expect(result.ephemPubKey).to.have.lengthOf(57);
    expect(result.cipherText).to.be.a('string');
    expect(result.mac).to.be.a('string');
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

  it("Encrypt & Decrypt Message Test", () => {
    const encryptResult = encryptMessage(
      "Hello world!",
      "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
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
  
});