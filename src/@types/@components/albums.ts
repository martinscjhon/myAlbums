export interface IAlbumWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onDelete?: () => void;
}

export interface IAlbumText {
  content: string;
  size?: string;
}
