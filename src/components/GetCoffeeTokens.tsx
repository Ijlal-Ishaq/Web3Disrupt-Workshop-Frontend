import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { GetCoffeeTokensWrapper } from "../styles";
import { COFFEE_TOKEN_ADDRESS, web3 } from "../utils";
import LoadingModal from "./LoadingModal";

const { abi: coffeeERC20ABI } = require("../abi/coffeeTokenERC20.json");

const GetCoffeeTokens = () => {
  const { account } = useWeb3React();

  const [isLoading, setIsLoading] = useState(false);

  const getCoffeeTokens = async () => {
    const coffeeErc20Contract = new web3.eth.Contract(
      coffeeERC20ABI,
      COFFEE_TOKEN_ADDRESS
    );
    const amountTomint = web3.utils.toWei("3");
    setIsLoading(true);
    await coffeeErc20Contract.methods
      .mint(account, amountTomint)
      .send({
        from: account,
      })
      .once("receipt", function (receipt: any) {
        console.log("receipt", receipt);
        setIsLoading(false);
      })
      .on("error", function (error: any) {
        setIsLoading(false);
      });
  };
  return (
    <GetCoffeeTokensWrapper>
      <Button variant="contained" onClick={getCoffeeTokens}>
        GET COFFEE TOKENS
      </Button>
      <LoadingModal open={isLoading} />
    </GetCoffeeTokensWrapper>
  );
};

export default GetCoffeeTokens;
