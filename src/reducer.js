import { Types } from './types';

export default function reducer(state, action) {
  const { type, payload } = action
  switch(type) {
    case Types.CREATE_TODO: 
    const addedTodos = [ ...state.todos, payload ];
    return { ...state, addedTodos }
  }
}