import { useWeb3React } from "@web3-react/core";
import { Text, UserBadge, UserBalance } from "../styles";
import { formatAddress } from "../utils";

const UserBadgeComp = () => {
  const { account } = useWeb3React();
  return (
    <UserBadge elevation={3}>
      <Text>
        <UserBalance elevation={3}>0 ETH</UserBalance>
        {formatAddress(account ?? "")}
      </Text>
    </UserBadge>
  );
};

export default UserBadgeComp;
