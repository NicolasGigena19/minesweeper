import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GameHistoryLayout from "./layout";
import ErrorHandler from "../../services/validators/ErrorHandler";
import { getGame } from "../../redux/actions/Game/GameActions";

export default function GameHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(id));
  }, []);

  const { errors, game } = useSelector(state => ({
    errors: state.formError.errors,
    game: state.game.currentGame
  }));

  return <GameHistoryLayout onError={new ErrorHandler(errors)} game={game} />;
}
