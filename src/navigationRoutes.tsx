import {
  DashboardScreen,
  SportsScreen,
  CompetitionsScreen,
  SchedulingScreen,
  OrganisationsScreen,
  UsersScreen,
} from "./screens/index";

type NavigationRoute = {
  path: string;
  element: JSX.Element;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const navigationRoutes: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
  },
  competitions: {
    path: "/competitions",
    element: <CompetitionsScreen />,
  },
  scheduling: {
    path: "/scheduling",
    element: <SchedulingScreen />,
  },
  organisations: {
    path: "/organisations",
    element: <OrganisationsScreen />,
  },
  users: {
    path: "/users",
    element: <UsersScreen />,
  },
};
