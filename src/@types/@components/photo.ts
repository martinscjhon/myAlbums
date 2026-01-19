export interface IPhotoWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onDelete?: () => void;
  path: string;
}

export interface IPhotoText {
  content: string;
  size?: string;
}
