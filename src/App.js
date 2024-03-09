import './App.css';
import { useState, useEffect, useReducer } from 'react';
import Products from './components/Products/Products';
// import { fetchProducts } from './actions/products';
import { fetchProducts } from './api/api';
import reducer from './globalContext/reducer';
import { initialState } from './globalContext/initalState';
import { AppContext } from './globalContext/context';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_ISSUESISLOADING', data: true });
    fetchProducts()
      .then((data) => {
        dispatch({ type: 'GET_PRODUCTS', data: data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
   <AppContext.Provider value={{ state, dispatch }}>
    <div className="App">
      Hello
      <Products />
    </div>
    </AppContext.Provider>
  );
}

export default App;
