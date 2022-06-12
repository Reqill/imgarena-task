import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness5RoundedIcon from "@mui/icons-material/Brightness5Rounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import {
  Box,
  PaletteMode,
  Stack,
  Switch,
  useTheme,
  SvgIcon,
} from "@mui/material";
import { ReactComponent as Logo } from "./logo.svg";
import { FC } from "react";

interface Props {
  toggleTheme: (mode: PaletteMode) => void;
  theme: PaletteMode;
}

export const TopBar: FC<Props> = ({ toggleTheme, theme }) => {
  // const bg = useTheme().appBar.main;
  // Property 'appBar' does not exist on type 'Theme'.
  const palette = useTheme().palette;
  const bg = "#272727";

  return (
    <Box sx={{ background: bg, p: 0.75 }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' sx={{ ml: 1 }}>
          <Logo height='33px' />
        </Stack>
        <Stack alignItems='center' direction='row' spacing={2} sx={{ pr: 2 }}>
          <Stack alignItems='center' direction='row'>
            <Switch
              checked={theme !== "light"}
              onChange={() => toggleTheme(theme === "light" ? "dark" : "light")}
              inputProps={{ "aria-label": "controlled" }}
              size='small'
              sx={{
                color: palette.secondary.contrastText,
                "& .MuiSwitch-track": {
                  backgroundColor: palette.secondary.contrastText,
                },
              }}
            />
            {theme === "light" ? (
              <Brightness5RoundedIcon
                fontSize='small'
                sx={{ color: palette.secondary.contrastText, opacity: 0.95 }}
              />
            ) : (
              <DarkModeRoundedIcon
                fontSize='small'
                sx={{ color: palette.secondary.contrastText, opacity: 0.95 }}
              />
            )}
          </Stack>
          <AccountCircleIcon
            fontSize='large'
            sx={{ color: palette.secondary.contrastText, opacity: 0.85 }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
