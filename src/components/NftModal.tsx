import { FC } from "react";
import { NftModalProps } from "../interfaces";
import {
  NftModalWrapper,
  ModalText,
  DummyNFT,
  ExplorerButton,
  Outerwrapper,
  CrossIcon,
  CrossButton,
} from "../styles";
import BasicModal from "./BasicModal";
import coffee from "../assets/coffee.png";
import { openUrl } from "../utils";

const NftModal: FC<NftModalProps> = ({ open, nftAmount, closeModal, link }) => {
  return (
    <BasicModal open={open}>
      <Outerwrapper>
        <CrossButton onClick={closeModal}>
          <CrossIcon />
        </CrossButton>
        <NftModalWrapper>
          <ModalText sx={{ fontSize: 26 }}>Thank you for the Coffee!</ModalText>
          <ModalText>Surprise! you got {nftAmount} Coffee NFTs</ModalText>
          <ModalText sx={{ fontSize: 15 }}>
            Click on the Coffee to view it on Opensea
          </ModalText>
          <DummyNFT
            elevation={5}
            onClick={() => {
              openUrl("https://testnets.opensea.io/account");
            }}
          >
            <img className="coffee-on-modal" src={coffee} alt="asda" />
          </DummyNFT>
        </NftModalWrapper>
        <ExplorerButton variant="contained" onClick={() => openUrl(link)}>
          View Transaction on explorer
        </ExplorerButton>
      </Outerwrapper>
    </BasicModal>
  );
};

export default NftModal;
