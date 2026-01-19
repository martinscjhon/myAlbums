import type { FC } from "react";
import type { IButtonProps } from "../../@types/@components/button";
import { colors } from "@shared/colors";

const styles = {
  width: "100%",
  height: "2.5rem",
  borderRadius: "4px",
};

export const ButtonComponent: FC<IButtonProps> = ({
  content,
  color = colors.textWhite,
  icon: Icon,
  background = colors.primary,
  ...rest
}) => {
  return (
    <button
      {...rest}
      style={{
        color,
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        background,
        opacity: rest.disabled ? 0.5 : 1,
        cursor: rest.disabled ? "not-allowed" : "pointer",
        ...styles,
      }}
    >
      {Icon && <Icon />}
      {content}
    </button>
  );
};
