export default (row, col) => {
  let board = [];

  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        isStart: false,
        isEnd: false,
        isBorder: false,
        x: x,
        y: y,
      });
    }
    board.push(subCol);
  }
  return board;
};
