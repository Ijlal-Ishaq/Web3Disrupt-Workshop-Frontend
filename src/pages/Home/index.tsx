import { Grid } from "@mui/material";
import { FaucetButton, MainContainer, Navbar } from "../../styles";
import UserBadge from "../../components/UserBadge";
import CoffeeContainer from "../../components/CoffeeContainer";
import FaucetModal from "../../components/FaucetModal";
import { useState } from "react";

const Home = () => {
  const [faucetModal, setFaucetModal] = useState(false);
  return (
    <Grid container>
      <Navbar item xs={12}>
        <FaucetButton variant="contained" onClick={() => setFaucetModal(true)}>
          Faucet
        </FaucetButton>
        <UserBadge />
      </Navbar>
      <MainContainer item xs={12}>
        <CoffeeContainer />
      </MainContainer>
      <FaucetModal
        open={faucetModal}
        closeModal={() => setFaucetModal(false)}
      />
    </Grid>
  );
};

export default Home;
