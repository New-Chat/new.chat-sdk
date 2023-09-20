export type EncodeResult = {
  iv: string;
  ephemPubKey: string;
  cipherText: string;
  mac: string;
};