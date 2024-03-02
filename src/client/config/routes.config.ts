import { FC } from "react";
import Home from "../pages";
import User from "../pages/user";

type Route = {
  path: string;
  Component: FC<any>;
  exact?: boolean;
};

const routes: Array<Route> = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/user",
    Component: User,
  },
  // {
  //   path: "/posts",
  //   Component: PostsPage,
  // },
  // {
  //   path: "/counter",
  //   Component: Counter,
  // },
];

export default routes;
