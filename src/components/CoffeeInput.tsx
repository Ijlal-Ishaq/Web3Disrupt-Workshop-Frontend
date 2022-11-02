import { FC } from "react";
import { CoffeeInputProps } from "../interfaces";
import { AmountText, ButtonIcon, DownIcon, UpIcon } from "../styles";

const CoffeeInput: FC<CoffeeInputProps> = ({ amount, setAmount }) => {
  const onAdd = () => setAmount(amount + 1);

  const onSubtract = () => amount > 0 && setAmount(amount - 1);

  return (
    <div>
      <ButtonIcon onClick={onAdd}>
        <UpIcon />
      </ButtonIcon>
      <AmountText className="amount-text">{amount}</AmountText>
      <ButtonIcon onClick={onSubtract}>
        <DownIcon />
      </ButtonIcon>
    </div>
  );
};

export default CoffeeInput;
