import fs from "fs/promises";
import path from "path";
import axios, { AxiosResponse } from "axios";
import { getNameWithoutExtension } from "../../utils/utils";
import { Page } from "./router.types";
import { routerConstants } from "./routerConstants";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function getPageToRender(pathName: string, isServer: boolean) {
  let component: Page;
  let props = {};
  if (!isServer) return;
  try {
    const page = await getMatchedPage(pathName);
    console.log("pages - ", page);
    if (page) {
      component = await import(`../../client/pages/${page}`);
      if (component && component.getInitialProps) {
        props = await component.getInitialProps(axiosInstance);
      } else if (component && component.getServerSideProps) {
        props = await component.getServerSideProps(axiosInstance);
      }
    }
  } catch (error) {
    console.error("error!!", error.message);
  }
  return {
    component: component.default,
    props,
  };
}

export async function getMatchedPage(pathName: string) {
  try {
    if (!pathName) {
      throw Error(`Invalid Pathname at getMatchedPage`);
    }

    const pagesDir = path.join(__dirname, routerConstants.pagesDirPath);
    const pages = await fs.readdir(pagesDir);
    if (pathName === "/") {
      return pages.find(
        (page) => getNameWithoutExtension(page).toLowerCase() === "index"
      );
    }
    return pages.find(
      (page) =>
        getNameWithoutExtension(page).toLowerCase() ===
        pathName?.substring(1)?.toLowerCase()
    );
  } catch (error) {
    console.error("error occurred!!! ", error.message);
    return null;
  }
}

export async function getMatchedRoute(pathName: string) {
  if (!pathName) {
    throw Error("Invalid Path");
  }
}

export async function getPages() {
  const pagesDir = path.join(__dirname, routerConstants.pagesDirPath);
  return await fs.readdir(pagesDir);
}
