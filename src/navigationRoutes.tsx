import {
  DashboardScreen,
  SportsScreen,
  CompetitionsScreen,
  SchedulingScreen,
  OrganisationsScreen,
  UsersScreen,
} from "./screens/index";

export const CATEGORIES = {
  management: "management",
  planning: "planning",
  people: "people",
};

type NavigationRoute = {
  path: string;
  element: JSX.Element;
  category: string;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const NAVIGATION_ROUTES: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
    category: CATEGORIES.management,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
    category: CATEGORIES.management,
  },
  competitions: {
    path: "/competitions",
    element: <CompetitionsScreen />,
    category: CATEGORIES.management,
  },
  scheduling: {
    path: "/scheduling",
    element: <SchedulingScreen />,
    category: CATEGORIES.planning,
  },
  organisations: {
    path: "/organisations",
    element: <OrganisationsScreen />,
    category: CATEGORIES.planning,
  },
  users: {
    path: "/users",
    element: <UsersScreen />,
    category: CATEGORIES.people,
  },
};
