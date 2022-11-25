import {
  GetTableByScope,
  GetAccount,
  GetTableRows,
  ContactPayload,
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

  async getTableByScope(opts: GetTableByScope): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_by_scope`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(opts),
    });
  }

  async getAccount(opts: GetAccount): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_account`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(opts),
    });
  }

  async getTableRows(opts: GetTableRows): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(opts),
    });
  }

  async getContact(opts: ContactPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.owner,
      table: "contacts",
      table_key: opts.account,
      lower_bound: opts.account,
      upper_bound: opts.account,
      key_type: "name",
      index_position: "1",
    });
  }

  async getChannel(opts: ChannelPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "channels",
      table_key: opts.tag,
      lower_bound: opts.tag,
      upper_bound: opts.tag,
      key_type: "name",
      index_position: "1",
    });
  }
}
