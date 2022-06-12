import { Typography, useTheme } from "@mui/material";

const OrganisationsScreen = () => {
  let palette = useTheme().palette;
  return (
    <Typography sx={{ color: palette.text.primary }}>
      This is Organisations page.
    </Typography>
  );
};

export default OrganisationsScreen;
