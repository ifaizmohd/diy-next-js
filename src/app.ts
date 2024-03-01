import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import renderNodeStream from "./lib/core/renderer";
import { getPageToRender } from "./lib/router/createPage";

const app: Express = express();

// Setting up app to use public as static dir.
app.use(express.static("public"));
//
app.get("*", async (req: Request, res: Response) => {
  const isServer = true;
  const { component, props } = await getPageToRender(req.path, isServer);
  renderNodeStream(req, res, component, props, isServer);
});

const port: number = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
