import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import useShowToast from './useShowToast';
import { setInfo } from '../store/slices/contractSlice';
import ABI from '../contract/ABI.json';

function useGetBalance() {
  const dispatch = useDispatch();
  const showToast = useShowToast();

  useEffect(() => {
    if (window.ethereum) {
      const getBalance = async () => {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const accounts = await provider.send("eth_requestAccounts", []);

          const contract = new ethers.Contract('0xA2119EC01313AF5c4c1225698bA670437DbBac46', ABI, signer);
          const balance = await contract.balanceOf(accounts[0]);
          const tokenSymbol = await contract.symbol();

          dispatch(setInfo({ accounts, contract, balance, tokenSymbol }));
        } catch (error) {
          showToast('Getting balance', 'Failed to get balance!');
        }
      }

      getBalance();
    } else {
      showToast('Getting balance', 'Ethereum wallet is not connected!');
    }
  }, [dispatch, showToast]);
}

export default useGetBalance;
