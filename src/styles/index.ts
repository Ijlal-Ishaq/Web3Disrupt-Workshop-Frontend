import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { common } from "../utils/common";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

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

export const CoffeeContainer = styled(Paper)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
  width: "55%",
  padding: "20px 20px",
  ...common.c_c_sb,
}));

export const MainContainer = styled(Grid)(({ theme: { palette } }) => ({
  height: "85vh",
  ...common.r_c_c,
}));

export const SendCoffeeButton = styled(Button)(({ theme: { palette } }) => ({
  background: "white",
  color: palette.primary.main,
  fontWeight: "bold",
  marginTop: 35,
  "&:hover": {
    backgroundColor: palette.primary.light,
  },
}));

export const ButtonIcon = styled(IconButton)(({ theme: { palette } }) => ({
  backgroundColor: "white",
  padding: "0px",
  boxShadow: "rgba(0,0,0,0.4) 10px 3px 7px 0px",
  "&:hover": {
    backgroundColor: palette.primary.light,
  },
}));

export const AmountText = styled(Text)(({ theme: { palette } }) => ({
  textDecoration: "underline",
  fontSize: 150,
  filter: "drop-shadow(rgba(0, 0, 0, 0.6) 11px 4px 2px)",
  fontFamily: "Fredoka One, cursive",
}));

export const UpIcon = styled(KeyboardArrowUp)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  fontSize: 50,
}));

export const DownIcon = styled(KeyboardArrowDown)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  fontSize: 50,
}));
