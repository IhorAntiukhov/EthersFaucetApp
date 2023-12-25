type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLInputElement>;

interface FormStoreState {
  isLoading: boolean,
  useOwnAddress: boolean,
  address: string,
  amount: string,

  setIsLoading: (isLoading: boolean) => void,
  setUseOwnAddress: (changeEvent: ChangeEvent) => void,
  setAddress: (changeEvent: FormEvent) => void,
  setAmount: (changeEvent: FormEvent) => void
}

export type { FormStoreState, ChangeEvent, FormEvent };
