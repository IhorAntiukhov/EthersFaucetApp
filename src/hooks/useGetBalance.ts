import { useEffect } from 'react';
import { ethers } from 'ethers';
import useContractStore from '../store/contractStore';
import useShowToast from './useShowToast';
import ABI from '../contract/ABI.json';

function useGetBalance() {
  const setInfo = useContractStore((state) => state.setInfo);
  const showToast = useShowToast();

  useEffect(() => {
    if ((window as any).ethereum) {
      const getBalance = async () => {
        try {
          const provider = new ethers.BrowserProvider((window as any).ethereum);
          const signer = await provider.getSigner();
          const accounts = await provider.send("eth_requestAccounts", []);

          const contract = new ethers.Contract((process.env as any).VITE_CONTRACT_ADDRESS, ABI, signer);
          const balance = await contract.balanceOf(accounts[0]);
          const tokenSymbol = await contract.symbol();

          setInfo({ accounts, contract, balance, tokenSymbol });
        } catch (error) {
          showToast('Getting balance', 'Failed to get balance!');
        }
      }

      getBalance();
    } else {
      showToast('Getting balance', 'Ethereum wallet is not connected!');
    }
  }, [showToast]);
}

export default useGetBalance;
