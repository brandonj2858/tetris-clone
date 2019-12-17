import React from 'react';
import {StyledStage} from './styles/StyledStage'
import Cell from './Cell';

//The 0 after stage lets us know we are referring to a single row and trying to find
// the length of the row hence the width
const Stage = ({ stage }) => (



    <StyledStage width={stage[0].length} height={stage.length} >
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}

    </StyledStage>

)



export default Stage
