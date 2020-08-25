import axios from 'axios';

// export function deleteTodo (todoId) {
//     dispatch({type: 'DELETE_TODO', payload: todoId})
// }

export function getTodos() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo')
            .then(result => console.log(result) )
            .catch(err => console.log(err))
    }
}
