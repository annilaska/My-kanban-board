import React from 'react';
import s from './board.module.css';
import Cards from './cards/cards';
import { CARDS } from '../../../config';






const Board = props => {
  let cadsItems = Object.values(CARDS).map(card => <Cards {...props} name={card} />)
  
  return (
    <div className={s.board}>
        {cadsItems}
    </div>
  );
}

export default Board;
