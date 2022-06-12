import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import {
  Card,
  Stack,
  Table,
  Typography,
  useTheme,
  Button,
  Grid,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  );
  const [activeId, setActiveId] = useState<number | undefined>(undefined);
  // const HEADER_BAR_COLOR = useTheme().appBar.main;
  // Property 'appBar' does not exist on type 'Theme'.
  let palette = useTheme().palette;
  const HEADER_BAR_COLOR = "#272727";

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType["id"]) => {
    // fetch selected sport details by ID
    getSportById(id)
      .then((s) => {
        setSportDetails(s);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleView = (id: number) => {
    if (id === activeId) {
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  };

  const generateHeader = (headerInfo: TableColumn<SportType>[]) => {
    return columns.map((col: TableColumn<SportType>, i) => {
      let textAlign: "right" | "inherit" = col.textAlign ? "right" : "inherit";
      return (
        <TableCell key={col.id} align={textAlign}>
          <Typography
            fontSize='12px'
            fontWeight={500}
            pt={1}
            ml={i === 0 ? 1 : 0}
            mr={columns.length - 1 === i ? 1 : 0}
          >
            {col.label}
          </Typography>
        </TableCell>
      );
    });
  };

  const generateRows = (rowsInfo: SportsType) => {
    return rowsInfo.items.map((s: SportType) => (
      <TableRow
        key={s.name}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          background:
            s.id === activeId
              ? palette.background.default
              : palette.background.paper,
        }}
      >
        <TableCell component='th' scope='s'>
          <Typography fontSize='12px' ml={1}>
            {s.name}
          </Typography>
        </TableCell>
        <TableCell align='left'>
          <Typography fontSize='12px'>{s.location}</Typography>
        </TableCell>
        <TableCell align='left'>
          <Typography fontSize='12px'>{s.shortDescription}</Typography>
        </TableCell>
        <TableCell align='right'>
          <IconButton
            sx={{
              color:
                s.id === activeId ? palette.primary.main : palette.grey["600"],
              m: 0,
              p: 1,
            }}
            onClick={() => handleView(s.id)}
          >
            <VisibilityIcon fontSize='small' />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };

  useEffect(() => {
    if (activeId) {
      getSportDetails(activeId);
    } else {
      setSportDetails(undefined);
    }
  }, [activeId]);

  useEffect(() => {
    // fetch sports content after initial render
    getSports()
      .then((s) => {
        setSports(s);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!sports) {
    return <NoResults />;
  }

  return (
    <>
      <Stack
        height='100%'
        direction='column'
        justifyContent='flex-start'
        my={1}
        mx={2}
      >
        <Typography
          variant='body1'
          fontSize='13px'
          fontWeight={500}
          style={{ margin: 0, color: palette.text.primary }}
        >
          Sports
        </Typography>
        <Typography
          variant='body2'
          fontSize='12px'
          sx={{ color: palette.text.primary }}
          lineHeight={1.6}
          mt={1}
        >
          {sports.teaser}
        </Typography>
        <Grid container sx={{ mt: 0 }} alignItems='stretch' spacing={4}>
          <Grid item xs>
            <Card
              elevation={2}
              sx={{
                borderRadius: 0.5,
                backgroundColor: palette.background.paper,
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ background: HEADER_BAR_COLOR, py: 1, px: 3 }}
              >
                <Typography
                  variant='body1'
                  color={palette.secondary.contrastText}
                  fontSize='11px'
                  fontWeight={500}
                >
                  Sports
                </Typography>
                <Button
                  variant='contained'
                  sx={{ py: 0, px: 1, mb: 0.2, mt: 0.3 }}
                >
                  <Typography variant='button' fontSize='12px' fontWeight={400}>
                    ADD SPORT
                  </Typography>
                </Button>
              </Stack>
              <Table size='small'>
                <TableHead>
                  <TableRow>{generateHeader(columns)}</TableRow>
                </TableHead>
                <TableBody>{generateRows(sports)}</TableBody>
              </Table>
            </Card>
          </Grid>
          {sportDetails && (
            <Grid item xs>
              <Card
                elevation={2}
                sx={{
                  borderRadius: 0.5,
                  py: 3,
                  px: 3,
                  height: "100%",
                  backgroundColor: palette.background.paper,
                }}
              >
                <Typography fontSize='12px' variant='body1' fontWeight={500}>
                  {sportDetails.name}&nbsp;({sportDetails.location})
                </Typography>
                <Typography
                  variant='body2'
                  fontSize='12px'
                  sx={{ color: palette.text.primary }}
                  lineHeight={1.6}
                  mt={2.5}
                >
                  {sportDetails.description}
                </Typography>
              </Card>
            </Grid>
          )}
        </Grid>
      </Stack>
    </>
  );
};

export default SportsScreen;
