import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/public/login";
import { Cadastro } from "../pages/public/cadastro";
import { ResetPassword } from "../pages/public/reset_password";
import { PrivateLayout } from "../layouts/private";
import { PubliceLayout } from "../layouts/public";
import { Initial } from "../pages/initial";
import { DetailsAlbum } from "../pages/details_album";

export const RoutesPages: FC = () => {
  return (
    <Routes>
      {/* Routas privadas */}
      <Route element={<PrivateLayout />}>
        <Route path="/paginainicial" element={<Initial />} />
        <Route path="/album/:uuid" element={<DetailsAlbum />} />
      </Route>

      {/* Rotas públicas */}
      <Route element={<PubliceLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};
