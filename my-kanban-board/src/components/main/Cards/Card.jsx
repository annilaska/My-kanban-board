import React from 'react';
import s from './Card.module.css';

import { CARDS, CARDS_COPY } from '../../../config'
import Titles from './titles/titles';
import uniqid from 'uniqid'




const Cards = props => {
  const {dataArray, setData} = props;


  const addNewTitle = (title, description) => {
    const task = {
      id: uniqid(),
      title: title,
      description: description,
      created: new Date().toISOString(),
      status: CARDS.Backlog
    }
    setData([...dataArray, task])
  }

  
  return (
    <div className={s.cards}>
      {Object.values(CARDS).map(card => {
         
          return  (
          <Titles key={CARDS[card]} card={card} title={CARDS_COPY[card]} {...props} addNewTitle={addNewTitle}/>
          )}
     )}
    </div>    
  );
}

export default Cards;
