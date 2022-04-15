export default (row, col) => {
  let grid = [];
        for (let i = 0; i < row; i++) {
            grid.push([]);
            for (let j = 0; j < col; j++) {
                grid[i][j] = {
                    x: j,
                    y: i,
                    // isBaseWall: false,
                    // isStart: false,
                    // isFinish: false,
                    // previousNode: null,
                    // distance: Infinity,
                };
            }
        }
        
        console.log(grid);
        return grid;
};
