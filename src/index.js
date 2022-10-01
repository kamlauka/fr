import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const userq = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };


function TodoPage (props) {
  <div>
    <h1>Todo list</h1>
    {form}
    <CreateTask
      id = {testTask.id}
      descr = {testTask.decr}
    />

  </div>

}



const form = (
  <form>
  <textarea>You can write smth</textarea>
  <input type="submit" value="Create new task" />
  </form>
);

const testTask = {
  id: 1,
  description: 'ababagalamaga',
  checked: false,
}

function CreateTask (props) {
  return(
    CheckboxTask (props.id, props.descr)
  )
}


function CheckboxTask (props) {
  return (
    <div className='task'>
      <input type='checkbox' id={props.id}/>
      <label for={props.task.id}>{props.taskDescr}</label>
    </div>

  )
}

root.render(
  <TodoPage/>
);