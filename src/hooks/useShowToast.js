import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

function useShowToast() {
  const toast = useToast();

  const showToast = useCallback((title, description, status = 'error') => {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  }, [toast]);

  return showToast;
}

export default useShowToast;
