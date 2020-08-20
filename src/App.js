import React from 'react';
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";
import {connect} from "react-redux";
import './App.css';

function App(props) {

    return (
        <div className="App">
            <TodoCreateForm/>
            {props.todos.map((el, i) =>
                <TodoList todo={el}
                          key={el.id}
                          index={i}
                          length={props.todos.length}/>)}


        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);



