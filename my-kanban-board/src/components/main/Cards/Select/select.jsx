import React from 'react';
import s from './select.module.css';

const Select = props => {
    const { title, listItems, card, dataArray } = props


    return (
        <select className={s.select}>
            <option>{listItems.map(item=> <div>{item.title}</div>)}</option>
        </select>
    )
}

export default Select;

