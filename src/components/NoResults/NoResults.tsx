import { Typography, useTheme } from "@mui/material";

export const NoResults = () => {
  let palette = useTheme().palette;
  return (
    <Typography sx={{ color: palette.text.primary }}>
      No results found
    </Typography>
  );
};
