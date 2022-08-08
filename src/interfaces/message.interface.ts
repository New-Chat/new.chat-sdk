export interface DirectMessagePayload {
  from: string;
  to: string;
  iv: string;
  ephem_key: string;
  cipher_text: string;
  mac: string;
}

export interface ChannelMessagePayload {
  from: string;
  channel: string;
  iv: string;
  ephem_key: string;
  cipher_text: string;
  mac: string;
}

export interface ChatMessagePayload {
  from: string;
  chat: string;
  iv: string;
  ephem_key: string;
  cipher_text: string;
  mac: string;
}