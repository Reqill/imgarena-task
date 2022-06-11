import { Divider, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES, CATEGORIES } from "../../navigationRoutes";
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */
export const LeftNavigation = () => {
  const _generateLinks = (category: string) => {
    return Object.keys(NAVIGATION_ROUTES)
      .filter((key) => NAVIGATION_ROUTES[key].category === category)
      .map((page) => (
        <Link to={NAVIGATION_ROUTES[page].path} key={page}>
          <p style={{ textTransform: "capitalize" }}>{page.toLowerCase()}</p>
        </Link>
      ));
  };

  return (
    <Stack direction='column'>
      {Object.values(CATEGORIES).map((category, idx) => (
        <div key={category}>
          <p style={{ textTransform: "capitalize" }}>
            {category.toLowerCase()}
          </p>
          {_generateLinks(category)}
          {idx < Object.keys(CATEGORIES).length - 1 ? <Divider /> : null}
        </div>
      ))}
    </Stack>
  );
};
