import React, { useContext, useReducer } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import todoReducer from './reducer';
import TodoContext from './context';

const App = () => {

  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <MainContainer />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
