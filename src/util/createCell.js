export default (i, j, finish) =>{
    return {
        x: j,
        y: i,
        isWallToDestroy: false,
        isBaseWall: false,
        isStart: false,
        isFinish: false,
        visited: false,
        previousNode: null,
        distance: Infinity,
        distanceToFinishNode: Math.abs(finish.y - i) + Math.abs(finish.x - j)
    }
}