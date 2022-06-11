import { useEffect, useState } from "react";
import { NAVIGATION_ROUTES } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";

const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return NAVIGATION_ROUTES.dashboard.path;
      case DashboardItem.SPORTS:
        return NAVIGATION_ROUTES.sports.path;
      case DashboardItem.COMPETITIONS:
        return NAVIGATION_ROUTES.competitions.path;
      case DashboardItem.ORGANISATIONS:
        return NAVIGATION_ROUTES.organisations.path;
      case DashboardItem.USERS:
        return NAVIGATION_ROUTES.users.path;
      case DashboardItem.SCHEDULING:
        return NAVIGATION_ROUTES.scheduling.path;
    }
  };

  useEffect(() => {
    // TODO: get data from dashboard.service
  }, []);

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return <div>TODO: implement dashboard content according to designs</div>;
};

export default DashboardScreen;
