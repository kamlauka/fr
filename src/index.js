import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));



const testTask = {
  id: 1,
  description: 'ababagalamaga',
  checked: false,

  Edit() {},
  Delete() {},
}

function TodoPage(props) {
  const [taskName, setName] = useState('');

  const myForm = (
    <form onSubmit={handleSubmit}>
      <textarea value={taskName} onChange={handleChange}></textarea>
      <input type="submit" value="Create new task" onClick={CreateTask} />
    </form>
  );

  function handleSubmit(e) {
    e.preventDefault();
    alert('Hello, world!');
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Todo list</h1>
      {myForm}
      <AddCheckbox taskId='1' taskDescr='eat and sleep' taskCompleted='false' />
    </div>
  )
}

function CreateTask(props) {
  if (true) {
    const newTask = <AddCheckbox taskId={testTask.id} taskDescr={testTask.description} taskCompleted={testTask.checked} />
    return ( //value textarea
      console.log(newTask),
      root.render(
        { newTask }
      )
    )
  }
}


function AddCheckbox(props) {
  return (
    <div className='task'>
      <input type='checkbox' id={props.taskId} defaultChecked={props.taskCompleted} />
      <label htmlFor={props.taskId}>{props.taskDescr}</label>
      <input type='submit' value='Edit' />
      <input type='submit' value='Delete' />
    </div>

  )
}

root.render(
  <TodoPage />
);