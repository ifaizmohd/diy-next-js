import * as React from "react";
import { routerPush } from "../../lib/router";
import { LinkProps } from "./Link.types";

const Link: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <a onClick={() => routerPush({ state: {}, opts: "", url: to, args: {} })}>
      {children}
    </a>
  );
};

export default Link;
