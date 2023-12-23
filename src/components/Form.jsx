import { useDispatch, useSelector } from 'react-redux';
import {
  CardFooter, Stack, FormControl, Input, Box, Switch, FormLabel, Button
} from '@chakra-ui/react';
import useShowToast from '../hooks/useShowToast';
import { startLoading, setAddress, setUseOwnAddress, setAmount } from '../store/slices/formSlice';
import { setBalance } from '../store/slices/contractSlice';

function Form() {
  const dispatch = useDispatch();
  const { address, useOwnAddress, amount } = useSelector((state) => state.formReducer);
  const { contract, ownAddress, tokenSymbol } = useSelector((state) => state.contractReducer);

  const showToast = useShowToast();

  const handleSendMATIC = async () => {
    let balance = 0;
    dispatch(startLoading(true));

    try {
      const tx = await contract.mint((useOwnAddress) ? ownAddress : address, Number(amount));
      await tx.wait();

      balance = await contract.balanceOf(ownAddress);

      showToast('Minting USDTM', 'USDTM minting completed!', 'success');
    } catch (error) {
      showToast('Minting USDTM', 'Failed to perform mint operation or get balance!');
    }

    dispatch(setBalance(balance));
  }

  return (
    <CardFooter>
      <Stack spacing={4} width="100%">
        <FormControl display='flex' flexDirection={['column', null, 'row']} alignItems="center">
          <Input value={address} onInput={(event) => dispatch(setAddress(event))}
            isDisabled={useOwnAddress} type='number' placeholder='Enter address ...'
            width={['100%', null, 400]} mr={[0, null, 4]} mb={[2, null, 0]} />

          <Box display="flex" alignItems="center">
            <Switch id='own-address' value={useOwnAddress} onChange={(event) => dispatch(setUseOwnAddress(event))} mr={2} />
            <FormLabel htmlFor='own-address' whiteSpace="nowrap" mb={0}>
              Use your own address
            </FormLabel>
          </Box>
        </FormControl>

        <Input value={amount} onInput={(event) => dispatch(setAmount(event))}
          type='number' placeholder='Enter amount ...' width="100%" />
        <Button isDisabled={!amount || (!address && !useOwnAddress) || !window.ethereum} onClick={handleSendMATIC}
          colorScheme="blue">
          Mint {tokenSymbol}
        </Button>
      </Stack>
    </CardFooter>
  );
}

export default Form;
