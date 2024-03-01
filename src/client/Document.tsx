import React, { FC } from "react";
import { DocumentProps } from "./types/Document.types";

const Document: FC<DocumentProps> = ({ Component, props, path, isServer }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">
          <Component props={...props} path={path} isServer={isServer} />
        </div>
      </body>
    </html>
  );
};

export default Document;
