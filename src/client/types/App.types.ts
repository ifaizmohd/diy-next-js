import { FC } from "react";

export interface AppProps {
  Component?: FC;
  path?: string;
  isServer?: boolean;
  props?: object;
}
