import type { FC } from "react";
import type { IElementProps } from "src/@types/@components/input";

const style = {
  height: "2.5rem",
  borderRadius: "4px",
  paddingLeft: "10px",
  width: "100%",
};

export const InputComponent: FC<IElementProps> = ({ ...rest }) => {
  return <input {...rest} style={style} />;
};
