import React, { FC, useEffect, useState } from "react";
import { AppProps } from "./types/App.types";
import Home from "./pages";
import WithApp from "./components/hoc/AppHoc";
import { getMatchedComponent } from "./lib/router/router";

const App: FC<AppProps> = ({ props }) => {
  const { Component } = getMatchedComponent();
  return <Component {...props} />;
};

export default WithApp(App);
