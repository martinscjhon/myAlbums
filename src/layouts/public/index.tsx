import { Navigate, Outlet } from "react-router-dom";
import { PrincipalContainer } from "./styles";
import backgroundImage from "@assets/images/backgeround.jpg";
import { ToastContainer } from "react-toastify";
import { handleIsAuthentication } from "@shared/auth/isAuth";

export const PubliceLayout = () => {
  const isAuthenticated = handleIsAuthentication();

  if (isAuthenticated) {
    return <Navigate to="/paginainicial" replace />;
  }

  return (
    <PrincipalContainer>
      <ToastContainer />
      <section>
        <img src={backgroundImage} alt="background" />
      </section>
      <Outlet />;
    </PrincipalContainer>
  );
};
