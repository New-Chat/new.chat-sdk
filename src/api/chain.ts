import {
  GetTableByScopePayload,
  GetAccountPayload,
  GetTableRowsPayload,
  ChannelPayload,
} from "../interfaces";

export class ChainApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getTableByScope(payload: GetTableByScopePayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_by_scope`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getAccount(payload: GetAccountPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_account`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getPrivateChannel(opts: ChannelPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "prvchannels",
      table_key: opts.tag,
      lower_bound: opts.tag,
      upper_bound: opts.tag,
      key_type: "name",
      index_position: "1",
    });
  }

  async getPublicChannel(opts: ChannelPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "pubchannels",
      table_key: opts.tag,
      lower_bound: opts.tag,
      upper_bound: opts.tag,
      key_type: "name",
      index_position: "1",
    });
  }
}
