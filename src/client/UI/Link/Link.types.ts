import { ReactNode } from "react";

export interface LinkProps {
  to: string;
  href?: string;
  asPath?: string;
  redirect?: string;
  children: ReactNode;
}
