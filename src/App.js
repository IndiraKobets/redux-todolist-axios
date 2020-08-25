import React from 'react';
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";
import {connect} from "react-redux";
import './App.css';

function App(props) {

    return (
        <div className="App">
            <TodoCreateForm/>
            <TodoList/>


        </div>
    );
}



export default connect()(App);



