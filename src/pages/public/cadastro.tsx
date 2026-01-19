import { useState, type FC } from "react";
import { ButtonComponent } from "@components/button";
import { PrincipalContainer } from "./styles";
import { Input } from "@components/input";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handle } from "../../services/handles";
import { useForm } from "@hooks/useForm";
import { MESSAGES, ROUTES } from "@shared/constants";
import { TitleComponent } from "@components/title";

interface IPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Cadastro: FC = () => {
  const { payload, change } = useForm<IPayload>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (payload.password !== payload.confirmPassword) {
      toast.info(MESSAGES.INFO_PASSWORD_MISMATCH);
      return;
    }

    if (!payload.name || !payload.email || !payload.password) {
      toast.info(MESSAGES.INFO_FILL_ALL_FIELDS);
      return;
    }

    setLoading(true);
    try {
      await handle.createUser({
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      toast.success(MESSAGES.SUCCESS_USER_REGISTERED);
      navigate(ROUTES.LOGIN);
    } catch (error: any) {
      toast.error(`${MESSAGES.ERROR_REGISTER_USER}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrincipalContainer>
      <TitleComponent content="My Albums." />

      <form onSubmit={createUserSubmit}>
        <Input.Root>
          <Input.Label content="Nome" />
          <Input.Wrapper>
            <Input.Element type="text" name="name" value={payload.name} onChange={change} />
            <Input.Icon icon={CiUser} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="E-mail" />
          <Input.Wrapper>
            <Input.Element type="email" name="email" value={payload.email} onChange={change} />
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
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Confirmar Senha" />
          <Input.Wrapper>
            <Input.Element
              type="password"
              name="confirmPassword"
              value={payload.confirmPassword}
              onChange={change}
            />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <div className="actions">
          <ButtonComponent
            content={loading ? "Carregando..." : "Cadastrar"}
            type="submit"
            disabled={loading}
          />
          <Link to={ROUTES.LOGIN}>
            <AiOutlineArrowLeft />
            Voltar
          </Link>
        </div>
      </form>
    </PrincipalContainer>
  );
};
