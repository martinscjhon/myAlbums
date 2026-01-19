import type { FC } from "react";
import {
  IconButton as MuiIconButton,
  type IconButtonProps,
} from "@mui/material";
import type { IIconButtonProps } from "src/@types/@components/iconButton";

export const IconButton: FC<IIconButtonProps & IconButtonProps> = ({
  icon: Icon,
  ...rest
}) => {
  return (
    <MuiIconButton {...rest}>
      <Icon size={24} />
    </MuiIconButton>
  );
};
