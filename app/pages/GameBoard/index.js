import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import GameBoardLayout from "./layout";
import ErrorHandler from "../../services/validators/ErrorHandler";
import {
  checkItem,
  discoverItem,
  getGame
} from "../../redux/actions/Game/GameActions";

export default function GameBoard() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const { errors, game } = useSelector(state => ({
    errors: state.formError.errors,
    game: state.game.currentGame
  }));

  useEffect(() => {
    dispatch(getGame(id));
  }, []);

  const handleCheckItem = position => {
    dispatch(checkItem(position, id));
  };

  const handleDiscoverItem = position => {
    dispatch(discoverItem(position, id));
  };

  return (
    <GameBoardLayout
      onError={new ErrorHandler(errors)}
      game={game}
      onCheckItem={handleCheckItem}
      onDiscoverItem={handleDiscoverItem}
    />
  );
}
