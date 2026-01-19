import type { FC } from "react";
import { Wrapper } from "./styles";
import { IconButton } from "@components/iconButton";
import { MdDeleteOutline } from "react-icons/md";
import type { IPhotoWrapperProps } from "src/@types/@components/photo";

export const PhotoWrapper: FC<IPhotoWrapperProps> = ({
  children,
  onDelete,
  path,
  ...rest
}) => {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <Wrapper {...rest}>
      <div className="image-container">
        <img src={path} alt="image" />
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
