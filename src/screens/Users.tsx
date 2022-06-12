import { Typography, useTheme } from "@mui/material";

const UsersScreen = () => {
  let palette = useTheme().palette;
  return (
    <Typography sx={{ color: palette.text.primary }}>
      This is Users page.
    </Typography>
  );
};

export default UsersScreen;
