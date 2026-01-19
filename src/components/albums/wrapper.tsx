import type { FC } from "react";
import { Wrapper } from "./styles";
import { IconButton } from "@components/iconButton";
import type { IAlbumWrapperProps } from "src/@types/@components/albums";
import { MdDeleteOutline } from "react-icons/md";

export const AlbumWrapper: FC<IAlbumWrapperProps> = ({
  children,
  onDelete,
  ...rest
}) => {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <Wrapper {...rest}>
      <div className="image-container">
        <div></div>
        {onDelete && (
          <IconButton
            icon={MdDeleteOutline}
            onClick={handleDeleteClick}
            color="error"
          />
        )}
      </div>
      {children}
    </Wrapper>
  );
};
