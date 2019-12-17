import {useState, useEffect} from 'react';

import {createStage} from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
//  const [stage, setStage] = useStage(player, resetPlayer);


  useEffect(() => {
    setRowsCleared(0)
    const sweepRows = newStage =>
      newStage.reduce((cellArray, row) => {
          // if we cant find an empty cell in our row then return -1
          //checks each row until it reaches a non filled row.
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          //adds a new empty row to the top of the stage
          cellArray.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return cellArray;
        }
        cellArray.push(row);
        return cellArray;
      }, [])


    const updateStage = prevStage => {

      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear']: cell)),
      )
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ]
          }
        })
      })
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage
    }



    setStage(prev => updateStage(prev))
  }, [player, resetPlayer])

  return [stage, setStage, rowsCleared];
}
