export interface GetCurrencyStats {
  code: string;
  symbol: string;
}

export interface GetCurrencyBalance {
  code: string;
  account: string;
  symbol?: string;
}

export interface GetTableByScope {
  code: string;
  table?: string;
  lower_bound?: string;
  upper_bound?: string;
  limit?: number;
  reverse?: boolean;
  show_payer?: boolean;
}

export interface GetAccount {
  account_name: string;
}

export interface GetTableRows {
  json: boolean;
  code: string;
  scope: string;
  table: string;
  table_key?: string | undefined;
  lower_bound?: string;
  upper_bound?: string;
  key_type?: string;
  index_position?: string;
  encode_type?: string;
  limit?: number;
  reverse?: boolean;
  show_payer?: boolean;
}
