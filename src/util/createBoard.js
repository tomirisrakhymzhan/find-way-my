import createCell from "./createCell";
export default (row, col, start, finish) => {
  let grid = [];
        for (let i = 0; i < row; i++) {
            grid.push([]);
            for (let j = 0; j < col; j++) {
                grid[i][j] = createCell(i, j, finish);
            }
        }
        grid[start.y][start.x].isStart = true;
        grid[finish.y][finish.x].isFinish = true;
        return grid;
};
