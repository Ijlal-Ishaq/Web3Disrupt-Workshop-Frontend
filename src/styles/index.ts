import {
  Box,
  CircularProgress,
  Grid,
  Modal,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { common } from "../utils/common";

export const ThemeColors = {
  light: "#DFB78C",
  medium: "#AB6832",
  dark: "#49281A",
};

export const StyledModal = styled(Modal)(() => ({
  position: "fixed",
  zIndex: 1300,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,

  outline: "none",
  border: 0,
  ...common.r_c_c,
}));

export const Backdrop = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex: -1,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  WebkitTapHighlightColor: "transparent",
}));

export const BlackBackdrop = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex: -1,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.95)",
  WebkitTapHighlightColor: "transparent",
}));

export const CircularProgressStyled = styled(CircularProgress)(
  ({ theme: { palette } }) => ({
    "&.MuiCircularProgress-root": {
      color: palette.primary.main,
    },
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  })
);

export const LoaderWrapper = styled(Box)(({ theme: { palette } }) => ({
  outline: "none",
  width: "200px",
  height: "200px",
  background: palette.primary.light,
  borderRadius: 10,
  border: `2px solid ${palette.primary.main}`,
  ...common.r_c_c,
}));

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  textAlign: "center",
  color: palette.primary.contrastText,
  fontSize: 20,
  ...common.r_c_c,
}));

export const Navbar = styled(Grid)(({ theme: { palette } }) => ({
  height: "15vh",
  border: "1px solid black",
  padding: "0px 30px 0px 30px",
  ...common.r_c_fe,
}));

export const UserBadge = styled(Paper)(({ theme: { palette } }) => ({
  padding: "10px 20px",
  borderRadius: 10,
}));

export const UserBalance = styled(Paper)(({ theme: { palette } }) => ({
  backgroundColor: "white",
  padding: "2px 7px",
  marginRight: 10,
  fontWeight: "bold",
}));
