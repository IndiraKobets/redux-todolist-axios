import {v4 as uuidv4} from 'uuid';

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: 'Watch lecture',
      done: false,
    },
    {
      id: uuidv4(),
      title: 'Do homework',
      done: false,
    },
    {
      id: uuidv4(),
      title: 'Call Mom',
      done: false,
    }
  ]
};

const todo = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_TODO':
      return {
        ...state,
        todos: action.payload
      };

    // case 'TODO_ADD':
    //   return {
    //     ...state,
    //     todos: [...state.todos, { title: action.payload, done: false }]
    //   };

    case 'DELETE_TODO':
      const newTodos = state.todos.filter(el => el.id !== action.payload)
      return {
        ...state,
        todos: newTodos
      };

    case 'TODO_UPDATE':
      return {
        ...state,
        todos: [...state.todos.map(el => {
          if (el.id === action.payload) {
            el.title = action.title
          }
          return el
        })]
      };

    case 'TODO_DONE':
      return {
        ...state,
        todos: [...state.todos.map(el => {
          if (el.id === action.payload) {
            el.done = !el.done
          }
          return el
        })]
      };

    case 'TODO_UP':

      let upList = [...state.todos]
      const currentEl = upList[action.payload]
      const previousEl = upList[action.payload - 1]
      upList[action.payload] = previousEl;
      upList[action.payload - 1] = currentEl;

      return {
        ...state,
        todos: [...upList]
      };

    case 'TODO_DOWN':

      let downList = [...state.todos]
      const currentElementDown = downList[action.payload]
      const previousElementDown = downList[action.payload + 1]
      downList[action.payload] = previousElementDown;
      downList[action.payload + 1] = currentElementDown;

      return {
        ...state,
        todos: [...downList]
      };

    default:
      return state;
  }
};

export default todo;
