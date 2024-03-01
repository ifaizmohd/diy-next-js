import { Request, Response } from "express";
import { renderToNodeStram } from "./renderer";

export default function renderNodeStream(
  req: Request,
  res: Response,
  component: any,
  props: any,
  isServer: boolean
) {
  if (!req || !res || !req.path) {
    throw new Error('Invalid Path');
  }
  renderToNodeStram(req, res, component, props, isServer);
}
