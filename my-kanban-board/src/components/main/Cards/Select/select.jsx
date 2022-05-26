import React from 'react';
import s from './select.module.css';
import { useParams } from 'react-router-dom'


const Select = ({ selectList, setData, dataArray }) => {
   
   
    let params = useParams()
    const { taskId } = params;
  


    const handleChange = (e) => {
        const updatedTitles = dataArray.map( item => {
            if(item.id === e.target.value.id) {
                return (
                    {...item, status: taskId.status}
                )
            }
            return item
        }) 
        setData(updatedTitles) 
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
