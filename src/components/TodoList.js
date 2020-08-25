import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TodoListItem from "./TodoListItem";
import {getTodos} from "../redux/action";

function TodoList(props) {

    useEffect(() => {
        console.log('Hello from useffect')
        props.getList()
    }, []);

    return (
        <div>
            {props.todos.map((el, i) =>
                <TodoListItem todo={el}
                              key={el.id}
                              index={i}
                              length={props.todos.length}/>)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
