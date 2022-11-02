import { FC } from "react";
import { LoadingModalProps } from "../interfaces";
import { LoaderWrapper } from "../styles";
import BasicModal from "./BasicModal";
import Loader from "./Loader";

const LoadingModal: FC<LoadingModalProps> = ({ open }) => {
  return (
    <BasicModal open={open}>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    </BasicModal>
  );
};

export default LoadingModal;
