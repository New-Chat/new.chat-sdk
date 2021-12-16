export interface DirectMessagePayload {
  from: string;
  to: string;
  iv: string;
  ephem_key: string;
  cipher_text: string;
  mac: string;
}
