import React from 'react';
import Cell from "./Cell"
import {StyledStartButton} from "./styles/StyledStartButton";
// import PropTypes;

const StartButton = ({ callback }) => {


  return (
    <StyledStartButton onClick={callback} >
    START GAME
    </StyledStartButton>

  )

}

// PropTypes. = {
//   callback: PropTypes.function.isRequired
// }


export default StartButton
