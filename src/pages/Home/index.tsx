import { FC } from "react";
import { useWeb3React } from "@web3-react/core";
import { Typography, Grid } from "@mui/material";
import { Navbar } from "../../styles";
import UserBadge from "../../components/UserBadge";

const Index: FC = () => {
  const { account } = useWeb3React();

  return (
    <Grid container>
      <Navbar item xs={12}>
        <UserBadge />
      </Navbar>
      <Grid item xs={12} style={{ height: "85vh", border: "1px solid black" }}>
        <Typography>Welcome to Web3Disrupt {account}</Typography>
      </Grid>
    </Grid>
  );
};

export default Index;
