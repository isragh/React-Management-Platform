import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login';
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route exact path='/tasks' element={
          <>
            <TaskForm />
            <TaskCounter />
            <TaskList />
          </>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
