import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { UnsupportedChainIdError } from "@web3-react/core";

export const injector = new InjectedConnector({
  supportedChainIds: [1],
});

export const getErrorMessage = (error: any) => {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return `You're connected to an unsupported network. Please switch to Mumbai Testnet.`;
  } else if (error instanceof UserRejectedRequestError) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
};