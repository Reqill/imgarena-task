import { useEffect, useState } from "react";
import { NAVIGATION_ROUTES } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import {
  Card,
  Stack,
  Typography,
  useTheme,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);
  // const HEADER_BAR_COLOR = useTheme().appBar.main;
  // Property 'appBar' does not exist on type 'Theme'.
  let palette = useTheme().palette;
  const HEADER_BAR_COLOR = "#272727";

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
    // fetch dashboards content after initial render
    getDashboards()
      .then((dBoards) => {
        setItems(dBoards);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <Grid
      container
      spacing={3}
      alignItems='stretch'
      direction='row'
      justifyContent='center'
    >
      {items.map((el) => (
        <Grid item xs={6} key={el.id}>
          <Card sx={{ borderRadius: 0.5, height: "100%" }}>
            <Stack direction='column' height='100%'>
              <Stack sx={{ background: HEADER_BAR_COLOR, py: 1, px: 3 }}>
                <Typography
                  variant='body1'
                  color={palette.secondary.contrastText}
                  fontSize='12px'
                >
                  {el.title}
                </Typography>
              </Stack>
              <Stack
                direction='column'
                justifyContent='space-between'
                sx={{
                  height: "100%",
                  width: "100%",
                  px: 3,
                  pt: 2,
                  pb: 1,
                }}
              >
                <Typography
                  variant='body2'
                  color={palette.text.secondary}
                  fontSize='11px'
                  lineHeight={1.75}
                >
                  {el.text}
                </Typography>
                <Stack direction='row' justifyContent='flex-end' sx={{ mt: 2 }}>
                  <Box>
                    <Link
                      to={getLinkTo(el.id)}
                      style={{ textDecoration: "none" }}
                    >
                      <Button>
                        <Typography variant='button' fontSize={"12px"}>
                          MORE INFO
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardScreen;
