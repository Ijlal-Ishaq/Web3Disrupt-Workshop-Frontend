import { FC } from "react";
import { Grid } from "@mui/material";
import { MainContainer, Navbar } from "../../styles";
import UserBadge from "../../components/UserBadge";
import CoffeeContainer from "../../components/CoffeeContainer";
import GetCoffeeTokens from "../../components/GetCoffeeTokens";

const Index: FC = () => {
  return (
    <Grid container>
      <Navbar item xs={12}>
        <GetCoffeeTokens />
        <UserBadge />
      </Navbar>
      <MainContainer item xs={12}>
        <CoffeeContainer />
      </MainContainer>
    </Grid>
  );
};

export default Index;
