import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Text, UserBadge, UserBalance } from "../styles";
import { formatAddress, getUserNativeBalance } from "../utils";
import { common } from "../utils/common";

const UserBadgeComp = () => {
  const { account } = useWeb3React();

  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    (async () => {
      if (account) {
        const balance = await getUserNativeBalance(account);
        setUserBalance(Number(balance.toFixed(3)));
      }
    })();
  }, [account]);

  return (
    <UserBadge elevation={3}>
      <div style={{ ...common.r_c_c }}>
        <UserBalance elevation={3}>{userBalance} MATIC</UserBalance>
        <Text>{formatAddress(account ?? "")}</Text>
      </div>
    </UserBadge>
  );
};

export default UserBadgeComp;
