import type { FC } from "react";
import type { ITextProps } from "src/@types/@components/text";
import { colors } from "@shared/colors";

export const TextComponent: FC<ITextProps> = ({
  content,
  color = colors.textPrimary,
  size = "1rem",
}) => {
  return (
    <span
      style={{
        color,
        fontSize: size,
      }}
    >
      {content}
    </span>
  );
};
