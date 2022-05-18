import React from 'react';
import s from './logInForm.module.css';




const FormLogIn = () => {
    return (
      <div className={s.dropDown}>
        <p className={s.menuItem}>Profile</p>
        <p className={s.menuItem}>Log Out</p>
      </div>
    )
  }

  


  export default FormLogIn;