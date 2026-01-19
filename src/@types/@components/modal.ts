export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  title: string;
}
