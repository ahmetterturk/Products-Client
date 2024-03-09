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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the js-cookie library


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        dispatch({ type: 'GET_PRODUCTS', data: data });
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const currentUserCookie = Cookies.get('currentUser');
  //   if (currentUserCookie) {
  //     const currentUser = JSON.parse(currentUserCookie);
  //     console.log('currentUser object:', currentUser);
  //   } else {
  //     console.log('currentUser cookie not found');
  //   }
  // }, []);

  useEffect(() => {
    const currentUserCookie = Cookies.get('currentUser');
    if (currentUserCookie) {
      const currentUser = JSON.parse(currentUserCookie);
      console.log('currentUser object:', currentUser);
      // Dispatch an action to set the currentUser in the global context
      dispatch({ type: 'SET_CURRENT_USER', data: currentUser });
    } else {
      console.log('currentUser cookie not found');
    }
  }, [dispatch]); // Add dispatch to the dependency array



  return (
   <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/products' element={<Products/>} />
          <Route path='/' element={<Login/>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
