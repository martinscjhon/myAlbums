import type { FC } from "react";
import type { IInputRootProps } from "src/@types/@components/input";

export const InputRoot: FC<IInputRootProps> = ({ children }) => {
  return <div>{children}</div>;
};
