export default (row, col) => {
  let grid = [];

        for (let i = 0; i < row; i++) {
            grid.push([]);
            for (let j = 0; j < col; j++) {
                grid[i][j] = {
                    x: j,
                    y: i,
                    isWall: Math.random()<0.5,
                    isStart: false,
                    isFinish: false
                };
            }
        }
        
        console.log(grid);
        return grid;
};
