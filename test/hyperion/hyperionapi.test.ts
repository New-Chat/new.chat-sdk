import { expect } from "chai";
import { HyperionApi } from "../../src/api";
import fetch from 'node-fetch';

// tslint:disable-next-line:no-var-requires

describe("Hyperion Api Tests", () => {
  const hyperionApi = new HyperionApi(
    "https://jungle3.cryptolions.io",
    "chattesttest",
    fetch
  );

  it("Get Direct Messages Test", async () => {
    const res = await hyperionApi.getDirectMessages({
      limit: 10,
      skip: 0,
      account: "testerjungl3",
    });

    const data = await res.json();
    console.log(data);

    // expect(result.mac).to.be.a("string");
    // expect(result.mac).to.have.lengthOf(64);
  }).timeout(2000);

  it("Get Channel Messages Test", async () => {
    const res = await hyperionApi.getChannelMessages({
      limit: 10,
      skip: 0,
      account: "testerjungl3",
    });

    const data = await res.json();
    console.log(data);
      
  }).timeout(2000);

  it("Get Chat Messages Test", async () => {
    const res = await hyperionApi.getChatMessages({
      limit: 10,
      skip: 0,
      account: "testerjungl3",
    });

    const data = await res.json();
    console.log(data);
      
  }).timeout(2000);
});
