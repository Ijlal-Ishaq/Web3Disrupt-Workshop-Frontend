import { CircularProgress } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import {
  CheckTokenWrapper,
  IconAvatar,
  TokenIcon,
  UserBalance,
} from "../styles";
import { getUserNativeBalance } from "../utils";

const CheckNativeTokens = () => {
  const { account } = useWeb3React();
  const [native, setNativeBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const checkNativeBalance = async () => {
    setIsLoading(true);
    const balance = await getUserNativeBalance(`${account}`);
    setNativeBalance(Number(balance.toFixed(3)));
    setIsLoading(false);
  };

  useEffect(() => {
    if (account) {
      checkNativeBalance();
    } else {
      setNativeBalance(0);
    }
  }, [account]);

  return (
    <CheckTokenWrapper>
      <UserBalance elevation={3}>{native} MATIC</UserBalance>
      <IconAvatar onClick={checkNativeBalance}>
        {isLoading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          <TokenIcon />
        )}
      </IconAvatar>
    </CheckTokenWrapper>
  );
};

export default CheckNativeTokens;
