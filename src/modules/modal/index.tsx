import { ButtonComponent } from "@components/button";
import type { FC } from "react";
import Modal from "react-modal";
import type { IModalProps } from "src/@types/@components/modal";
import { ContainerModal } from "./styles";
import { TextComponent } from "@components/text";
import { colors } from "@shared/colors";

export const ModalModules: FC<IModalProps> = ({
  children,
  isOpen,
  onRequestClose,
  title,
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
        <div className="header_modal">
          <TextComponent content={title} size="20px" />
          <ButtonComponent
            content={"X"}
            color={colors.textPrimary}
            background="transparent"
            onClick={onRequestClose}
          />
        </div>

        {children}
      </ContainerModal>
    </Modal>
  );
};
