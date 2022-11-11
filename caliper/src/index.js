import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Components/Home';
import Training from './Components/Training';
import OurServices from './Components/OurServices';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import About from './Components/About';
import E_Store from './Components/E_Store';
// import { Provider } from 'react-redux';
// import { store } from './Redux/store';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/home",
    element: <Home/>,
   
  },
  {
    path: "/about",
    element: <About/>,
   
  },
  {
    path: "/blog",
    element: <Blog/>,
   
  },
  {
    path: "/contact",
    element: <Contact/>,
   
  },
  {
    path: "/product",
    element: <Product/>,
   
  },
  {
    path: "/services",
    element: <OurServices/>,
   
  },
  {
    path: "/training",
    element: <Training/>,
   
  },
  {
    path: "/e-store",
    element: <E_Store/>,
   
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <Provider store={store}> */}
    

    <RouterProvider router={router} />
  

    {/* </Provider> */}

  </React.StrictMode>
);


