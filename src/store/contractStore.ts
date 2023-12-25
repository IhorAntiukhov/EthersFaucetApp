import { create } from 'zustand';
import { ContractStoreState, ContractStoreProps } from '../types/contractStoreState';

const useContractStore = create<ContractStoreState>((set) => ({
  ownAddress: '',
  contract: null,
  balance: 0,
  tokenSymbol: '',

  setInfo: (info: ContractStoreProps) => set(() => ({
    ownAddress: info.accounts[0],
    contract: info.contract,
    balance: Number(info.balance),
    tokenSymbol: info.tokenSymbol
  })),
  setBalance: (balance: string) => set(() => ({
    balance: Number(balance)
  }))
}));

export default useContractStore;
