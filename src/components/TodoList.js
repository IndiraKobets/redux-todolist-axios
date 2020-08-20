import React, {useState} from 'react';
import {connect} from 'react-redux';


function TodoList(props) {

  const {todo, index, length} = props;

  const [editTodo, setEditTodo] = useState(todo.title);
  const [isEditMode, setIsEditMode] = useState(false);


  const updateTodo = () => {
    props.updateTodo(todo.id, editTodo);
    setIsEditMode(false);
  };
  const styleDone = todo.done ? {textDecoration: 'line-through', listStyle: 'none' } : {textDecoration: 'none', listStyle: 'none' }

  return (
      <div>
        <ul>

          <li style={styleDone}>

        {isEditMode ? (
            <>
              <input type='text' value={editTodo} onChange={e => setEditTodo(e.target.value)}/>
              <button onClick={updateTodo}>Save</button>
            </>
        ) : (
            <>
              {todo.title}
              <button onClick={() => props.todoDone(todo.id)}>{todo.done ? 'Undone' : 'Done'}</button>
              <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => setIsEditMode(true)}>Edit</button>
              <button onClick={() => props.upTodo(index)} disabled={index === 0}>↑</button>
              <button onClick={() => props.downTodo(index)} disabled={index === length - 1 }>↓</button>

            </>)}

          </li>
        </ul>
      </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
  deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
  updateTodo: (todoId, title) => dispatch({type: 'TODO_UPDATE', payload: todoId, title: title}),
  todoDone: (todoId) => dispatch({type: 'TODO_DONE', payload: todoId}),
  upTodo: (index) => dispatch({ type: 'TODO_UP', payload: index}),
  downTodo: (index) => dispatch({ type: 'TODO_DOWN', payload: index})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
