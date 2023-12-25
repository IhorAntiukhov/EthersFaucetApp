import {
  Card, CardHeader, Center, Divider, Heading,
} from '@chakra-ui/react';
import useGetBalance from './hooks/useGetBalance';
import Balance from './components/Balance';
import Form from './components/Form';

function App() {
  useGetBalance();

  return (
    <Center p={6}>
      <Card width={['100%', null, 'auto']}>
        <CardHeader bgGradient="linear(to-br, blue.500, blue.300)">
          <Heading size="md" color="white">Faucet</Heading>
        </CardHeader>

        <Balance />
        <Divider />
        <Form />

      </Card>
    </Center >
  );
}

export default App
