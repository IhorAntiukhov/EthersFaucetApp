import { ethers } from 'ethers';

interface ContractStoreProps {
  contract: ethers.Contract,
  accounts: string[],
  balance: string,
  tokenSymbol: string
}

interface ContractStoreState {
  contract: ethers.Contract | null,
  ownAddress: string,
  balance: number,
  tokenSymbol: string,

  setInfo: (info: ContractStoreProps) => void,
  setBalance: (balance: string) => void
}

export type { ContractStoreState, ContractStoreProps };
