import { FC } from "react";
import { LoaderProps } from "../interfaces";
import { CircularProgressStyled } from "../styles";

const Loader: FC<LoaderProps> = ({ size = 70 }) => {
  return <CircularProgressStyled size={size} />;
};

export default Loader;
