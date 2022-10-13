import { GetActionsPayload, GetMessagesPayload } from "../interfaces";

export class HyperionApi {
  readonly hyperion_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(hyperion_url: string, contract: string, fetch: any) {
    this.hyperion_url = hyperion_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getActions(payload: GetActionsPayload): Promise<any> {
    return await this.fetch(`${this.hyperion_url}/v2/history/get_actions`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }

  async getDirectMessages(payload: GetMessagesPayload): Promise<any> {
    return await this.fetch(
      `${this.hyperion_url}/v2/history/get_actions?limit=${payload.limit}&skip=${payload.skip}&account=${payload.account}&track=${payload.track}&filter=${this.contract}:senddm&sort=${payload.sort}&after=${payload.after}&before=${payload.before}&simple=${payload.simple}&hot_only=${payload.hot_only}&noBinary=${payload.noBinary}&checkLib=${payload.checkLib}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  async getChannelMessages(payload: GetMessagesPayload): Promise<any> {
    return await this.fetch(
      `${this.hyperion_url}/v2/history/get_actions?limit=${payload.limit}&skip=${payload.skip}&account=${payload.account}&track=${payload.track}&filter=${this.contract}:sendchlmsg&sort=${payload.sort}&after=${payload.after}&before=${payload.before}&simple=${payload.simple}&hot_only=${payload.hot_only}&noBinary=${payload.noBinary}&checkLib=${payload.checkLib}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  async getChatMessages(payload: GetMessagesPayload): Promise<any> {
    return await this.fetch(
      `${this.hyperion_url}/v2/history/get_actions?limit=${payload.limit}&skip=${payload.skip}&account=${payload.account}&track=${payload.track}&filter=${this.contract}:sendchtmsg&sort=${payload.sort}&after=${payload.after}&before=${payload.before}&simple=${payload.simple}&hot_only=${payload.hot_only}&noBinary=${payload.noBinary}&checkLib=${payload.checkLib}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
