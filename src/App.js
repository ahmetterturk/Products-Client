import './App.css';
import { useState, useEffect, useReducer } from 'react';
import Products from './components/Products/Products';
// import { fetchProducts } from './actions/products';
import { fetchProducts } from './api/api';
import reducer from './globalContext/reducer';
import { initialState } from './globalContext/initalState';
import { AppContext } from './globalContext/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navigation';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';


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
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/products' element={<Products/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
