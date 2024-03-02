import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    INITIAL_PROPS?: any;
  }
}

let INITIAL_PROPS = {};
if (window) {
  INITIAL_PROPS = window.INITIAL_PROPS;
}

const Component = <App props={INITIAL_PROPS} />;

const root = hydrateRoot(document.getElementById("root"), Component);
