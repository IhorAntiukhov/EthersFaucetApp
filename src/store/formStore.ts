import { create } from 'zustand';
import { FormStoreState, ChangeEvent, FormEvent } from '../types/formStoreState';

const useFormStore = create<FormStoreState>((set) => ({
  isLoading: false,
  useOwnAddress: true,
  address: '',
  amount: '',

  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setUseOwnAddress: (changeEvent: ChangeEvent) => set(() => ({ useOwnAddress: changeEvent.target.checked })),
  setAddress: (changeEvent: FormEvent) => set(() => ({ address: changeEvent.currentTarget.value })),
  setAmount: (changeEvent: FormEvent) => set(() => ({ amount: changeEvent.currentTarget.value }))
}));

export default useFormStore;
