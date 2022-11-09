import { expect } from "chai";
import fetch from "node-fetch";
import { ChainApi } from "../../src/api";

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

    expect(res).not.be.undefined;
  }).timeout(2000);

  it("Get Account Test", async () => {
    const res = await chainApi.getAccount({
      account_name: "chattesttest",
    });

    expect(res).not.be.undefined;
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

    expect(res).not.be.undefined;
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

    expect(res).not.be.undefined;
  }).timeout(2000);
});
