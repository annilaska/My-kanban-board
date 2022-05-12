import React from 'react';
import Button from '../../button/button';
import s from './cards.module.css';
import Titles from './titles/titles';



const Cards = props => {
  const {dataArray} = props
  let titleItem = dataArray.map(item => <Titles name={item.title}/>)

  return (
    <div className={s.cards}>
      {props.name}
      <div>
        {titleItem}
      </div>
      <div>
        <Button name='+ Add new card' className={s.addButton} />
      </div>
    </div>

  );
}

export default Cards;
