import React from 'react';
import s from './task-detail.module.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CARDS, CARDS_COPY } from '../../../config';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../utils';


const TaskDetail = props => {
  let params = useParams()
  const { taskId } = params;


  const { dataArray, setData } = props;
  const task = dataArray.find(task => task.id === taskId)

  const handleChange = (e) => {
    const updatedTasks = dataArray.map(task => {
      if (task.id === taskId) {
        return { ...task, status: e.target.value }
      }
      return task
    })
    setData(updatedTasks)
  }

 
  const continueDescription = (e) => {
    const updatedDescription = dataArray.map(task => {
      if(task.id === taskId) {
        return {...task, description: e.target.value}
      }
      return task
    })
    setData(updatedDescription)
  }



  return (
    <div className={s.taskDetail}>
      <Link className={s.closeLink} to='/'>
        <button className={s.closeButton}>
          <FontAwesomeIcon icon={faXmark} className={s.closeIcon} />
        </button>
      </Link>

      {task ? (
        <>
          <div>
            <div>
              <h2>{task.title}</h2>
              <p>Status: {CARDS_COPY[task.status]}</p>
            </div>
            <p className={s.createdAt}>Created at: {formatDate(task.created)}</p>
            <p className={s.description}>Description:</p>
            <textarea  onChange={continueDescription} id='descriptionText' className={s.descriptionFild}>{task.description || 'This task has no description'}</textarea>
            <p className={s.label}>Change status:</p>
            <select className={s.select} value={task.status} onChange={handleChange}>
              {Object.values(CARDS).map(list => {
                return (
                  <option className={s.option} key={list} value={list}>{CARDS[list]}</option>
                )
              })}
            </select>
          </div>
        </>
      ) : (
        <h2>Task wiht ID  <em>{taskId}</em> not found</h2>
      )}
    </div>
  );
}

export default TaskDetail;
