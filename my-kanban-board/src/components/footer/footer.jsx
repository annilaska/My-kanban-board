import React from 'react';
import s from './footer.module.css';
import { CARDS } from '../../config';


const Footer = ({dataArray}) => {
 

  const ActivTask = () => {
      const countActivTask = dataArray.filter(task => task.status === CARDS.Backlog)
      if(!countActivTask.length) return 0
      return (countActivTask.length)
  }

  const FinishedTask = () => {
    const countFinishedTask = dataArray.filter(task => task.status === CARDS.Finished)
    if(!countFinishedTask.length) return 0
    return (countFinishedTask.length)
  }

  return (
    <footer className={s.footer}>
      <div className={s.counts}>
      
          <div className={s.count}>Active tasks: {<ActivTask />}</div>
          <div className={s.count}>Finished tasks: {<FinishedTask />}</div>
      
      </div>
      <div>
        Kanban board by Ann, 2022
      </div>
    </footer>
  );
}

export default Footer;

