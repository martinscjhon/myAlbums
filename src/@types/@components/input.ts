import type { InputHTMLAttributes } from "react";

export interface IInputRootProps {
  children: React.ReactNode;
}

export interface ILabelProps {
  content: string;
}

export type IElementProps = InputHTMLAttributes<HTMLInputElement>;

export interface IInputWrapperProps {
  children: React.ReactNode;
}

export interface IInputIconProps {
  icon: React.ElementType;
}
