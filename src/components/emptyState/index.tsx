import { EmptyStateContainer } from "./styles";
import { TextComponent } from "@components/text";
import { colors } from "@shared/colors";
import type { FC } from "react";
import type { IEmptyStateProps } from "src/@types/@components/emptyState";

export const EmptyStateComponent: FC<IEmptyStateProps> = ({
  content,
  icon,
}) => {
  return (
    <EmptyStateContainer>
      {icon}
      <TextComponent
        content={content}
        color={colors.textSecondary}
        size="1.1rem"
      />
    </EmptyStateContainer>
  );
};
