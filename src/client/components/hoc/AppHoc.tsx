import * as React from "react";
import { getComponent } from "../../lib/router/router";

const getMatchedComponent = () => {
  if (typeof window !== "undefined") {
    const pathName = window?.location?.pathname;
    return getComponent(pathName).then((comp) => {
      return comp;
    });
  }
};

const WithApp = (Page: React.FC) => (props: any) => {
  let Component;
  getMatchedComponent().then((comp) => {
    Component = comp;
  });

  return <Page Component={Component} {...props} />;
};

export default WithApp;
