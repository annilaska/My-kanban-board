import React from 'react';
import s from './header.module.css';
import ava from '../../assets/user-avatar.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = props => {
  return (
    <header className={s.header}>
      <div>
        <h1>
          Awesome Kanban board
        </h1>
      </div>
      <div className={s.LogIn}>
        <div>
          <img className={s.avatar} src={ava} alt=''></img>
        </div>
        <div>
        <FontAwesomeIcon icon={faAngleDown} className={s.iconForm}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
