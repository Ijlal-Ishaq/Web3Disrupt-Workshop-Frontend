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
import CancelIcon from "@mui/icons-material/Cancel";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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

export const NftModalWrapper = styled(Box)(({ theme: { palette } }) => ({
  outline: "none",
  background: palette.primary.light,
  borderRadius: 10,
  border: `2px solid ${palette.primary.main}`,
  padding: 20,
  ...common.c_c_c,
}));

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  textAlign: "center",
  color: palette.primary.contrastText,
  fontSize: 20,
  ...common.r_c_c,
}));

export const Navbar = styled(Grid)(({ theme: { palette } }) => ({
  marginTop: 25,
  height: "20vh",
  padding: "15px 30px 0px 30px",
  ...common.r_fs_fe,
}));

export const UserBadge = styled(Paper)(({ theme: { palette } }) => ({
  marginLeft: 20,
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
  height: "75vh",
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

export const CrossIcon = styled(CancelIcon)(({ theme: { palette } }) => ({
  color: "red",
  fontSize: 35,
}));

export const ModalText = styled(Text)(({ theme: { palette } }) => ({
  color: palette.primary.main,
}));

export const DummyNFT = styled(Paper)(({ theme: { palette } }) => ({
  background: "white",
  height: 208,
  padding: "7px 12%",
  border: "2px solid black",
  marginTop: 20,
}));

export const ExplorerButton = styled(Button)(({ theme: { palette } }) => ({
  backgroundColor: "white",
  color: palette.primary.main,
  marginTop: 20,
}));

export const FaucetButton = styled(Button)(({ theme: { palette } }) => ({
  marginRight: 20,
}));

export const Outerwrapper = styled("div")(({ theme: { palette } }) => ({
  ...common.c_c_c,
  outline: "none",
}));

export const CrossButton = styled(IconButton)(({ theme: { palette } }) => ({
  alignSelf: "flex-end",
}));

export const InputWrapper = styled("div")(({ theme: { palette } }) => ({
  ...common.r_c_sa,
  width: "100%",
}));

export const CoffeeIcon = styled(FreeBreakfastIcon)(
  ({ theme: { palette } }) => ({
    color: "white",
  })
);

export const TokenIcon = styled(MonetizationOnIcon)(
  ({ theme: { palette } }) => ({
    color: "white",
  })
);

export const IconAvatar = styled(IconButton)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
}));

export const CheckTokenWrapper = styled("div")(({ theme: { palette } }) => ({
  ...common.r_c_c,
  marginTop: 10,
}));

export const GetCoffeeTokensWrapper = styled("div")(
  ({ theme: { palette } }) => ({
    marginTop: 20,
  })
);

export const UserBadgeCompWrapper = styled("div")(({ theme: { palette } }) => ({
  ...common.c_fe_c,
}));
