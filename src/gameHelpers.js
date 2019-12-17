export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


export const createStage = () => {
  return (  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
)
}
// in brackets x and y is destructered to Movex and MoveY because im going to
// use it in my loops

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x +=1 ) {
      //first we check if were on a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
        //check that our move is in the game area height
        !stage[y+ player.pos.y + moveY] ||

        //check if our move is within the game areas width
        !stage[y+ player.pos.y + moveY][x + player.pos.x + moveX] ||
        //check that the cell were moving to isnt set to clear
        stage[y+ player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
      ) {
        return true;
      }
      }

    }
  }
}
