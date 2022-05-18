import React from 'react';
import s from './header.module.css';
import ava from '../../assets/user-avatar.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from '../button/button';
import FormLogIn from './LogInForm/logInForm';





const Header = props => {
  const [isDropDownVisible, setDropDownVisibl] = useState(false);

  const handleClick = () => {
    setDropDownVisibl(!isDropDownVisible)
  }

  const drop = () => {
    setDropDownVisibl(false)
  }


  return (
    <header className={s.header}>
      <div className={s.blueLine}/>
      <div className={s.content}>
      <div>
        <h1>
          Awesome Kanban board
        </h1>
      </div>

      <div className={s.LogIn}>
        <div className={s.AvaIcon}>
          <div>
            <img className={s.avatar} src={ava} alt='#'></img>
          </div>

          {isDropDownVisible ? (
            <Button
              className={s.dropdownButton}
              name={<FontAwesomeIcon icon={faAngleDown} className={s.buttonIconActive}
              />}
              onClick={handleClick}
            />
          ) : (
            <Button
              className={s.dropdownButton}
              name={<FontAwesomeIcon icon={faAngleDown} className={s.buttonIcon} />}
              onClick={handleClick}
            />
          )}
        </div>

        {isDropDownVisible && <FormLogIn className={s.menu} drop={drop} />}
      </div>
      </div>

    </header>
  );
}

export default Header;
