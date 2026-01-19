import type { FC } from "react";
import type { IAlbumText } from "src/@types/@components/albums";
import { TextComponent } from "@components/text";

export const PhotoText: FC<IAlbumText> = ({ content, size = "14px" }) => {
  return <TextComponent content={content} size={size} />;
};
