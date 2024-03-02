import { Page } from "../../../lib/router/router.types";
import routes from "../../config/routes.config";
import { RouterArgs } from "./index.types";

export function _routerPush({ state = {}, opts = "", url, args }: RouterArgs) {
  console.log("url - ", url);
  if (!url) {
    throw new Error("Please enter a valid URL");
  }
  // TODO: ability to construct the url with args
  history.pushState(state, opts, url);
}

export function _getRouter() {
  try {
    if (window) {
      const location = window?.location;
      const pathName = location?.pathname;
      const query = location?.search;
      const href = location.href;
      return {
        pathName,
        query,
        href,
      };
    }
  } catch (error) {
    console.error(`Error occurred in getRouter - ${error.message}`);
    return {};
  }
}

export async function getComponent(pathName: string) {
  let component: Page;
  try {
    component = await import(`../../pages${pathName}`);
    return component?.default;
  } catch (error) {
    console.log("error occurred in getComponent router.ts file -> ", error);
  }
  return component;
}

export function getMatchedComponent() {
  if (window) {
    const pathName = window.location.pathname;
    console.log("pathname: ", pathName);
    return routes.find((route) => pathName === route.path);
  }
}
