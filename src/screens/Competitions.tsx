import { Typography, useTheme } from "@mui/material";

const CompetitionsScreen = () => {
  let palette = useTheme().palette;
  return (
    <Typography sx={{ color: palette.text.primary }}>
      This is Competitions page.
    </Typography>
  );
};

export default CompetitionsScreen;
