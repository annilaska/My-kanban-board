import React from 'react';
import s from './titles.module.css'



const Titles = props => {
    
    return (
        <div className={s.title}>{props.name}</div>
    )
}


export default Titles; 