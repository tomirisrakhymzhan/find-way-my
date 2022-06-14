function getAllNodes(grid){
    const nodes = [];
    for (const row of grid) {
        for (const node of row) {
        nodes.push(node);
        }
    }
    return nodes;
}

function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function getUnvisitedNeighbours(node, grid) {
    const neighbours = [];
    const { y, x } = node;
    if (y > 0)
      neighbours.push(grid[y - 1][x]);
    if (y < grid.length - 1)
      neighbours.push(grid[y + 1][x]);
    if (x > 0)
      neighbours.push(grid[y][x - 1]);
    if (x < grid[0].length - 1)
      neighbours.push(grid[y][x + 1]);
    return neighbours.filter(neighbor => !neighbor.visited);
}

export {getAllNodes, sortNodesByDistance, getUnvisitedNeighbours}