import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { FC, ReactElement, useState, useEffect } from "react";

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
};

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  const [isActive, setIsActive] = useState(false);
  const palette = useTheme().palette;

  let path = useLocation().pathname;

  useEffect(() => {
    setIsActive(path === to);
  }, [path]);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ListItemButton
        color='primary'
        selected={isActive}
        dense
        sx={{ py: 0.8, color: palette.primary.main }}
      >
        <ListItemIcon
          sx={{
            color: isActive ? palette.primary.main : palette.grey["600"],
            minWidth: "17%",
            ml: 1,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText sx={{ textTransform: "capitalize" }}>
          <Typography
            variant='subtitle2'
            fontSize='12px'
            color={isActive ? palette.text.primary : palette.grey["700"]}
            sx={{ mb: -0.25 }}
          >
            {label}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </Link>
  );
};
