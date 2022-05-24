import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login';
import Navbar from './routes/Navbar';
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route exact path='/tasks' element={
          <>
            <Navbar />
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
