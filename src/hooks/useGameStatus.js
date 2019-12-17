import {useState, useEffect, useCallback} from 'react'

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)


  const linePoints = [40, 100 , 300, 1200];

// if 1 row is cleared then linePoints[1-1]... linePoints[0] points to the integer 40 in the array
// multiplied by (0 + 1 ) = 40
  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore( prev => prev + linePoints[rowsCleared - 1 ] * ( level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared])



  useEffect(() => {
    calcScore();

  }, [calcScore, rowsCleared, score])
  return [score, setScore, rows, setRows, level, setLevel]
}
