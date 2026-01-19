import { useState, type FC } from "react";
import { ButtonComponent } from "@components/button";
import { PrincipalContainer } from "./styles";
import { Input } from "@components/input";
import { CiLock, CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handle } from "../../services/handles";
import { setLocalstorage } from "@shared/auth";
import { useForm } from "@hooks/useForm";
import { MESSAGES, ROUTES } from "@shared/constants";
import { TitleComponent } from "@components/title";

interface IPayload {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const { payload, change } = useForm<IPayload>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!payload.email || !payload.password) {
      toast.info(MESSAGES.INFO_FILL_ALL_FIELDS);
      return;
    }

    setLoading(true);
    try {
      const response = await handle.login({
        email: payload.email,
        password: payload.password,
      });
      toast.success(MESSAGES.SUCCESS_LOGIN);
      setLocalstorage("token", response.token);
      navigate(ROUTES.HOME);
    } catch (error: any) {
      toast.error(`${MESSAGES.ERROR_LOGIN}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrincipalContainer>
      <TitleComponent content="My Albums." />

      <form onSubmit={loginSubmit}>
        <Input.Root>
          <Input.Label content="E-mail" />
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

        <div className="password">
          <Input.Root>
            <Input.Label content="Senha" />
            <Input.Wrapper>
              <Input.Element
                type="password"
                name="password"
                value={payload.password}
                onChange={change}
              />
              <Input.Icon icon={CiLock} />
            </Input.Wrapper>
          </Input.Root>

          <Link to={ROUTES.RESET_PASSWORD}>Esqueci minha senha</Link>
        </div>

        <div className="actions">
          <ButtonComponent
            content={loading ? "Carregando..." : "Entrar"}
            type="submit"
            disabled={loading}
          />
          <Link to={ROUTES.REGISTER}>Cadastra-se</Link>
        </div>
      </form>
    </PrincipalContainer>
  );
};
