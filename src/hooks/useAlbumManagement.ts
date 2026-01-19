import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { handle } from "@services/handles";
import type { IAlbum } from "src/@types/services/album";
import { MESSAGES } from "@shared/constants";

export interface IUseAlbumManagement {
  albums: IAlbum[];
  loading: boolean;
  creatingAlbum: boolean;
  openModal: boolean;
  loadAlbums: () => Promise<void>;
  createAlbum: (data: { name: string; description: string }) => Promise<void>;
  deleteAlbum: (albumId: string) => Promise<void>;
  setOpenModal: (open: boolean) => void;
}

export function useAlbumManagement(): IUseAlbumManagement {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);
  const [creatingAlbum, setCreatingAlbum] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const loadAlbums = useCallback(async () => {
    setLoading(true);
    try {
      const response = await handle.getAlbums();
      setAlbums(response);
    } catch (error: any) {
      toast.error(MESSAGES.ERROR_LOAD_ALBUMS);
    } finally {
      setLoading(false);
    }
  }, []);

  const createAlbum = useCallback(
    async (data: { name: string; description: string }) => {
      setCreatingAlbum(true);
      try {
        await handle.createAlbum(data);
        toast.success(MESSAGES.SUCCESS_ALBUM_CREATED);
        setOpenModal(false);
        await loadAlbums();
      } catch (error: any) {
        toast.error(MESSAGES.ERROR_CREATE_ALBUM);
      } finally {
        setCreatingAlbum(false);
      }
    },
    [loadAlbums],
  );

  const deleteAlbum = useCallback(
    async (albumId: string) => {
      try {
        await handle.deleteAlbum(albumId);
        toast.success(MESSAGES.SUCCESS_ALBUM_DELETED);
        await loadAlbums();
      } catch (error: any) {
        toast.error(`${MESSAGES.ERROR_DELETE_ALBUM}: ${error.message}`);
      }
    },
    [loadAlbums],
  );

  return {
    albums,
    loading,
    creatingAlbum,
    openModal,
    loadAlbums,
    createAlbum,
    deleteAlbum,
    setOpenModal,
  };
}
