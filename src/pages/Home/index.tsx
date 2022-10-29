import { FC } from "react";
import * as Components from "./components";
import { useWeb3React } from "@web3-react/core";
import { injector, getErrorMessage } from "../../utils/connector";

const Index: FC = () => {
  const { activate, active, account } = useWeb3React();

  const connectMetamask = async () => {
    activate(injector, (err) => {
      console.log(getErrorMessage(err));
    });
  };

  return (
    <Components.MainContainer>
      {active ? (
        <h1 style={{ color: "black" }}>Welcome to Web3Disrupt {account}</h1>
      ) : (
        <button onClick={connectMetamask}>Connect Metamask</button>
      )}
    </Components.MainContainer>
  );
};

export default Index;
