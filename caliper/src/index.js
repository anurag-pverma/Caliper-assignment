import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

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
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
import Editpage from './Components/Editpage';
import AddProduct from './Components/AddProduct';



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
  {
    path: "/add_product",
    element: <AddProduct/>,
   
  },
  {
    path: "/edit/:id",
    element: <Editpage/>,
   
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Provider store={store}>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
    </Provider>

  </React.StrictMode>
);


