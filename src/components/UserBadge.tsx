import { useWeb3React } from "@web3-react/core";
import { Text, UserBadge, UserBadgeCompWrapper } from "../styles";
import { formatAddress } from "../utils";
import CheckCoffeeTokens from "./CheckCoffeeTokens";
import CheckNativeTokens from "./CheckNativeToken";

const UserBadgeComp = () => {
  const { account } = useWeb3React();

  return (
    <UserBadgeCompWrapper>
      <UserBadge elevation={3}>
        <Text>{formatAddress(account ?? "")}</Text>
      </UserBadge>
      <CheckNativeTokens />
      <CheckCoffeeTokens />
    </UserBadgeCompWrapper>
  );
};

export default UserBadgeComp;
