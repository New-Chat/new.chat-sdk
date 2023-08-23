import { EosioAuthorizationObject, EosioActionObject } from "../types";

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly tokenContract: string) {}

  async createConfig(
    authorization: EosioAuthorizationObject[],
    standard: string,
    version: string,
    public_key: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtcfg", {
      standard,
      version,
      public_key,
    });
  }

  async addContact(
    authorization: EosioAuthorizationObject[],
    owner: string,
    account: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addcontact", {
      owner,
      account,
    });
  }

  async removeContact(
    authorization: EosioAuthorizationObject[],
    owner: string,
    account: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvcontact", {
      owner,
      account,
    });
  }

  async addChannelMember(
    authorization: EosioAuthorizationObject[],
    admin: string,
    tag: string,
    account: string,
    role: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addchmember", {
      admin,
      tag,
      account,
      role
    });
  }

  async removeChannelMember(
    authorization: EosioAuthorizationObject[],
    admin: string,
    tag: string,
    account: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchmember", {
      admin,
      tag,
      account,
    });
  }

  async addChatMember(
    authorization: EosioAuthorizationObject[],
    admin: string,
    tag: string,
    account: string,
    role: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addchtmember", {
      admin,
      tag,
      account,
      role
    });
  }

  async removeChatMember(
    authorization: EosioAuthorizationObject[],
    admin: string,
    tag: string,
    account: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchtmember", {
      admin,
      tag,
      account,
    });
  }

  async addChannelRole(
    authorization: EosioAuthorizationObject[],
    owner: string,
    tag: string,
    role: string,
    terminate: boolean,
    delegate: boolean,
    access: boolean,
    write: boolean
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addchrole", {
      owner,
      tag,
      role,
      terminate,
      delegate,
      access,
      write
    });
  }

  async removeChannelRole(
    authorization: EosioAuthorizationObject[],
    owner: string,
    tag: string,
    role: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchrole", {
      owner,
      tag,
      role
    });
  }

  async addChatRole(
    authorization: EosioAuthorizationObject[],
    owner: string,
    tag: string,
    role: string,
    terminate: boolean,
    delegate: boolean,
    access: boolean,
    write: boolean
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addchtrole", {
      owner,
      tag,
      role,
      terminate,
      delegate,
      access,
      write
    });
  }

  async removeChatRole(
    authorization: EosioAuthorizationObject[],
    owner: string,
    tag: string,
    role: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchtrole", {
      owner,
      tag,
      role
    });
  }

  async createChannel(
    authorization: EosioAuthorizationObject[],
    tag: string,
    owner: string,
    description: string,
    public_key: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtchannel", {
      tag,
      owner,
      description,
      public_key,
    });
  }

  async createChat(
    authorization: EosioAuthorizationObject[],
    tag: string,
    owner: string,
    description: string,
    public_key: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtchat", {
      tag,
      owner,
      description,
      public_key,
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
      mac: mac,
    });
  }

  async sendChannelMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    tag: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "sendchmsg", {
      from,
      tag,
      iv,
      ephem_key: ephemKey,
      cipher_text: cipherText,
      mac: mac,
    });
  }

  async sendChatMessage(
    authorization: EosioAuthorizationObject[],
    from: string,
    tag: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "sendchatmsg", {
      from,
      tag,
      iv,
      ephem_key: ephemKey,
      cipher_text: cipherText,
      mac: mac,
    });
  }

  async sendToken(
    authorization: EosioAuthorizationObject[],
    from: string,
    to: string,
    quantity: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.tokenContract, authorization, "transfer", {
      from: from,
      to: to,
      quantity: quantity,
      memo: "Transfer sent via NewChat",
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
