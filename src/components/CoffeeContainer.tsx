import { useEffect, useState } from "react";
import { CoffeeContainer, InputWrapper, SendCoffeeButton } from "../styles";
import CoffeeInput from "./CoffeeInput";
import coffee from "../assets/coffee.png";
import { checkApprovalOfErc20Token, web3 } from "../utils";
import { useWeb3React } from "@web3-react/core";
import LoadingModal from "./LoadingModal";
import NftModal from "./NftModal";

const { abi: coffeeABI } = require("../abi/coffee.json");
const { abi: coffeeERC20ABI } = require("../abi/coffeeTokenERC20.json");

const CoffeeContainerComp = () => {
  const { account } = useWeb3React();

  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [NftModalOpen, setNftModalOpen] = useState(false);
  const [currentTxHash, setCurrentTxHash] = useState("");
  const [isTokenApproved, setIsTokenApproved] = useState(false);

  const donateCoffee = async () => {
    const coffeeContract = new web3.eth.Contract(
      coffeeABI,
      "0xc49a84ceD3075b291A38f8f5cDA596524B6B6421"
    );
    setIsLoading(true);
    await coffeeContract.methods
      .donate(amount)
      .send({
        from: account,
      })
      .once("receipt", function (receipt: any) {
        console.log("receipt", receipt);
      })
      .on(
        "confirmation",
        function (confNumber: any, receipt: any, latestBlockHash: any) {
          console.log("receipt", receipt, confNumber);
          if (confNumber === 0) {
            setCurrentTxHash(receipt.transactionHash);
            setIsLoading(false);
            setNftModalOpen(true);
          }
        }
      )
      .on("error", function (error: any) {
        setIsLoading(false);
      });
  };

  const closeNftModal = () => {
    setNftModalOpen(false);
    setAmount(0);
    setCurrentTxHash("");
  };

  const checkApprovalOfCoffeeToken = async () => {
    const isApproved = await checkApprovalOfErc20Token(
      coffeeERC20ABI,
      "0xF3CcB93f3a1Ee251a11806BDADC1E5848918cEA6",
      `${account}`,
      "0xc49a84ceD3075b291A38f8f5cDA596524B6B6421"
    );
    setIsTokenApproved(isApproved);
  };

  const approvetokens = async () => {
    const coffeeERC20Contract = new web3.eth.Contract(
      coffeeERC20ABI,
      "0xF3CcB93f3a1Ee251a11806BDADC1E5848918cEA6"
    );
    setIsLoading(true);
    const approvalAmount = web3.utils.toWei("10");
    await coffeeERC20Contract.methods
      .approve("0xc49a84ceD3075b291A38f8f5cDA596524B6B6421", approvalAmount)
      .send({
        from: account,
      })
      .once("receipt", function (receipt: any) {
        console.log("receipt", receipt);
      })
      .on(
        "confirmation",
        function (confNumber: any, receipt: any, latestBlockHash: any) {
          if (confNumber === 0) {
            checkApprovalOfCoffeeToken();
            setIsLoading(false);
          }
        }
      )
      .on("error", function (error: any) {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (account) {
      checkApprovalOfCoffeeToken();
    }
  }, [account]);

  const handleSubmit = () =>
    isTokenApproved ? donateCoffee() : approvetokens();

  return (
    <CoffeeContainer elevation={5}>
      <InputWrapper>
        <CoffeeInput amount={amount} setAmount={setAmount} />
        <img className="coffee-cup" src={coffee} alt="asda" />
      </InputWrapper>
      <SendCoffeeButton
        fullWidth
        variant="contained"
        disabled={!Boolean(amount)}
        onClick={handleSubmit}
      >
        {isTokenApproved ? "Send Coffee Tokens" : "Approve Coffee tokens"}
      </SendCoffeeButton>
      <LoadingModal open={isLoading} />
      <NftModal
        open={NftModalOpen}
        nftAmount={amount}
        link={`https://mumbai.polygonscan.com/tx/${currentTxHash}`}
        closeModal={closeNftModal}
      />
    </CoffeeContainer>
  );
};

export default CoffeeContainerComp;
