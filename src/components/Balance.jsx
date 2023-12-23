import { useSelector } from 'react-redux';
import {
  CardBody, Stack, Center, HStack, Spinner, Text
} from '@chakra-ui/react';

function Balance() {
  const { balance, tokenSymbol } = useSelector((state) => state.contractReducer);
  const isLoading = useSelector((state) => state.formReducer.isLoading);

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
