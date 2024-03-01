import React from "react";
import { Request, Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import Document from "../../../client/Document";

export function renderToNodeStram(
  req: Request,
  res: Response,
  component: any,
  props: any,
  isServer: boolean
) {
  const { pipe } = renderToPipeableStream(
    <Document
      Component={component}
      props={props}
      path={req.path}
      isServer={isServer}
    />,
    {
      bootstrapScripts: ["main.js"],
      onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      },
    }
  );
}
