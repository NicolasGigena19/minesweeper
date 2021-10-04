import * as React from "react";
import { useSelector } from "react-redux";
import LandingLayout from "./layout";
import formValidator from "../../services/validators/FormValidator";
import { createGameSchema } from "../../utils/Schemas/gameSchemas";
import ErrorHandler from "../../services/validators/ErrorHandler";
import { dispach } from "../../app";
import { newGame } from "../../redux/actions/Game/GameActions";

export default function Landing() {
  const { errors } = useSelector(state => ({
    errors: state.formError.errors
  }));

  const handleCreateGame = async ({ sizeX, sizeY, difficulty }) => {
    sizeX = sizeX.trim() != "" ? parseInt(sizeX) : 0;
    sizeY = sizeY.trim() != "" ? parseInt(sizeY) : 0;
    const isValid = await formValidator.validate(
      { sizeX, sizeY, difficulty },
      createGameSchema
    );

    if (isValid) {
      dispach(newGame(sizeX, sizeY, difficulty));
    }
  };

  return (
    <LandingLayout
      onCreateGame={handleCreateGame}
      onError={new ErrorHandler(errors)}
    />
  );
}
