import { ReactNode } from "react";

export interface IMENU_ITEM {
  url: string;
  key: string;
  label: string;
}

export interface IOPTION_TRAVELING_WITH {
  value: string;
  label: string;
}

export interface IStep2FormData {
  activities?: string[];
}

export interface IStep3FormData {
  enjoy?: string[];
}

export type PropsWithChildren<P> = P & { children?: ReactNode };

export interface IBreadcrumbItem {
  label: string;
  url: string;
}