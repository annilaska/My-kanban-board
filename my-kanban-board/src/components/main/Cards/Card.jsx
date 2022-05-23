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

// const a = dataArray.map(card => card.status === CARDS.Backlog)
// const b = Object.values(a).find(a => a.title)
  
  return (
    <div className={s.cards}>
      {Object.values(CARDS).map(card => {
         const listItems = dataArray.filter(item => item.status === card)
          return  (
          <Titles key={CARDS[card]} card={card} title={CARDS_COPY[card]} listItems={listItems || []}addNewTitle={addNewTitle}/>
          )}
     )}
    </div>    
  );
}

export default Cards;
