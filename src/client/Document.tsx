import React, { FC } from "react";
import { DocumentProps } from "./types/Document.types";
import serializeJavascript from "serialize-javascript";
import Navigation from "./components/Navigation/Navigation";

const Document: FC<DocumentProps> = ({ Component, props, path, isServer }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navigation />
        <div id="root">
          <Component {...props} path={path} isServer={isServer} />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window) {
              window.INITIAL_PROPS = ${serializeJavascript(props)}
            }`,
          }}
        />
      </body>
    </html>
  );
};

export default Document;
