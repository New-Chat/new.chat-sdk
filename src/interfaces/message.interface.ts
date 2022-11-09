export interface DirectMessage {
  from: string;
  to: string;
  iv: string;
  ephemKey: string;
  cipherText: string;
  mac: string;
}

export interface ChannelMessage {
  from: string;
  channel: string;
  iv: string;
  ephemKey: string;
  cipherText: string;
  mac: string;
}

export interface ChatMessage {
  from: string;
  chat: string;
  iv: string;
  ephemKey: string;
  cipherText: string;
  mac: string;
}
