import type { FC } from "react";
import { GlobalStyle } from "./global/styles";
import { RoutesPages } from "./routes/index.route";
import { BrowserRouter } from "react-router-dom";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesPages />
    </BrowserRouter>
  );
};
