import {
  CardFooter, Stack, FormControl, Input, Box, Switch, FormLabel, Button
} from '@chakra-ui/react';
import useFormStore from '../store/formStore';
import useContractStore from '../store/contractStore';
import useShowToast from '../hooks/useShowToast';

function Form() {
  const {
    address, useOwnAddress, amount, setIsLoading, setAddress, setUseOwnAddress, setAmount
  } = useFormStore((state) => state);

  const {
    contract, ownAddress, tokenSymbol, setBalance
  } = useContractStore((state) => state);

  const showToast = useShowToast();

  const handleSendMATIC = async () => {
    let balance = '';
    setIsLoading(true);

    try {
      const tx = await contract?.mint((useOwnAddress) ? ownAddress : address, Number(amount));
      await tx.wait();

      balance = await contract?.balanceOf(ownAddress);

      showToast('Minting USDTM', 'USDTM minting completed!', 'success');
    } catch (error) {
      showToast('Minting USDTM', 'Failed to perform mint operation or get balance!');
    }

    setBalance(balance);
    setIsLoading(false);
  }

  return (
    <CardFooter>
      <Stack spacing={4} width="100%">
        <FormControl display='flex' flexDirection={['column', null, 'row']} alignItems="center">
          <Input value={address} onInput={(event) => setAddress(event)}
            isDisabled={useOwnAddress} type='text' placeholder='Enter address ...'
            width={['100%', null, 400]} mr={[0, null, 4]} mb={[2, null, 0]} />

          <Box display="flex" alignItems="center">
            <Switch id='own-address' value={String(useOwnAddress)} onChange={(event) => setUseOwnAddress(event)} mr={2} />
            <FormLabel htmlFor='own-address' whiteSpace="nowrap" mb={0}>
              Use your own address
            </FormLabel>
          </Box>
        </FormControl>

        <Input value={amount} onInput={(event) => setAmount(event)}
          type='number' placeholder='Enter amount ...' width="100%" />
        <Button isDisabled={!amount || (!address && !useOwnAddress) || !(window as any).ethereum} onClick={handleSendMATIC}
          colorScheme="blue">
          Mint {tokenSymbol}
        </Button>
      </Stack>
    </CardFooter>
  );
}

export default Form;
