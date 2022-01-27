export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string) {}

  async createPrivateChannel(
    authorization: EosioAuthorizationObject[],
    channel: string,
    owner: string,
    description: string,
    public_key: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtprvch", {
        channel,
        owner,
        description,
        public_key
    });
  }

  async createPublicChannel(
    authorization: EosioAuthorizationObject[],
    channel: string,
    owner: string,
    description: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtpubch", {
        channel,
        owner,
        description
    });
  }

  async sendDirectMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    to: string,
    iv: string,
    ephem_key: string,
    cipher_text: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "senddm", {
        from,
        to,
        iv,
        ephem_key,
        cipher_text,
        mac
    });
  }

  async sendPrivateChannelMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    channel: string,
    iv: string,
    ephem_key: string,
    cipher_text: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "sendprvchmsg", {
        from,
        channel,
        iv,
        ephem_key,
        cipher_text,
        mac
    });
  }

  async sendPublicChannelMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    channel: string,
    iv: string,
    ephem_key: string,
    cipher_text: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "sendpubchmsg", {
        from,
        channel,
        iv,
        ephem_key,
        cipher_text,
        mac
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
