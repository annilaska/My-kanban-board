import React from 'react';
import Button from '../../../button/button';
import s from './form.module.css';
import { useState } from 'react';


const FormAddNewTask = props => {
    const { formSubmit } = props
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
            formSubmit(false)
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
            <Button name='Submit' className={s.buttonSubmit} />
        </form>
    );
}

export default FormAddNewTask;