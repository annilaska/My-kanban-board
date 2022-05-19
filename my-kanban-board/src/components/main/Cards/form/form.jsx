import React from 'react';
import Button from '../../../button/button';
import s from './form.module.css';
import { useState } from 'react';




const FormAddNewTask = props => {
    const { formSubmit, setFormVisible } = props
    const [values, setValues] = useState({
        title: '',
        description: '',
    })



    const handleChange = e => {
        const fildName = e.target.name
        setValues({ ...values, [fildName]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.title) {
            formSubmit(values.title, values.description)
        } else {
            setFormVisible(false)
        }
    }





    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                className={s.newTaskInput}
                placeholder='New task title'
                name="title"
                onChange={handleChange}
                value={values.title}
                
            />
            <textarea
                className={s.textarea}
                placeholder='Enter description'
                name="description"
                value={values.description}
                onChange={handleChange}
                
            />
            <div>
                <Button name='Submit' className={s.buttonSubmit} />
            </div>
        </form>
    );
}

export default FormAddNewTask;