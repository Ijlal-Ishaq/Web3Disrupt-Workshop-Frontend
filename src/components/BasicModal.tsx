import { FC } from "react";
import { Backdrop, BlackBackdrop, StyledModal } from "../styles";
import { BasicModalProps } from "../interfaces";

const BasicModal: FC<BasicModalProps> = ({
  children,
  open,
  isShowBlackBackDrop,
}) => {
  return (
    <StyledModal
      open={open}
      components={{
        Backdrop: isShowBlackBackDrop ? BlackBackdrop : Backdrop,
      }}
    >
      {children}
    </StyledModal>
  );
};

export default BasicModal;
