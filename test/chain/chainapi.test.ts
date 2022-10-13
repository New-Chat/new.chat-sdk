import { expect } from "chai";
import { ChainApi } from "../../src/api";
import fetch from 'node-fetch';

// tslint:disable-next-line:no-var-requires

describe("Chain Api Tests", () => {
  const chainApi = new ChainApi(
    "https://jungle3.cryptolions.io",
    "chattesttest",
    fetch
  );

  it("Get Accounts Test", async () => {
    const res = await chainApi.getTableByScope({
      code: "eosio",
      table: "userres",
      lower_bound: "tester",
      upper_bound: "testerzzzzzz",
      limit: 10,
    });

    const data = await res.json();
    console.log(data);

    // expect(result.mac).to.be.a("string");
    // expect(result.mac).to.have.lengthOf(64);
  }).timeout(2000);

  it("Get Accouns Test", async () => {
    const res = await chainApi.getAccount({
      account_name: "chattesttest"
=    });

    const data = await res.json();
    console.log(data);

    // expect(result.mac).to.be.a("string");
    // expect(result.mac).to.have.lengthOf(64);
  }).timeout(2000);

  it("Get Channels Test", async () => {
    const res = await chainApi.getTableRows({
        json: true,
        code: chainApi.contract,
        scope: chainApi.contract,
        table: "channels",
        lower_bound: "tester",
        upper_bound: "testerzzzzzz",
        limit: 10,
      });

    const data = await res.json();
    console.log(data);
      
  }).timeout(2000);

  it("Get Chats Test", async () => {
    const res = await chainApi.getTableRows({
        json: true,
        code: chainApi.contract,
        scope: chainApi.contract,
        table: "chats",
        lower_bound: "tester",
        upper_bound: "testerzzzzzz",
        limit: 10,
      });

    const data = await res.json();
    console.log(data);
      
  }).timeout(2000);
});
