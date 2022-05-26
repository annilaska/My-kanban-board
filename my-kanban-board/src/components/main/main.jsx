import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards/Card';
import s from './main.module.css';
import TaskDetail from './task-detail/task-detail';



const Main = props => {
  return (
    <main className={s.main}>
      <Routes>
          <Route exact path={'/'} element={<Cards {...props}/>}/>
          <Route path={'/task-detail/:taskId'} element={<TaskDetail {...props}/>}/>
      </Routes>
    </main>
  );
}

export default Main;
