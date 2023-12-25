import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

type statusType = "info" | "warning" | "success" | "error" | "loading" | undefined;

function useShowToast() {
  const toast = useToast();

  const showToast = useCallback((title: string, description: string, status: statusType = 'error') => {
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
