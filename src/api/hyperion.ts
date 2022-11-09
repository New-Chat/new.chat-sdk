import { GetActions } from "../interfaces";

export class HyperionApi {
  readonly hyperion_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(hyperion_url: string, contract: string, fetch: any) {
    this.hyperion_url = hyperion_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  parseQueryParams(params: { [key: string]: any }) {
    const entries = [];
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (value !== undefined) {
        entries.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }
    return entries.join("&");
  }

  async getActions(opts: GetActions): Promise<any> {
    return await this.fetch(
      `${this.hyperion_url}/v2/history/get_actions?` +
        this.parseQueryParams(opts),
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
