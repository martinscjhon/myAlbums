import type { FC } from "react";
import type { ITitleProps } from "src/@types/@components/title";
import { colors } from "@shared/colors";

export const TitleComponent: FC<ITitleProps> = ({
  content,
  color = colors.primary,
}) => {
  return (
    <h2
      style={{
        color,
      }}
    >
      {content}
    </h2>
  );
};
