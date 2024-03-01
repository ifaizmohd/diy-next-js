import { matchedRoute } from "./router";
import { Route } from "./router.types";
import { getPageToRender } from "./createPage";

export function matchRoutes(routes: Array<Route>, pathname: string) {
  if (!routes || !routes.length) {
    throw Error("Invalid route");
  }
  if (!pathname) {
    throw Error("Invalid pathname");
  }
  return matchedRoute(routes, pathname);
}

export { getPageToRender };
