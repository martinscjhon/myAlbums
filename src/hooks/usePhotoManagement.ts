import { handle } from "@services/handles";
import { useState, useCallback } from "react";
import type { IGetAllPhotos } from "src/@types/services/photo";
import { toast } from "react-toastify";
import { MESSAGES } from "@shared/constants";

export interface IUsePhotoManagement {
  photos: IGetAllPhotos[];
  selectedFile: File | null;
  openModal: boolean;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseModal: () => void;
  setOpenModal: (open: boolean) => void;
  loadPhotos: (albumUuid: string) => Promise<void>;
  deletePhoto: (photoUuid: string, albumUuid: string) => Promise<void>;
  createPhoto: (data: {
    path: string;
    title: string;
    description: string;
    color: string;
    albumUuid: string;
  }) => Promise<void>;
}

export function usePhotoManagement(): IUsePhotoManagement {
  const [photos, setPhotos] = useState<IGetAllPhotos[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) setSelectedFile(file);
    },
    [],
  );

  const loadPhotos = useCallback(async (albumUuid: string) => {
    try {
      const response = await handle.getPhotos(albumUuid);
      setPhotos(response);
    } catch {
      toast.error(MESSAGES.ERROR_LOAD_PHOTOS);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedFile(null);
  }, []);

  const deletePhoto = useCallback(
    async (photoUuid: string, albumUuid: string) => {
      try {
        await handle.deletePhoto(photoUuid);
        toast.success(MESSAGES.SUCCESS_PHOTO);
        await loadPhotos(albumUuid);
      } catch {
        toast.error(MESSAGES.ERROR_DELETE_PHOTO);
      }
    },
    [loadPhotos],
  );

  const createPhoto = useCallback(
    async (data: {
      path: string;
      title: string;
      description: string;
      color: string;
      albumUuid: string;
    }) => {
      try {
        await handle.createPhoto(data);
        toast.success(MESSAGES.SUCCESS_PHOTO_CREATED);
        setOpenModal(false);
        await loadPhotos(data.albumUuid);
      } catch (error: any) {
        toast.error(MESSAGES.ERROR_DELETE_PHOTO);
      }
    },
    [loadPhotos],
  );

  return {
    photos,
    selectedFile,
    openModal,
    handleFileChange,
    handleCloseModal,
    setOpenModal,
    loadPhotos,
    deletePhoto,
    createPhoto,
  };
}
