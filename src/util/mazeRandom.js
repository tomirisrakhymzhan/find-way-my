export function createInitialBoardRandom (rows, cols) {

    let grid = [];
    for (let i = 0; i < row; i++) {
        grid.push([]);
        for (let j = 0; j < col; j++) {
            grid[i][j] = {
                x: j,
                y: i,
                isWallToDestroy: false,
                isBaseWall: false,
                isStart: false,
                isFinish: false,
                visited: false,
                previousNode: null,
                distance: Infinity,
                distanceToFinishNode: Math.abs(rows * 2 - i) + Math.abs(cols * 2 - 1 - j)
            };
        }
    }
    grid[0][1].isStart = true;
    grid[0][1].isBaseWall = false;
    grid[rows * 2][cols * 2 - 1].isFinish = true;
    grid[rows * 2][cols * 2 - 1].isBaseWall = false;

    return grid;
}

//apply random to the grid
// export function getVisitedCellsFromRandom(grid){
//     let current = grid[1][1];
//     let stack = [current];
//     let visitedCellsInOrder = []
//     while(stack.length){
//         current.visited = true
//         visitedCellsInOrder.push(current)
//         // get possible neighbour
//         let next = getNeighbour(current, grid)
//         if(next != null){
//             next.visited = true
//             //destroy wall
//             let wallDestroyed = destroyWall(current, next, grid)
//             visitedCellsInOrder.push(wallDestroyed)
//             //push current to stack
//             stack.push(current)
//             current = next
//         }else{
//             // if no neighbours found, start backtracking using the stack 
//             current = stack.pop()
//         }
//     }
//     visitedCellsInOrder.push("end")
//     return visitedCellsInOrder;
// }
// function getNeighbour(current, grid){
//     let neighbours = [[current.y - 2, current.x],
//                       [current.y + 2, current.x],
//                       [current.y, current.x+2],
//                       [current.y, current.x-2]]
//     let notVisited = neighbours.filter(c => (
//                                               c[0] > 0 && c[1] > 0
//                                               && c[0] < grid.length && c[1] < grid[0].length
//                                               && !grid[c[0]][c[1]].visited
//                                             ))
//     if(notVisited.length){
//         let rndNeighborPosition = notVisited[Math.floor(Math.random() * notVisited.length)];
//         let rndNeighbor = grid[rndNeighborPosition[0]][rndNeighborPosition[1]]
//         return rndNeighbor
//     }else return null;
// }

// function destroyWall(current, next, grid){
//     //compare cells on x axis
//     let diffX = current.x - next.x
//     if(diffX === 2){
//         grid[next.y][next.x + 1].isWallToDestroy = true
//         return grid[next.y][next.x + 1]
//     }else if(diffX === -2){
//         grid[next.y][next.x - 1].isWallToDestroy = true
//         return grid[next.y][next.x - 1]
//     }
//     //compare cells on y axis
//     let diffY = current.y - next.y
//     if(diffY === 2){
//         grid[next.y + 1][next.x].isWallToDestroy = true
//         return grid[next.y + 1][next.x]
//     }else if(diffY === -2){
//         grid[next.y - 1][next.x].isWallToDestroy = true
//         return grid[next.y - 1][next.x]
//     }
// }
export default {createInitialBoardRandom}

