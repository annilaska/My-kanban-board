import React from 'react';
import s from './select.module.css';



const Select = ({ selectList, setData, dataArray, card, setFormVisible}) => {
   

    const handleChange = (e) => {
        const updatedTitles = dataArray.map( item => {
            if(item.id === e.target.value) {
                return (
                    {...item, status: card}
                )
            }
            return item
        }) 
        setData(updatedTitles) 
        setFormVisible(false)
    }
       

    return (
        <select className={s.select} onChange={handleChange}>
             <option>Choose task</option>
             {selectList.map(item => {
                return (
                   
                    <option className={s.title} value={item.id} key={item.id}>{item.title}</option>
                )
             })}
        </select>
    )
}

export default Select;
