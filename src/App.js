import React from 'react';
import './App.css';
import Todo from './components/Todo';



function App() {


  var state = {
    todos:[
        {
            title: 'Take out the trash',
            id: 1,
            completed: false
        },
        {
            title: 'Dinner with Wife',
            id: 2,
            completed: false
        },
        {
            title: 'Meting',
            id: 3,
            completed: false
        },
    ]
  };

  return (
    <div className="App">
      <h1>App</h1>
      <Todo todos={state.todos} />
    </div>
  );
}

export default App;
