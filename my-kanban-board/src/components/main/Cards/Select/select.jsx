import React from 'react';
import s from './select.module.css';
import { CARDS } from '../../../../config';

const Select = props => {
    const { listItems } = props

    // const handleChange = (e) => {
    //     const updateTask = 
    // }

              

    return (
        <select className={s.select}>
            {
              listItems.map(item => <option>{item.title}</option>)
            }            
        </select>
    )
}

export default Select;
