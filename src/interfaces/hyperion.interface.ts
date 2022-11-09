export interface GetActions {
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
