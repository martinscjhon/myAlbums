import type { ButtonHTMLAttributes, ElementType } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  color?: string;
  background?: string;
  icon?: ElementType;
}
