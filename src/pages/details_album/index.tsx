import { useState, useEffect, type FC } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SkeletonComponent } from "@components/skeleton";
import { EmptyStateComponent } from "@components/emptyState";
import { MdCameraAlt, MdCloudUpload } from "react-icons/md";
import { colors } from "@shared/colors";
import { ContainerTitle, PrincipalContainer } from "./styles";
import { ButtonComponent } from "@components/button";
import { ModalModules } from "@modules/modal";
import { Input } from "@components/input";
import { Button } from "@mui/material";
import { usePhotoManagement } from "../../hooks/usePhotoManagement";
import { useForm } from "../../hooks/useForm";
import { MESSAGES, ROUTES } from "@shared/constants";
import { Photo } from "@components/photos";
import { TextComponent } from "@components/text";
import { ModalPhotoModules } from "@modules/modal_photo";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface IPhotoPayload {
  title: string;
  description: string;
  color: string;
}

export const DetailsAlbum: FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [loading, setLoading] = useState(false);
  const [photoExpandUuid, setPhotoExpandUuid] = useState<string>("");
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();
  const {
    photos,
    selectedFile,
    openModal,
    handleFileChange,
    handleCloseModal,
    setOpenModal,
    loadPhotos,
    deletePhoto,
    createPhoto,
  } = usePhotoManagement();
  const { payload, change, reset } = useForm<IPhotoPayload>({
    title: "",
    description: "",
    color: "#000000",
  });

  const handldeViewPhoto = (uuid: string) => {
    setPhotoExpandUuid(uuid);
    setExpand(true);
  };

  const renderPhotos = () => {
    if (loading) {
      return <SkeletonComponent itemCount={6} showImage={true} />;
    }

    if (photos.length === 0) {
      return (
        <EmptyStateComponent
          content={MESSAGES.EMPTY_NO_PHOTOS}
          icon={<MdCameraAlt size={64} color={colors.textSecondary} />}
        />
      );
    }

    return photos.map((photo) => (
      <Photo.Wrapper
        path={photo.Path}
        key={photo.Uuid}
        onDelete={() => deletePhoto(photo.Uuid, photo.AlbumUuid)}
        onClick={() => handldeViewPhoto(photo.Uuid)}
        style={{ cursor: "pointer" }}
      >
        <Photo.Text content={photo.Title} />
        <Photo.Text content={photo.Description} size="13px" />
      </Photo.Wrapper>
    ));
  };

  const handleUploadPhoto = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.info(MESSAGES.INFO_SELECT_FILE);
      return;
    }

    if (!payload.title) {
      toast.info(MESSAGES.INFO_FILL_ALL_FIELDS);
      return;
    }

    setLoading(true);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          await createPhoto({
            path: reader.result as string,
            title: payload.title,
            description: payload.description,
            color: payload.color,
            albumUuid: uuid!,
          });
        } catch (error: any) {
          toast.error(`${MESSAGES.ERROR_UPLOAD_PHOTO}: ${error.message}`);
        } finally {
          reset();
          setLoading(false);
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (error: any) {
      toast.error(`${MESSAGES.ERROR_UPLOAD_PHOTO}: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!uuid) {
      toast.error(MESSAGES.ERROR_ALBUM_NOT_FOUND);
      navigate(ROUTES.HOME);
      return;
    }

    loadPhotos(String(uuid));
    setLoading(false);
  }, [uuid, navigate]);

  return (
    <>
      <PrincipalContainer>
        {loading ? (
          <SkeletonComponent itemCount={4} showImage={true} />
        ) : (
          <>
            {photos.length > 0 && (
              <ContainerTitle>
                <TextComponent
                  content={photos[0]?.Name}
                  color={colors.textPrimary}
                  size="20px"
                />
                <TextComponent
                  content={photos[0]?.Description}
                  color={colors.textSecondary}
                  size="14px"
                />
              </ContainerTitle>
            )}

            <div className="list_albums">{renderPhotos()}</div>

            <ButtonComponent
              content="Novo foto"
              onClick={() => setOpenModal(true)}
            />

            <Link to={ROUTES.HOME}>
              <AiOutlineArrowLeft />
              Voltar
            </Link>
          </>
        )}
      </PrincipalContainer>

      <ModalModules
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        title="Criar nova foto"
      >
        <form onSubmit={handleUploadPhoto}>
          <Input.Root>
            <Input.Label content="Arquivo da foto" />
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<MdCloudUpload />}
              sx={{ marginBottom: "1rem", textTransform: "none" }}
            >
              {selectedFile
                ? `Arquivo: ${selectedFile.name}`
                : "Selecionar arquivo"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Input.Root>

          <Input.Root>
            <Input.Label content="Título" />
            <Input.Wrapper>
              <Input.Element
                type="text"
                name="title"
                value={payload.title}
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

          <Input.Root>
            <Input.Label content="Cor predominante" />
            <Input.Wrapper>
              <Input.Element
                type="color"
                name="color"
                value={payload.color}
                onChange={change}
              />
            </Input.Wrapper>
          </Input.Root>

          <ButtonComponent
            content={"Cadastrar foto"}
            type="submit"
            disabled={!selectedFile || !payload.title}
          />
        </form>
      </ModalModules>

      <ModalPhotoModules
        isOpen={expand}
        onRequestClose={() => setExpand(false)}
        description={
          photos.find((item) => item.Uuid === photoExpandUuid)?.Description ||
          ""
        }
        name={photos.find((item) => item.Uuid === photoExpandUuid)?.Title || ""}
        path={photos.find((item) => item.Uuid === photoExpandUuid)?.Path || ""}
      />
    </>
  );
};
