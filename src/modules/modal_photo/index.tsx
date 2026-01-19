import type { FC } from "react";
import Modal from "react-modal";
import { ContainerModal } from "./styles";
import { TextComponent } from "@components/text";
import type { IModalPhotoProps } from "src/@types/@components/modalPhoto";

export const ModalPhotoModules: FC<IModalPhotoProps> = ({
  description,
  isOpen,
  onRequestClose,
  name,
  path,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      appElement={document.getElementById("root")!}
    >
      <ContainerModal>
        <img src={path} alt={name} />

        <TextComponent content={name} />
        <TextComponent content={description} />
      </ContainerModal>
    </Modal>
  );
};
