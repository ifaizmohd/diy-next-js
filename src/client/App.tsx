import React, { FC, useEffect, useState } from "react";
import { AppProps } from "./types/App.types";
import Home from "./pages";
import WithApp from "./components/hoc/AppHoc";

const App: FC<AppProps> = ({ path, isServer = false, Component }) => {
  console.log({ Component });
  return <>{Component ? <Component /> : <Home />}</>;
};

export default WithApp(App);
