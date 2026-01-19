import type { FC } from "react";
import type { ILabelProps } from "src/@types/@components/input";

const style = {
  fontSize: "13.5px",
};

export const InputLabel: FC<ILabelProps> = ({ content }) => {
  return <label style={style}>{content}</label>;
};
