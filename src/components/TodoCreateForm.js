import React, {useState} from 'react';
import {connect} from 'react-redux';

function TodoCreateForm(props) {

  const [newTodo, setNewTodo] = useState('');

  const addButtonHandler = () => {
    props.addTodo(newTodo);
    setNewTodo('');
  };

  return (
      <div>
        <input  type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
        <button onClick={addButtonHandler}> Add New Todo</button>

      </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateForm);



