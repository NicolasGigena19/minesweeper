import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { TextField, Slider } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import LandingStyle, { style } from "./style";
import { page, redirectTo } from "../../utils/helpers/redirectTo";

const theme = createTheme();

function LandingLayout({ onCreateGame, classes, onError }) {
  const [difficulty, setDifficulty] = useState(0);

  const sendCreateGame = e => {
    e.preventDefault();
    const { x, y } = e.target;
    onCreateGame({
      sizeX: x.value,
      sizeY: y.value,
      difficulty
    });
  };

  const getDifficulty = value => {
    switch (value) {
      case 0:
        return "Random";
      case 1:
        return "Fácil";
      case 2:
        return "Medio";
      case 3:
        return "Difícil";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={style.boxContainer}>
          <Typography component="h1" variant="h5">
            Configuracion de partida
          </Typography>
          <Box
            component="form"
            onSubmit={sendCreateGame}
            noValidate
            sx={{ mt: 1 }}
          >
            <h4 className={classes.subtitle}> Tamaño del tablero </h4>
            <Box sx={style.boxSizeOfGame}>
              <TextField
                className={classes.sizeYbutton}
                error={onError.isWrong("sizeY")}
                helperText={onError.message("sizeY")}
                sx={style.sizeYbutton}
                type="number"
                fullWidth
                id="y"
                label="Alto"
                autoFocus
              />
              <TextField
                className={classes.sizeXbutton}
                error={onError.isWrong("sizeX")}
                helperText={onError.message("sizeX")}
                sx={style.sizeXbutton}
                type="number"
                fullWidth
                name="x"
                label="Ancho"
              />
            </Box>
            <h4 className={classes.subtitle}>Seleccione la dificultad</h4>
            <Slider
              onChange={event => setDifficulty(event.target.value)}
              step={1}
              marks
              min={1}
              max={3}
            />
            <Typography id="non-linear-slider" gutterBottom>
              {getDifficulty(difficulty)}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Empezar partida
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default withStyles(LandingStyle)(LandingLayout);
