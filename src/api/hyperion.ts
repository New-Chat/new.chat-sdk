import { GetActionsPayload } from "../interfaces";

export class HyperionApi {
  readonly hyperion_url: string;
  readonly fetch: any;

  constructor(hyperion_url: string, fetch: any) {
    this.hyperion_url = hyperion_url;
    this.fetch = fetch;
  }

  async getActions(payload: GetActionsPayload): Promise<any> {
    return await this.fetch(`${this.hyperion_url}/v2/history/get_actions`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getIncomingMessages(payload: GetActionsPayload): Promise<any> {
    return await this.getActions(payload);
  }
}
