import axios from 'axios';

// export function deleteTodo (todoId) {
//     dispatch({type: 'DELETE_TODO', payload: todoId})
// }

export function getTodos() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo')
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: 'GET_TODO',
                    payload: result.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export function addTodo(newName) {
    return (dispatch) =>
        axios.post('http://localhost:5000/todo/', {name: newName})
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(err => console.log(err))
}
