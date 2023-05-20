import React from "react";
import { routeNames } from "./route.names";
const Home = React.lazy(() => import("application/pages/home/index"));
const Profile = React.lazy(() => import("application/pages/profile/index"));
const SBT = React.lazy(() => import("application/pages/sbt/index"));
const DAO = React.lazy(() => import("application/pages/dao/index"));
const Messenger = React.lazy(() => import("application/pages/messenger/index"));
export const routes: {
  path: string;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
}[] = [
  {
    path: routeNames.home,
    Component: Home,
  },
  {
    path: routeNames.profile,
    Component: Profile,
  },
  {
    path: routeNames.dao,
    Component: DAO,
  },
  {
    path: routeNames.sbt,
    Component: SBT,
  },
  {
    path: routeNames.messenger,
    Component: Messenger,
  },
];
