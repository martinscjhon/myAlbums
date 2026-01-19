import { Album } from "@components/albums";
import { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalContainer } from "./styles";
import { ButtonComponent } from "@components/button";
import { SkeletonComponent } from "@components/skeleton";
import { EmptyStateComponent } from "@components/emptyState";
import { ModalModules } from "../../modules/modal";
import { Input } from "@components/input";
import { toast } from "react-toastify";
import { useAlbumManagement } from "@hooks/useAlbumManagement";
import { useForm } from "@hooks/useForm";
import { colors } from "@shared/colors";
import { MdFolderOpen } from "react-icons/md";
import { MESSAGES, ROUTES } from "@shared/constants";

interface IPayload {
  name: string;
  description: string;
}

export const Initial: FC = () => {
  const navigate = useNavigate();
  const { payload, change, reset } = useForm<IPayload>({
    name: "",
    description: "",
  });
  const {
    albums,
    loading,
    creatingAlbum,
    openModal,
    loadAlbums,
    deleteAlbum,
    setOpenModal,
    createAlbum,
  } = useAlbumManagement();

  const handleCreateAlbumSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!payload.name) {
      toast.info(MESSAGES.INFO_FILL_ALBUM_NAME);
      return;
    }

    try {
      await createAlbum({
        name: payload.name,
        description: payload.description,
      });
      reset();
      setOpenModal(false);
    } catch (error: any) {
      toast.error(`${MESSAGES.ERROR_CREATE_ALBUM}: ${error.message}`);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    reset();
  };

  const renderAlbumsList = () => {
    if (loading) {
      return <SkeletonComponent />;
    }

    if (albums.length === 0) {
      return (
        <EmptyStateComponent
          content={MESSAGES.EMPTY_NO_ALBUMS}
          icon={<MdFolderOpen size={64} color={colors.textSecondary} />}
        />
      );
    }

    return albums.map((album) => (
      <Album.Wrapper
        key={album.Uuid}
        onDelete={() => deleteAlbum(album.Uuid)}
        onClick={() => navigate(ROUTES.ALBUM_DETAIL(album.Uuid))}
        style={{ cursor: "pointer" }}
      >
        <Album.Text content={album.Name} />
        <Album.Text content={album.Description} size="13px" />
      </Album.Wrapper>
    ));
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <>
      <PrincipalContainer>
        <div className="list_albums">{renderAlbumsList()}</div>

        <ButtonComponent
          content="Novo Album"
          onClick={() => setOpenModal(true)}
        />
      </PrincipalContainer>

      <ModalModules
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        title="Criar novo album"
      >
        <form onSubmit={handleCreateAlbumSubmit}>
          <Input.Root>
            <Input.Label content="Nome" />
            <Input.Wrapper>
              <Input.Element
                type="text"
                name="name"
                value={payload.name}
                onChange={change}
              />
            </Input.Wrapper>
          </Input.Root>

          <Input.Root>
            <Input.Label content="Descrição" />
            <Input.Wrapper>
              <Input.Element
                type="text"
                name="description"
                value={payload.description}
                onChange={change}
              />
            </Input.Wrapper>
          </Input.Root>

          <ButtonComponent
            content={creatingAlbum ? "Carregando..." : "Criar Album"}
            type="submit"
            disabled={creatingAlbum}
          />
        </form>
      </ModalModules>
    </>
  );
};
