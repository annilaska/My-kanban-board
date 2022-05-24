import React from 'react';
import s from './titles.module.css'

import Button from '../../../button/button'
import { CARDS } from '../../../../config';
import { useState } from 'react';
import FormAddNewTask from '../form/form';
import { Link } from 'react-router-dom';
import Select from '../Select/select';




const Titles = props => {
    const { title, card, addNewTitle, dataArray } = props
    const [isFormVisible, setFormVisible] = useState(false)


    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title, description) => {
        addNewTitle(title, description)
        setFormVisible(false)
    }

    const backlogTitles = () => {
      const selectItems = dataArray.filter(item => item.status === CARDS.Backlog)
      return (<div>{selectItems.title}</div>)  
    }
   
    const readyTitles = () => {
        const selectItems = dataArray.filter(item => item.status === CARDS.Ready)
        return (<div>{selectItems.title}</div>)  
      }

      const InProgressTitles = () => {
        const selectItems = dataArray.filter(item => item.status === CARDS.In_Progress)
        return (<div>{selectItems.title}</div>)  
      }

    
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
                 <Button className={s.addButton} name='+ Add new card' onClick={handleClick} />
                {card === CARDS.Backlog && isFormVisible && (
                    <FormAddNewTask formSubmit={formSubmit} setFormVisible={setFormVisible}/>
                )}
                {card === CARDS.Ready && isFormVisible && <Select selectList={backlogTitles}/>}
                {card === CARDS.In_Progress && isFormVisible && <Select selectList={readyTitles}/>}
                {card === CARDS.Finished && isFormVisible && <Select selectList={InProgressTitles}/>}
        </div>
    )
}


export default Titles; 