import React from 'react';
import PropTypes from 'prop-types';





export default function TodoItem(props) {
    return (

        <div style = { getStyle(props) }>
            <p> <input type="checkbox" id=" " onChange = {(e) => markComplete(props, props.todo.id)} />  {props.todo.title}   </p>
        </div>
    )
}

function getStyle(props){
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: props.todo.completed ? 'line-through': 'none'
    }
}

function markComplete(props, id){

 
    if(props.todo.id === id ){
        props.todo.completed = !props.todo.completed;
    }

    console.log(props);
    return props;


}
    
    



// Prop Types 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

