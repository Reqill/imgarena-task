import { Typography, useTheme } from "@mui/material";

const SchedulingScreen = () => {
  let palette = useTheme().palette;
  return (
    <Typography sx={{ color: palette.text.primary }}>
      This is Scheduling page.
    </Typography>
  );
};

export default SchedulingScreen;
