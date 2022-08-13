import { EosioAuthorizationObject, EosioActionObject } from "../types";

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string) {}

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

  async sendDirectMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    to: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "senddm", {
      from: from,
      to: to,
      iv: iv,
      ephem_key: ephemKey,
      cipher_text: cipherText,
      mac: mac
    });
  }

  async sendPrivateChannelMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    channel: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "sendprvchmsg", {
      from: from,
      channel: channel,
      iv: iv,
      ephem_key: ephemKey,
      cipher_text: cipherText,
      mac: mac
    });
  }

  async sendPublicChannelMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    channel: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "sendpubchmsg", {
      from: from,
      channel: channel,
      iv: iv,
      ephem_key: ephemKey,
      cipher_text: cipherText,
      mac: mac
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
