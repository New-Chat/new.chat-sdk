import { EosioToken } from "../../types";

/* tslint:disable:variable-name */

export class EosioTokenActionGenerator {
  constructor(readonly contract: string) {}

  async open(
    authorization: EosioToken.AuthorizationObject[],
    owner: string,
    symbol: string,
    ram_payer: string
  ): Promise<EosioToken.ActionObject[]> {
    return this._pack(this.contract, authorization, "open", {
      owner,
      symbol,
      ram_payer,
    });
  }

  async close(
    authorization: EosioToken.AuthorizationObject[],
    owner: string,
    symbol: string
  ): Promise<EosioToken.ActionObject[]> {
    return this._pack(this.contract, authorization, "close", {
      owner,
      symbol,
    });
  }

  async create(
    authorization: EosioToken.AuthorizationObject[],
    issuer: string,
    maximum_supply: string
  ): Promise<EosioToken.ActionObject[]> {
    return this._pack(this.contract, authorization, "create", {
      issuer,
      maximum_supply,
    });
  }

  async issue(
    authorization: EosioToken.AuthorizationObject[],
    to: string,
    quantity: string,
    memo: string
  ): Promise<EosioToken.ActionObject[]> {
    return this._pack(this.contract, authorization, "issue", {
      to,
      quantity,
      memo,
    });
  }

  async retire(
    authorization: EosioToken.AuthorizationObject[],
    quantity: string,
    memo: string
  ): Promise<EosioToken.ActionObject[]> {
    return this._pack(this.contract, authorization, "retire", {
      quantity,
      memo,
    });
  }

  async transfer(
    authorization: EosioToken.AuthorizationObject[],
    contract: string,
    from: string,
    to: string,
    quantity: string,
    memo: string
  ): Promise<EosioToken.ActionObject[]> {
    return this._pack(contract, authorization, "transfer", {
      from,
      to,
      quantity,
      memo,
    });
  }

  protected _pack(
    account: string,
    authorization: EosioToken.AuthorizationObject[],
    name: string,
    data:
      | EosioToken.OpenActionData
      | EosioToken.CloseActionData
      | EosioToken.CreateActionData
      | EosioToken.IssueActionData
      | EosioToken.RetireActionData
      | EosioToken.TransferActionData
  ): EosioToken.ActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
