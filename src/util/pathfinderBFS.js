// Returns all nodes in the order in which they were visited.
// Make nodes point back to their previous node so that we can compute the shortest path
// by backtracking from the finish node.

export default (grid, startNode, finishNode) => {
    const visitedNodesInOrder = [];
    let queue = [startNode];
    while (queue.length) {
        const current = queue.shift();
        if (current === finishNode) {
            return visitedNodesInOrder;
        }
        if (!current.isBaseWall && (current.isStart || !current.visited)) {
            current.visited = true;
            visitedNodesInOrder.push(current);
            const {x, y} = current;
            let next;
            if (y > 0) {
                next = grid[y - 1][x];
                if (!next.visited) {
                    next.previousNode = current;
                    queue.push(next);
                }
            }
            if (y < grid.length - 1) {
                next = grid[y + 1][x];
                if (!next.visited) {
                    next.previousNode = current;
                    queue.push(next);
                }
            }
            if (x > 0) {
                next = grid[y][x - 1];
                if (!next.visited) {
                    next.previousNode = current;
                    queue.push(next);
                }
            }
            if (x < grid[0].length - 1) {
                next = grid[y][x + 1];
                if (!next.visited) {
                    next.previousNode = current;
                    queue.push(next);
                }
            }
        }
    }
}
  