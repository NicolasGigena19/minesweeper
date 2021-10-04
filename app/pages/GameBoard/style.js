export default () => ({
  board: {
    "& div": {
      backgroundColor: "#BBBBBB",
      borderLeft: "2px solid #D3D3D3",
      borderTop: "2px solid #D3D3D3",
      borderRight: "2px solid #A9A9A9",
      borderBottom: "2px solid #A9A9A9",
      textAlign: "center",
      lineHeight: "32px"
    },
    display: "grid"
  }
});

export const interactiveStyle = {
  rows: function(numberOfRows) {
    return { gridTemplateRows: `repeat(${numberOfRows}, 32px)` };
  },
  columns: function(numberOfColumns) {
    return { gridTemplateColumns: `repeat(${numberOfColumns}, 32px)` };
  }
};

export const style = {
  uncovered: {
    fontFamily: '"Lucida Console","Courier New", Courier, monospace',
    fontWeight: "bold",
    borderLeft: "1px solid #A9A9A9",
    borderTop: "1px solid #A9A9A9",
    borderRight: "1px solid #D3D3D3",
    borderBottom: "1px solid #D3D3D3",
    textShadow: "1px 1px 2px #999999"
  },
  boxSizeOfGame: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  sizeXbutton: {
    marginLeft: 0.5
  },
  sizeYbutton: {
    marginRight: 0.5
  }
};
