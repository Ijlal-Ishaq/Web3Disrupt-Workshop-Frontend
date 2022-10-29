import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { getErrorMessage, injector } from "../utils/connector";
import BasicModal from "./BasicModal";
import Loader from "./Loader";
import { Button, useTheme } from "@mui/material";
import { LoaderWrapper } from "../styles";

const ConnectWallet = () => {
  const web3context = useWeb3React();
  const { palette } = useTheme();
  const [wasConnectedBefore, setWasConnectedBefore] = useState(false);

  const connectWallet = async () => {
    await web3context.activate(injector, (err) => {
      console.log(getErrorMessage(err));
    });
  };

  useEffect(() => {
    (async () => {
      await connectWallet();
      setWasConnectedBefore(true);
    })();
  }, []);
  return (
    <BasicModal open={!web3context.active}>
      <LoaderWrapper>
        {wasConnectedBefore ? (
          <Button
            variant="contained"
            style={{ background: palette.primary.main }}
            onClick={() => connectWallet()}
          >
            Connect Wallet
          </Button>
        ) : (
          <Loader />
        )}
      </LoaderWrapper>
    </BasicModal>
  );
};

export default ConnectWallet;
