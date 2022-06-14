import createCell from "./createCell";

export function createInitialBoardForRandomMaze(rows, cols, start, finish) {
    let grid = [];
    for (let i = 0; i < rows; i++) {
        grid.push([]);
        for (let j = 0; j < cols; j++) {
            grid[i][j] = createCell(i, j, finish);
        }
    }
    grid[start.y][start.x].isStart = true;
    grid[start.y][start.x].isBaseWall = false;
    grid[finish.y][finish.x].isFinish = true;
    grid[finish.y][finish.x].isBaseWall = false;
    return grid;
}

//apply random to the grid
export function getRandomCells(grid){
    let visitedCellsInOrder = [];
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(Math.random() < 0.2 && (!grid[i][j].isStart || !grid[i][j].isFinish)){
                grid[i][j].isBaseWall = true;
                visitedCellsInOrder.push(grid[i][j]);
            }
        }
    }
    visitedCellsInOrder.push("end");
    return visitedCellsInOrder;
}

export default {createInitialBoardForRandomMaze, getRandomCells}

