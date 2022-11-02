export type BasicModalProps = {
  children: React.ReactElement;
  open: boolean;
  isShowBlackBackDrop?: boolean;
};

export type CoffeeInputProps = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

export type LoadingModalProps = { open: boolean };

export type FaucetModalProps = { open: boolean; closeModal: () => void };

export type LoaderProps = { size?: number };

export type NftModalProps = {
  open: boolean;
  nftAmount: number;
  link: string;
  closeModal: () => void;
};
