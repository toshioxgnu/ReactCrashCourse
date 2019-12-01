import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';



export default function Todo(props){
    
  return(
    props.todos.map((todo) => (
        <TodoItem  key={todo.id} todo = {todo} />   
    )
  )
  );
}


// Prop Types 
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}


