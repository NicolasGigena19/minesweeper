import React from "react";
import GameBoardStyle, { interactiveStyle } from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import {style} from "./style";


const getItemStyle = item => {
  var newStyles = {};

  if(item != null && item != '!' && item != '?' && item != 'x') {
    newStyles = {...newStyles,  ...style.uncovered}
  }
  if(item == 1){
    newStyles = {...newStyles, color: '#0a8c17'}
  }

  if(item > 1 && item < 4){
    newStyles = {...newStyles, color: '#dce33b'}
  }

  if(item > 3) {
    newStyles = {...newStyles, color: '#ff000d'}
  }

  return newStyles;
}

const getItem = item => {
  switch (item) {
    case 'x': return 'X'
    case 0 : return ''
    default: return item
  }
}


function GameBoardLayout({
  game,
  classes,
  onError,
  onCheckItem,
  onDiscoverItem
}) {
  const { sizeX, sizeY, gameBoard, gameActive, mineExploded } = game;

  const handleClickOnIteam = (typeEvent, position, e) => {
    e.preventDefault();

    if (typeEvent == 0) {
      onDiscoverItem(position);
    } else {
      onCheckItem(position);
    }
  };

  const getBoardContent = () => {
    const content = [];

    for (let row = 0; row < sizeY; row++) {
      for (let column = 0; column < sizeX; column++) {
        
        content.push(
          <div
            key={`${row}${column}`}
            onContextMenu={e => handleClickOnIteam(1, { y: row, x: column }, e)}
            onClick={e => handleClickOnIteam(0, { y: row, x: column }, e)}
            style={getItemStyle(gameBoard[row][column])}
          >
            {getItem(gameBoard[row][column])}
          </div>
        );
      }
    }
    return content;
  };

  return (
    <div>
      <div
      className={classes.board}
      style={{
        ...interactiveStyle.rows(sizeY),
        ...interactiveStyle.columns(sizeX)
      }}
    >
      {getBoardContent()}
    </div>
      {onError.ErrorBar()}
    </div>
  );
}

export default withStyles(GameBoardStyle)(GameBoardLayout);
