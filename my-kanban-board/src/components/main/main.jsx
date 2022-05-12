import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from './boadr/board';
import s from './main.module.css';
import TaskDetail from './task-detail/task-detail';




const Main = props => {
  return (
    <main className={s.main}>
      <Routes>
          <Route exact path={'/'} element={<Board {...props}/>}/>
          <Route path={'/task-detail'} element={<TaskDetail {...props}/>}/>
      </Routes>
    </main>
  );
}

export default Main;
