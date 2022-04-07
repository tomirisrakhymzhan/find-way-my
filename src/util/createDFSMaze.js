export default (rows, cols) => {
    let grid = [];
    for (let i = 0; i < rows*2 + 1; i++) {
        grid.push([]);
        if(i%2==0){
            for (let j = 0; j < cols*2 + 1; j++) {
                grid[i][j] = {
                    x: j,
                    y: i,
                    isWall: true,
                    isStart: false,
                    isFinish: false,
                    visited: false
                };
            }
        }else{
            for (let j = 0; j < cols*2 + 1; j++) {
                if(j%2==0){
                    grid[i][j] = {
                        x: j,
                        y: i,
                        isWall: true,
                        isStart: false,
                        isFinish: false,
                        visited: false
                    };
                }else{
                    grid[i][j] = {
                        x: j,
                        y: i,
                        isWall: false,
                        isStart: false,
                        isFinish: false,
                        visited: false
                    };
                    
                }
            }
        }
    }
    grid[0][1].isStart = true;
    grid[rows * 2][cols * 2 - 1].isFinish = true;

    
    

    
    let current = grid[1][1];
    let stack = [current];
    while(stack.length){
        current.visited = true
        // get possible neighbour
        let next = getNeighbour(current, grid)
        //console.log(next)
        if(next != null){
            next.visited = true
            //destroy wall
            destroyWall(current, next, grid)
            //push current to stack
            stack.push(current)
            current = next
        }else{
            // if no neighbours found, start backtracking using the stack 
            current = stack.pop()
        }
    }
    //console.log(grid);
    return grid;
};

function getNeighbour(current, grid){
    let neighbours = [[current.y - 2, current.x],
                      [current.y + 2, current.x],
                      [current.y, current.x+2],
                      [current.y, current.x-2]]
    let notVisited = neighbours.filter(c => (
                                              c[0] > 0 && c[1] > 0
                                              && c[0] < grid.length && c[1] < grid[0].length
                                              && !grid[c[0]][c[1]].visited
                                            ))
    if(notVisited.length){
        let rndNeighborPosition = notVisited[Math.floor(Math.random() * notVisited.length)];
        let rndNeighbor = grid[rndNeighborPosition[0]][rndNeighborPosition[1]]
        return rndNeighbor
    }else return null;
}

function destroyWall(current, next, grid){
    //compare cells on x axis
    let diffX = current.x - next.x
    if(diffX === 2){
        grid[next.y][next.x + 1].isWall = false
        grid[next.y][next.x + 1].visited = true

    }else if(diffX === -2){
        grid[next.y][next.x - 1].isWall = false
        grid[next.y][next.x - 1].visited = true
    }
    //compare cells on y axis
    let diffY = current.y - next.y
    if(diffY === 2){
        grid[next.y + 1][next.x].isWall = false
        grid[next.y + 1][next.x].visited = true

    }else if(diffY === -2){
        grid[next.y - 1][next.x].isWall = false
        grid[next.y - 1][next.x].visited = true

    }
}