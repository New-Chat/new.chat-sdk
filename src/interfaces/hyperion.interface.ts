export interface GetActionsPayload {
  limit?: number;
  skip?: number;
  account?: string;
  track?: string;
  filter?: string;
  sort?: string;
  after?: string;
  before?: string;
  simple?: boolean;
  hot_only?: boolean;
  noBinary?: boolean;
  checkLib?: boolean;
}

export interface GetMessagesPayload {
  limit?: number;
  skip?: number;
  account?: string;
  track?: string;
  sort?: string;
  after?: string;
  before?: string;
  simple?: boolean;
  hot_only?: boolean;
  noBinary?: boolean;
  checkLib?: boolean;
}
