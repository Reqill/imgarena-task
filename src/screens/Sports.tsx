import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";

const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  );

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType["id"]) => {
    // fetch selected sport details by ID
    getSportById(id)
      .then((s) => {
        setSportDetails(s);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // fetch sports content after initial render
    getSports()
      .then((s) => {
        setSports(s);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return (
    <div>
      <p>{JSON.stringify(sports)}</p>
      <p>{JSON.stringify(sportDetails)}</p>
    </div>
  );
};

export default SportsScreen;
