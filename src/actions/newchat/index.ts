import { NewChat } from "../../types";

/* tslint:disable:variable-name */

export class NewChatActionGenerator {
  constructor(readonly contract: string, readonly tokenContract: string) {}

  async createConfig(
    authorization: NewChat.AuthorizationObject[],
    standard: string,
    version: string,
    public_key: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "crtcfg", {
      standard,
      version,
      public_key,
    });
  }

  async addContact(
    authorization: NewChat.AuthorizationObject[],
    owner: string,
    account: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "addcontact", {
      owner,
      account,
    });
  }

  async removeContact(
    authorization: NewChat.AuthorizationObject[],
    owner: string,
    account: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "rmvcontact", {
      owner,
      account,
    });
  }

  async addChannelMember(
    authorization: NewChat.AuthorizationObject[],
    admin: string,
    tag: string,
    account: string,
    role: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "addchmember", {
      admin,
      tag,
      account,
      role
    });
  }

  async removeChannelMember(
    authorization: NewChat.AuthorizationObject[],
    admin: string,
    tag: string,
    account: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchmember", {
      admin,
      tag,
      account,
    });
  }

  async addChatMember(
    authorization: NewChat.AuthorizationObject[],
    admin: string,
    tag: string,
    account: string,
    role: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "addchtmember", {
      admin,
      tag,
      account,
      role
    });
  }

  async removeChatMember(
    authorization: NewChat.AuthorizationObject[],
    admin: string,
    tag: string,
    account: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchtmember", {
      admin,
      tag,
      account,
    });
  }

  async addChannelRole(
    authorization: NewChat.AuthorizationObject[],
    owner: string,
    tag: string,
    role: string,
    terminate: boolean,
    delegate: boolean,
    access: boolean,
    write: boolean
  ): Promise<NewChat.ActionObject[]> {
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
    authorization: NewChat.AuthorizationObject[],
    owner: string,
    tag: string,
    role: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchrole", {
      owner,
      tag,
      role
    });
  }

  async addChatRole(
    authorization: NewChat.AuthorizationObject[],
    owner: string,
    tag: string,
    role: string,
    terminate: boolean,
    delegate: boolean,
    access: boolean,
    write: boolean
  ): Promise<NewChat.ActionObject[]> {
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
    authorization: NewChat.AuthorizationObject[],
    owner: string,
    tag: string,
    role: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "rmvchtrole", {
      owner,
      tag,
      role
    });
  }

  async createChannel(
    authorization: NewChat.AuthorizationObject[],
    tag: string,
    owner: string,
    description: string,
    public_key: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "crtchannel", {
      tag,
      owner,
      description,
      public_key,
    });
  }

  async createChat(
    authorization: NewChat.AuthorizationObject[],
    tag: string,
    owner: string,
    description: string,
    public_key: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "crtchat", {
      tag,
      owner,
      description,
      public_key,
    });
  }

  async sendDirectMessage(
    authorization: NewChat.AuthorizationObject[],
    from: string,
    to: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<NewChat.ActionObject[]> {
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
    authorization: NewChat.AuthorizationObject[],
    from: string,
    tag: string,
    iv: string,
    ephemKey: string,
    cipherText: string,
    mac: string
  ): Promise<NewChat.ActionObject[]> {
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
    authorization: NewChat.AuthorizationObject[],
    from: string,
    tag: string,
    iv: string,
    ephem_key: string,
    cipher_text: string,
    mac: string
  ): Promise<NewChat.ActionObject[]> {
    return this._pack(this.contract, authorization, "sendchatmsg", {
      from,
      tag,
      iv,
      ephem_key,
      cipher_text,
      mac,
    });
  }

  protected _pack(
    account: string,
    authorization: NewChat.AuthorizationObject[],
    name: string,
    data:
      | NewChat.CreateConfigActionData
      | NewChat.AddContactActionData
      | NewChat.RemoveContactActionData
      | NewChat.AddChannelMemberActionData
      | NewChat.RemoveChannelMemberActionData
      | NewChat.AddChatMemberActionData
      | NewChat.RemoveChatMemberActionData
      | NewChat.AddChannelRoleActionData
      | NewChat.RemoveChannelRoleActionData
      | NewChat.AddChatRoleActionData
      | NewChat.RemoveChatRoleActionData
      | NewChat.CreateChannelActionData
      | NewChat.CreateChatActionData
      | NewChat.SendDirectMessageActionData
      | NewChat.SendChannelMessageActionData
      | NewChat.SendChatMessageActionData
  ): NewChat.ActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
