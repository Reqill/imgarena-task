import {
  DashboardScreen,
  SportsScreen,
  CompetitionsScreen,
  SchedulingScreen,
  OrganisationsScreen,
  UsersScreen,
} from "./screens/index";
import { SvgIconComponent } from "@mui/icons-material";
import { ReactElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";

export const CATEGORIES = {
  management: "management",
  planning: "planning",
  people: "people",
};

const ICON_SIZE = "20px";

type NavigationRoute = {
  path: string;
  element: JSX.Element;
  category: string;
  icon: ReactElement<SvgIconComponent>;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const NAVIGATION_ROUTES: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
    category: CATEGORIES.management,
    icon: <HomeIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
    category: CATEGORIES.management,
    icon: <SportsSoccerIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  competitions: {
    path: "/competitions",
    element: <CompetitionsScreen />,
    category: CATEGORIES.management,
    icon: <EmojiEventsIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  scheduling: {
    path: "/scheduling",
    element: <SchedulingScreen />,
    category: CATEGORIES.planning,
    icon: <FactCheckIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  organisations: {
    path: "/organisations",
    element: <OrganisationsScreen />,
    category: CATEGORIES.planning,
    icon: <LocationCityIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  users: {
    path: "/users",
    element: <UsersScreen />,
    category: CATEGORIES.people,
    icon: <SupervisedUserCircleOutlinedIcon sx={{ fontSize: ICON_SIZE }} />,
  },
};
