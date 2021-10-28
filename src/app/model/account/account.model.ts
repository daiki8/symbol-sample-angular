export type Account = {
  address: string;
  publicKey: string;
  mosaics: {
    id: string;
    amount: bigint;
  }[];
  importanceMicroXym: bigint;
}

export type Wallet = {
  address: string;
  publicKey: string;
  privateKey: string;
}