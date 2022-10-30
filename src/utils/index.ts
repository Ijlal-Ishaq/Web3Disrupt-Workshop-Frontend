export const formatAddress = (address: string) =>
  address
    ? `${address.slice(0, 8)}...${address.slice(address.length - 8)}`
    : "";
