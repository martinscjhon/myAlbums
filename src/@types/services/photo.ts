export interface IPhoto {
  id: string;
  albumId: string;
  title: string;
  description: string;
  url: string;
  dominantColor: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetAllPhotos {
  Id: string;
  Uuid: string;
  CreatedAt: string | Date;
  Enable: boolean;
  Title: string;
  Path: string;
  Description: string;
  Color: string;
  AlbumUuid: string;
  Name: string;
  Criacao_album: string | Date;
}

export interface ICreatePhotoPayload {
  path: string;
  title: string;
  description: string;
  color: string;
  albumUuid: string;
}
