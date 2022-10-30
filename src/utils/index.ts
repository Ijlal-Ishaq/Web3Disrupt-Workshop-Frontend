import Web3 from "web3";

export const web3 = window.ethereum
  ? new Web3(window.ethereum)
  : new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth"));

export const formatAddress = (address: string) =>
  address
    ? `${address.slice(0, 8)}...${address.slice(address.length - 8)}`
    : "";

export const getUserNativeBalance = async (address: string) => {
  const balanceInWei = await web3.eth.getBalance(address);
  const balanceInEth = web3.utils.fromWei(balanceInWei);
  return Number(balanceInEth);
};
