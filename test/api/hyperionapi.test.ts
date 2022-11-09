import { expect } from "chai";
import fetch from "node-fetch";
import { HyperionApi } from "../../src/api";

// tslint:disable-next-line:no-var-requires

describe("Hyperion Api Tests", () => {
  const hyperionApi = new HyperionApi(
    "https://jungle3.cryptolions.io",
    "chattesttest",
    fetch
  );

  it("Get Direct Messages Test", async () => {
    const res = await hyperionApi.getActions({
      account: "testerjungl3",
      filter: `${hyperionApi.contract}:senddm`,
    });

    expect(res).not.be.undefined;
  }).timeout(2000);

  // it("Get Channel Messages Test", async () => {
  //   const res = await hyperionApi.getActions({
  //     account: "testerjungl3",
  //     filter: `${hyperionApi.contract}:senddm`,
  //   });

  //   expect(res).not.be.undefined;
  // }).timeout(2000);

  // it("Get Chat Messages Test", async () => {
  //   const res = await hyperionApi.getActions({
  //     account: "testerjungl3",
  //     filter: `${hyperionApi.contract}:senddm`,
  //   });

  //   expect(res).not.be.undefined;
  // }).timeout(2000);
});
