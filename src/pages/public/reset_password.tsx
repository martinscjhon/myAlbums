import { useState, type FC } from "react";
import { TitleComponent } from "@components/title";
import { ButtonComponent } from "@components/button";
import { PrincipalContainer } from "./styles";
import { Input } from "@components/input";
import { CiMail } from "react-icons/ci";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handle } from "../../services/handles";
import { useForm } from "@hooks/useForm";
import { MESSAGES, ROUTES } from "@shared/constants";

interface IPayload {
  email: string;
  password: string;
}

export const ResetPassword: FC = () => {
  const { payload, change } = useForm<IPayload>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!payload.email || !payload.password) {
      toast.info(MESSAGES.INFO_FILL_ALL_FIELDS);
      return;
    }

    setLoading(true);
    try {
      await handle.resetPassword({
        email: payload.email,
        password: payload.password,
      });
      toast.success(MESSAGES.SUCCESS_PASSWORD_RESET);
      navigate(ROUTES.LOGIN);
    } catch (error: any) {
      toast.error(`${MESSAGES.ERROR_RESET_PASSWORD}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrincipalContainer>
      <TitleComponent content="My Albums." />

      <form onSubmit={resetPasswordSubmit}>
        <Input.Root>
          <Input.Label content="E-mail de confirmação" />
          <Input.Wrapper>
            <Input.Element
              type="email"
              name="email"
              value={payload.email}
              onChange={change}
            />
            <Input.Icon icon={CiMail} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Senha" />
          <Input.Wrapper>
            <Input.Element
              type="password"
              name="password"
              value={payload.password}
              onChange={change}
            />
            <Input.Icon icon={CiMail} />
          </Input.Wrapper>
        </Input.Root>

        <div className="actions">
          <ButtonComponent
            content={loading ? "Carregando..." : "Resetar"}
            type="submit"
            disabled={loading}
          />
          <Link to={"/"}>
            <AiOutlineArrowLeft />
            Voltar
          </Link>
        </div>
      </form>
    </PrincipalContainer>
  );
};
