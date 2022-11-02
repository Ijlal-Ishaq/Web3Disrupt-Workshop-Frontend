import { CircularProgress } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import {
  CheckTokenWrapper,
  CoffeeIcon,
  IconAvatar,
  UserBalance,
} from "../styles";
import { COFFEE_TOKEN_ADDRESS, getERC20Balance } from "../utils";

const { abi: coffeeERC20ABI } = require("../abi/coffeeTokenERC20.json");

const CheckCoffeeTokens = () => {
  const { account } = useWeb3React();
  const [coffeeBalance, setCoffeeBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const checkCoffeeBalance = async () => {
    setIsLoading(true);
    const CoffeeBalance = await getERC20Balance(
      coffeeERC20ABI,
      COFFEE_TOKEN_ADDRESS,
      `${account}`
    );
    setCoffeeBalance(Number(CoffeeBalance.toFixed(3)));
    setIsLoading(false);
  };

  useEffect(() => {
    if (account) {
      checkCoffeeBalance();
    } else {
      setCoffeeBalance(0);
    }
  }, [account]);

  return (
    <CheckTokenWrapper>
      <UserBalance elevation={3}>{coffeeBalance} COFFEE</UserBalance>
      <IconAvatar onClick={checkCoffeeBalance}>
        {isLoading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          <CoffeeIcon />
        )}
      </IconAvatar>
    </CheckTokenWrapper>
  );
};

export default CheckCoffeeTokens;
