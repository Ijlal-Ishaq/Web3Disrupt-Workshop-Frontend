import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { LoaderWrapper } from "../styles";
import { web3 } from "../utils";
import BasicModal from "./BasicModal";
import Loader from "./Loader";

const { abi: coffeeERC20ABI } = require("../abi/coffeeTokenERC20.json");

const GetCoffeeTokens = () => {
  const { account } = useWeb3React();

  const [isLoading, setIsLoading] = useState(false);

  const getCoffeeTokens = async () => {
    const coffeeErc20Contract = new web3.eth.Contract(
      coffeeERC20ABI,
      "0xF3CcB93f3a1Ee251a11806BDADC1E5848918cEA6"
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
    <>
      <Button variant="contained" onClick={getCoffeeTokens}>
        GET SOME COFFEE TOKENS
      </Button>
      <BasicModal open={isLoading}>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </BasicModal>
    </>
  );
};

export default GetCoffeeTokens;
