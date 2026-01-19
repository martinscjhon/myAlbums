import type { ICreateUser } from "src/@types/services/createUser";
import type { ILogin } from "src/@types/services/login";
import type { IResetPassword } from "src/@types/services/resetPassword";
import type { ICreateAlbum } from "src/@types/services/createAlbum";
import type { IAlbum } from "src/@types/services/album";
import type {
  ICreatePhotoPayload,
  IGetAllPhotos,
  IPhoto,
} from "src/@types/services/photo";
import { api } from "../api";
import { openApi, privateApi } from "..";

interface ILoginResponse {
  token: string;
  user: any;
}

interface IApiResponse<T> {
  data: T;
  message: string;
}

const handleApiError = (error: any): string => {
  return error.response?.data?.message || error.message || "Erro desconhecido";
};

const createUser = async (payload: ICreateUser): Promise<void> => {
  try {
    const url = api.create_user;
    await openApi.post(url, payload);
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const login = async (payload: ILogin): Promise<ILoginResponse> => {
  try {
    const url = api.login;
    const { data } = await openApi.post<IApiResponse<ILoginResponse>>(
      url,
      payload,
    );
    return data.data;
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const resetPassword = async (payload: IResetPassword): Promise<void> => {
  try {
    const url = api.update_password;
    await openApi.put(url, payload);
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const createAlbum = async (payload: ICreateAlbum): Promise<IAlbum> => {
  try {
    const url = api.create_album;
    const { data } = await privateApi.post<IApiResponse<IAlbum>>(url, payload);
    return data.data;
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const getAlbums = async (): Promise<IAlbum[]> => {
  try {
    const url = api.get_albums;
    const { data } = await privateApi.get<IApiResponse<IAlbum[]>>(url);
    return data.data;
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const deleteAlbum = async (albumUuid: string): Promise<void> => {
  try {
    const url = `${api.create_album}/${albumUuid}`;
    await privateApi.delete(url);
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const createPhoto = async (payload: ICreatePhotoPayload): Promise<IPhoto> => {
  try {
    const url = api.create_photo;
    const { data } = await privateApi.post<IApiResponse<IPhoto>>(url, payload);
    return data.data;
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const getPhotos = async (albumUuid: string): Promise<IGetAllPhotos[]> => {
  try {
    const url = `${api.get_photos}/${albumUuid}`;
    const { data } = await privateApi.get<IApiResponse<IGetAllPhotos[]>>(url);
    return data.data;
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

const deletePhoto = async (uuid: string): Promise<void> => {
  try {
    const url = `${api.create_photo}/${uuid}`;
    await privateApi.delete(url);
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};

export const handle = {
  createUser,
  login,
  resetPassword,
  createAlbum,
  getAlbums,
  deleteAlbum,
  createPhoto,
  getPhotos,
  deletePhoto,
};
