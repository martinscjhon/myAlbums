import type { FC } from "react";
import type { IInputIconProps } from "src/@types/@components/input";

export const InputIcon: FC<IInputIconProps> = ({ icon: Icon }) => {
  return <Icon />;
};
