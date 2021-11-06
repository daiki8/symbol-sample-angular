export type Account = {
  address: string;
  publicKey: string;
  mosaics: {
    id: string;
    amount: bigint;
  }[];
  importanceMicroXym: bigint;
}

export type MultisigAccount = {
    address: string;
    cosignatoryAddresses: string[];
    cosignatoryAdressNum: number;
    minApproval: number;
    minRemoval: number;
}

export type Wallet = {
  address: string;
  publicKey: string;
  privateKey: string;
}