import { getAllNodes, sortNodesByDistance, getUnvisitedNeighbours} from "./toolsForAlgorithms";

export default (grid, startNode, finishNode) => {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while (unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        // If we encounter a wall, we skip it.
        if (!closestNode.isBaseWall) {
            if (closestNode.distance === Infinity)
              return visitedNodesInOrder;
            
            closestNode.visited = true;
            visitedNodesInOrder.push(closestNode);
            // if the finsih node is reached then we return the visitedNodes array
            if (closestNode === finishNode)
              return visitedNodesInOrder;
            
            updateUnvisitedNeighbours(closestNode, grid);
        }
    }
}

function updateUnvisitedNeighbours(node, grid){
    const unvisitedNeighbors = getUnvisitedNeighbours(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1 + neighbor.distanceToFinishNode;
        neighbor.previousNode = node;
    }
}