import { Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES, CATEGORIES } from "../../navigationRoutes";
import { NavigationItem } from "./NavigationItem";
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */
export const LeftNavigation = () => {
  const palette = useTheme().palette;

  const _generateLinks = (category: string) => {
    return Object.keys(NAVIGATION_ROUTES)
      .filter((key) => NAVIGATION_ROUTES[key].category === category)
      .map((page) => (
        <NavigationItem
          key={page}
          to={NAVIGATION_ROUTES[page].path}
          icon={NAVIGATION_ROUTES[page].icon}
          label={page.toLowerCase()}
        />
      ));
  };

  return (
    <Paper
      square
      elevation={2}
      sx={{
        height: "100%",
        pt: 3,
        backgroundColor: palette.background.paper,
      }}
    >
      <Stack direction='column'>
        {Object.values(CATEGORIES).map((category, idx) => (
          <div key={category}>
            <Typography
              variant='subtitle1'
              fontSize='12px'
              sx={{
                textTransform: "capitalize",
                color: palette.grey["600"],
                pl: 3.1,
                pb: 0.5,
                pt: 1.75,
              }}
            >
              {category.toLowerCase()}
            </Typography>
            {_generateLinks(category)}
            {idx < Object.keys(CATEGORIES).length - 1 ? (
              <Divider sx={{ mt: 2.5 }} />
            ) : null}
          </div>
        ))}
      </Stack>
    </Paper>
  );
};
