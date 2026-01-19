import type { FC } from "react";
import { PrincipalContainer } from "./styles";
import { TitleComponent } from "@components/title";
import { colors } from "@shared/colors";
import { logout } from "@shared/auth";

export const HeaderModule: FC = () => {
  return (
    <PrincipalContainer>
      <TitleComponent content="My Albums" color={colors.textWhite} />
      <button onClick={logout}>Sair</button>
    </PrincipalContainer>
  );
};
