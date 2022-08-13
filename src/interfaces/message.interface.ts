export interface DirectMessagePayload {
  from: string;
  to: string;
  iv: string;
  ephemKey: string;
  cipherText: string;
  mac: string;
}

export interface ChannelMessagePayload {
  from: string;
  channel: string;
  iv: string;
  ephemKey: string;
  cipherText: string;
  mac: string;
}

export interface ChatMessagePayload {
  from: string;
  chat: string;
  iv: string;
  ephemKey: string;
  cipherText: string;
  mac: string;
}