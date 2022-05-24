import React from 'react';
import s from './select.module.css';
// import { CARDS } from '../../../../config';

const Select = ({ selectList }) => {
   

    // const handleChange = (e) => {
    //     const updateTask = 
    // }

              

    return (
        <select className={s.select}>
            <option>{selectList}</option>         
        </select>
    )
}

export default Select;
