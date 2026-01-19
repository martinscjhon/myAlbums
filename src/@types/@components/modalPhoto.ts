export interface IModalPhotoProps {
  isOpen: boolean;
  onRequestClose: () => void;
  description: string;
  name: string;
  path: string;
}
