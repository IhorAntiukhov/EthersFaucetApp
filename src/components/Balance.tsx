import {
  CardBody, Stack, Center, HStack, Spinner, Text
} from '@chakra-ui/react';
import useContractStore from '../store/contractStore';
import useFormStore from '../store/formStore';

function Balance() {
  const { balance, tokenSymbol } = useContractStore((state) => state);
  const isLoading = useFormStore((state) => state.isLoading);

  return (
    <CardBody>
      <Stack spacing={4}>
        <Center>
          <HStack pt={2}>
            {(!tokenSymbol || isLoading) && <Spinner color='blue.500' />}
            {!!tokenSymbol &&
              <Text fontSize="large" fontWeight="bold" color='gray.600'>
                {balance} {tokenSymbol}
              </Text>}
          </HStack>
        </Center>
      </Stack>
    </CardBody>
  );
}

export default Balance;
