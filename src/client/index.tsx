import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const Component = <App />;

const root = hydrateRoot(document.getElementById("root"), Component);
