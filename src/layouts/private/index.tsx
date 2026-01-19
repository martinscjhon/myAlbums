import { Navigate, Outlet } from "react-router-dom";
import { handleIsAuthentication } from "@shared/auth/isAuth";
import { HeaderModule } from "@modules/header";
import { PrincipalContainer } from "./styles";
import { ToastContainer } from "react-toastify";

export const PrivateLayout = () => {
  const isAuthenticated = handleIsAuthentication();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ToastContainer />
      <HeaderModule />

      <PrincipalContainer>
        <Outlet />
      </PrincipalContainer>
    </>
  );
};
