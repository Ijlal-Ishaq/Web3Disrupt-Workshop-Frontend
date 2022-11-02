import Web3 from "web3";

export const web3 = window.ethereum
  ? new Web3(window.ethereum)
  : new Web3(
      new Web3.providers.HttpProvider("https://rpc.ankr.com/polygon_mumbai")
    );
// : new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth"));

export const formatAddress = (address: string) =>
  address
    ? `${address.slice(0, 8)}...${address.slice(address.length - 8)}`
    : "";

export const getUserNativeBalance = async (address: string) => {
  const balanceInWei = await web3.eth.getBalance(address);
  const balanceInEth = web3.utils.fromWei(balanceInWei);
  return Number(balanceInEth);
};

export const getERC20Balance = async (
  ERC20contractAbi: any,
  ERC20contractAddress: string,
  userAddress: string
) => {
  const Erc20Contract = new web3.eth.Contract(
    ERC20contractAbi,
    ERC20contractAddress
  );
  const BalanceInWei = await Erc20Contract.methods
    .balanceOf(userAddress)
    .call();
  const BalanceInEther = web3.utils.fromWei(BalanceInWei);
  return Number(BalanceInEther);
};

export const checkApprovalOfErc20Token = async (
  ERC20contractAbi: any,
  ERC20contractAddress: string,
  userAddress: string,
  spenderAddres: string
) => {
  const Erc20Contract = new web3.eth.Contract(
    ERC20contractAbi,
    ERC20contractAddress
  );
  const allowanceAmountInWei = await Erc20Contract.methods
    .allowance(userAddress, spenderAddres)
    .call();
  const allowanceAmountInEther = web3.utils.fromWei(allowanceAmountInWei);
  return Number(allowanceAmountInEther) > 1;
};

export const openUrl = (url: string) => {
  window.open(url, "_blank")?.focus();
};
