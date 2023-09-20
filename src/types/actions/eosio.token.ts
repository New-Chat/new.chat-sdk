export namespace EosioToken {
  export type OpenActionData = {
    owner: string;
    symbol: string;
    ram_payer: string;
  };

  export type CloseActionData = {
    owner: string;
    symbol: string;
  };

  export type CreateActionData = {
    issuer: string;
    maximum_supply: string;
  };

  export type IssueActionData = {
    to: string;
    quantity: string;
    memo: string;
  };

  export type RetireActionData = {
    quantity: string;
    memo: string;
  };

  export type TransferActionData = {
    from: string;
    to: string;
    quantity: string;
    memo: string;
  };

  export type AuthorizationObject = { actor: string; permission: string };

  export type ActionObject = {
    account: string;
    name: string;
    authorization: AuthorizationObject[];
    data:
      | OpenActionData
      | CloseActionData
      | CreateActionData
      | IssueActionData
      | RetireActionData
      | TransferActionData;
  };
}
