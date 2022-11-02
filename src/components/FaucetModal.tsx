import { Button } from "@mui/material";
import { FC } from "react";
import { FaucetModalProps } from "../interfaces";
import {
  CrossButton,
  CrossIcon,
  NftModalWrapper,
  Outerwrapper,
} from "../styles";
import { openUrl } from "../utils";
import BasicModal from "./BasicModal";
import GetCoffeeTokens from "./GetCoffeeTokens";

const FaucetModal: FC<FaucetModalProps> = ({ open, closeModal }) => {
  return (
    <BasicModal open={open}>
      <Outerwrapper>
        <CrossButton onClick={closeModal}>
          <CrossIcon />
        </CrossButton>
        <NftModalWrapper>
          <Button
            variant="contained"
            onClick={() => openUrl("https://faucet.polygon.technology/")}
          >
            Get matic token
          </Button>
          <GetCoffeeTokens />
        </NftModalWrapper>
      </Outerwrapper>
    </BasicModal>
  );
};

export default FaucetModal;
