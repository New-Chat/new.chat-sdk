export namespace NewChat {
  export type CreateConfigActionData = {
    standard: string;
    version: string;
    public_key: string;
  };

  export type AddContactActionData = {
    owner: string;
    account: string;
  };

  export type RemoveContactActionData = {
    owner: string;
    account: string;
  };

  export type AddChannelMemberActionData = {
    admin: string;
    tag: string;
    account: string;
  };

  export type RemoveChannelMemberActionData = {
    admin: string;
    tag: string;
    account: string;
  };

  export type AddChatMemberActionData = {
    admin: string;
    tag: string;
    account: string;
  };

  export type RemoveChatMemberActionData = {
    admin: string;
    tag: string;
    account: string;
  };

  export type AddChannelRoleActionData = {
    owner: string;
    tag: string;
    role: string;
    terminate: boolean;
    delegate: boolean;
    access: boolean;
    write: boolean;
  };

  export type RemoveChannelRoleActionData = {
    owner: string;
    tag: string;
    role: string;
  };

  export type AddChatRoleActionData = {
    owner: string;
    tag: string;
    role: string;
    terminate: boolean;
    delegate: boolean;
    access: boolean;
    write: boolean;
  };

  export type RemoveChatRoleActionData = {
    owner: string;
    tag: string;
    role: string;
  };

  export type CreateChannelActionData = {
    tag: string;
    owner: string;
    description: string;
    public_key: string;
  };

  export type CreateChatActionData = {
    tag: string;
    owner: string;
    description: string;
    public_key: string;
  };

  export type SendDirectMessageActionData = {
    from: string;
    to: string;
    iv: string;
    ephem_key: string;
    cipher_text: string;
    mac: string;
  };

  export type SendChannelMessageActionData = {
    from: string;
    tag: string;
    iv: string;
    ephem_key: string;
    cipher_text: string;
    mac: string;
  };

  export type SendChatMessageActionData = {
    from: string;
    tag: string;
    iv: string;
    ephem_key: string;
    cipher_text: string;
    mac: string;
  };

  export type AuthorizationObject = { actor: string; permission: string };

  export type ActionObject = {
    account: string;
    name: string;
    authorization: AuthorizationObject[];
    data:
      | CreateConfigActionData
      | AddContactActionData
      | RemoveContactActionData
      | AddChannelMemberActionData
      | RemoveChannelMemberActionData
      | AddChatMemberActionData
      | RemoveChatMemberActionData
      | AddChannelRoleActionData
      | RemoveChannelRoleActionData
      | AddChatRoleActionData
      | RemoveChatRoleActionData
      | CreateChannelActionData
      | CreateChatActionData
      | SendDirectMessageActionData
      | SendChannelMessageActionData
      | SendChatMessageActionData;
  };
}
