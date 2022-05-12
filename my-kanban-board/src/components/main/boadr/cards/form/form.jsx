import React from 'react';
import Button from '../../../button/button';
import s from './form.module.css';
import {useState} from 'react';


const FormAddNewTask = props => {
    const {addNewTask, setFormVisible} = props
    const [values, setValues] = useState({
      title:'',
      description:'',
    })

    return (
        <form className={s.form}>
            <input
                className={s.newTaskInput}
                placeholder='New task title'
                name="title"
            />
            <textarea
                className={s.textarea}
                id='taskDicription'
                placeholder='|...'
                name="description"
            />
            <Button name='Submit' className={s.buttonSubmit} />
        </form>
    );
}

export default FormAddNewTask;