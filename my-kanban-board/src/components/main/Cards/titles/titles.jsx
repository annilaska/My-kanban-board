import React from 'react';
import s from './titles.module.css'

import Button from '../../../button/button'
import { CARDS } from '../../../../config';
import { useState } from 'react';
import FormAddNewTask from '../form/form';
import { Link } from 'react-router-dom';


const Titles = props => {
    const { title, listItems, card, addNewTitle, dataArray } = props
    const [isFormVisible, setFormVisible] = useState(false)


    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title, description) => {
        addNewTitle(title, description)
        setFormVisible(false)
    }

    const ListSelect = () => {
       return (
            
        <nav className={s.nav}>
           {listItems.map(item =>
                <div className={s.title}>{item.title}</div>)}
         </nav>
       )
    }
        
       

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
                {card === CARDS.Backlog && <Button className={s.addButton} name='+ Add new card' onClick={handleClick} />}
                {card === CARDS.Ready && 
                
                    <Button className={s.addButton} name='+ Add new card' onClick={handleClick} />
                
                }
                {card === CARDS.In_Progress && <Button className={s.addButton} name='+ Add new card' onClick={handleClick} />}
                {card === CARDS.Finished && <Button className={s.addButton} name='+ Add new card' onClick={handleClick} />}
                {card === CARDS.Backlog && isFormVisible && (
                    <FormAddNewTask formSubmit={formSubmit} />
                )}
                {card === CARDS.Ready && isFormVisible && (<ListSelect />)}
            
        </div>
    )
}


export default Titles; 