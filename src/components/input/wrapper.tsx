import type { FC } from "react";
import type { IInputWrapperProps } from "src/@types/@components/input";
import { colors } from "@shared/colors";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${colors.primary}`,
  borderRadius: "4px",
  paddingRight: "10px",
  gap: "10px",
};

export const InputWrapper: FC<IInputWrapperProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};
