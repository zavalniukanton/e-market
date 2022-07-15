import { CSS } from "@nextui-org/react";
import { ReactNode } from "react";

export type Route = {
  name: string;
  path: string;
};

export type FooterLinkListProps = {
  listTitle: string;
  data: Route[];
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export type LoginFormProps = {
  onLogin: () => void;
  toggleRegisterForm: () => void;
};

export type RegisterFormProps = {
  onRegister: () => void;
  toggleRegisterForm: () => void;
};

export type ButtonProps = {
  icon?: ReactNode;
  light?: boolean;
  auto?: boolean;
  animated?: boolean;
  wrapperStyles?: CSS;
  children: ReactNode;
  onClick: () => void;
};

export type IconButtonProps = {
  icon: ReactNode;
  styles?: CSS;
  onClick: () => void;
};

export type LayoutProps = {
  children: ReactNode;
};

export type SelectOptionsType = {
  value: string;
  label: string;
};

export type IntlProviderProps = {
  children: ReactNode;
};
