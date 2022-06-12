import {
  Button,
  TextField,
  Card,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

const AddSport = ({
  closePanel,
  handleSubmit,
}: {
  closePanel: () => void;
  handleSubmit: (sportName: string, location: string) => void;
}) => {
  const [sportName, setSportName] = useState<string>("");
  const [sportLocation, setSportLocation] = useState<string>("");
  const [canSubmit, setCanSubmit] = useState(false);
  let palette = useTheme().palette;

  const onCancel = () => {
    setSportName("");
    setSportLocation("");
    closePanel();
  };

  const onSubmit = () => {
    handleSubmit(sportName, sportLocation);
    closePanel();
  };

  useEffect(() => {
    //preventing empty submission
    if (sportLocation !== "" && sportName !== "") {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [sportName, sportLocation]);

  return (
    <Card elevation={2} sx={{ borderRadius: 0.5, height: "100%" }}>
      <Stack height='100%' direction='column'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ background: palette.primary.main, py: 1.5, px: 3 }}
        >
          <Typography
            variant='body1'
            color={palette.secondary.contrastText}
            fontSize='11px'
            fontWeight={500}
          >
            Add Sport
          </Typography>
        </Stack>
        <Stack
          sx={{ p: 3 }}
          direction='column'
          height='100%'
          justifyContent='space-between'
        >
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <TextField
              size='small'
              defaultValue={sportName}
              onChange={(e) => setSportName(e.target.value)}
              variant='outlined'
              label='Sport name'
              type='text'
            />
            <TextField
              size='small'
              defaultValue={sportLocation}
              onChange={(e) => setSportLocation(e.target.value)}
              variant='outlined'
              label='Location'
              type='text'
            />
          </form>
          <Stack
            justifyContent='flex-end'
            direction='row'
            alignSelf='flex-end'
            spacing={2}
          >
            <Button onClick={() => onCancel()}>CANCEL</Button>
            <Button
              disabled={!canSubmit}
              onClick={() => onSubmit()}
              variant='contained'
            >
              SAVE
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AddSport;
