import { CoffeeContainer, SendCoffeeButton } from "../styles";
import { common } from "../utils/common";
import CoffeeInput from "./CoffeeInput";
import coffee from "../assets/coffee.png";

const CoffeeContainerComp = () => {
  return (
    <CoffeeContainer elevation={5}>
      <div style={{ ...common.r_c_sa, width: "100%" }}>
        <CoffeeInput />
        <img
          className="coffee-cup"
          src={coffee}
          style={{
            filter: "drop-shadow(rgba(0, 0, 0, 0.6) 25px 8px 3px)",
            height: "80%",
          }}
          alt="asda"
        />
      </div>
      <SendCoffeeButton fullWidth variant="contained">
        Send Coffee Tokens
      </SendCoffeeButton>
    </CoffeeContainer>
  );
};

export default CoffeeContainerComp;
