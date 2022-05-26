import React from 'react';
import s from './titles.module.css'

import Button from '../../../button/button'
import { CARDS } from '../../../../config';
import { useState } from 'react';
import FormAddNewTask from '../form/form';
import { Link } from 'react-router-dom';
import Select from '../Select/select';




const Titles = ({ title, card, addNewTitle, dataArray, setData }) => {
    
    const [isFormVisible, setFormVisible] = useState(false)


   

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title, description) => {
        addNewTitle(title, description)
        setFormVisible(false)
    }

   
    const backlogTitles = dataArray.filter(item => item.status === CARDS.Backlog)
    const readyTitles = dataArray.filter(item => item.status === CARDS.Ready)
    const InProgressTitles = dataArray.filter(item => item.status === CARDS.In_Progress)


   
    
    const listItems = dataArray.filter(item => item.status === card)

    return (
        <div className={s.list}>
      
        
               <h2 className={s.h2}>
                {title}
            </h2>
            <div>
                {listItems.length ? listItems.map(item =>
                    <Link to={`/task-detail/${item.id}`} key={item.id} className={s.titleLink}>
                        <div className={s.title}>{item.title}</div>
                    </Link>
                ) :
                    <p className={s.mock}>No tasks added yet</p>
                }
            </div>
                {card === CARDS.Ready && <Button  disabled={backlogTitles.length <= 0}  className={s.addButton} name='+ Add new card' onClick={handleClick} />}
                {card === CARDS.In_Progress && <Button  disabled={readyTitles.length <= 0}  className={s.addButton} name='+ Add new card' onClick={handleClick} />}
                {card === CARDS.Finished && <Button  disabled={InProgressTitles.length <= 0}  className={s.addButton} name='+ Add new card' onClick={handleClick} />}
                {card === CARDS.Backlog && <Button className={s.addButton} name='+ Add new card' onClick={handleClick} /> }

                {card === CARDS.Backlog && isFormVisible 
                && ( <FormAddNewTask formSubmit={formSubmit} setFormVisible={setFormVisible}/> )}


                {title === "Ready" && isFormVisible && <Select setFormVisible={setFormVisible} selectList={backlogTitles} dataArray={dataArray} setData={setData} card={card}/>}
                {title === "In Progress" && isFormVisible && <Select setFormVisible={setFormVisible} selectList={readyTitles} dataArray={dataArray} setData={setData} card={card}/>}
                {title === "Finished" && isFormVisible && <Select  setFormVisible={setFormVisible} selectList={InProgressTitles} dataArray={dataArray} setData={setData} card={card}/>}
        </div>
    )
}


export default Titles; 