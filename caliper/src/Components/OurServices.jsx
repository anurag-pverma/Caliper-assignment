import React from "react";

import {
  chakra,

  Button,
  useDisclosure,

  FormLabel,
  Input, 
  
} from "@chakra-ui/react";
import { AiOutlineMenu, AiFillHome, AiOutlineInbox } from "react-icons/ai";


import MyNavbar from "./Navbar";


import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getProducts } from "../Redux/action";

const initialState={
  title:"",
  category:"",
  imageSrc:"",
  price:0
}


const reducerFunction =(state,action)=>{
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "rating":
      return { ...state, rating: action.payload };
    case "number_of_votes":
      return { ...state, number_of_votes: action.payload };
    case "price_starts_from":
      return { ...state, price_starts_from: action.payload };
    case "image":
      return { ...state, image: action.payload };

    default:
      return state;
  }
};

const  OurServices =()=>{

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [productState,setProductState]=useReducer(
    reducerFunction,
    initialState
  );

  const addHandler = ()=>{
    if(JSON.stringify(productState)!==JSON.stringify(initialState)){
      dispatch(addProducts(productState))
      .then(()=>dispatch(getProducts()))
      .then(()=>{
        navigate("/")
      });
    }
  };


  return (
        <>
      <MyNavbar />
      <div>
      <h3>Add Product</h3>
      <div
        
      >
        
        <FormLabel>PRODUCTS NAME</FormLabel>
          <Input 
            type="text"
            value={productState.name}
            onChange={(e) =>
              setProductState({ type: "name", payload: e.target.value })
            }
          />
     
     <FormLabel>ENTER PRODUCT TYPE</FormLabel>
          <Input 
            type="text"
            value={productState.type}
            onChange={(e) =>
              setProductState({ type: "type", payload: e.target.value })
            }
          />
     
     <FormLabel>ENTER RATING  VALUE</FormLabel>
          <Input 
            type="number"
            value={productState.rating}
            onChange={(e) =>
              setProductState({ type: "rating", payload: e.target.value })
            }
          />
      <FormLabel>ENTER PRODUCT CODE</FormLabel>
          <Input 
            type="number"
            value={productState.number_of_votes}
            onChange={(e) =>
              setProductState({ type: "number_of_votes", payload: e.target.value })
            }
          />
       <FormLabel>ENTER PRICE</FormLabel>
          <Input 
            type="number"
            value={productState.price_starts_from}
            onChange={(e) =>
              setProductState({ type: "price_starts_from", payload: e.target.value })
            }
          />
       
       <FormLabel>ENTER EMAIGE ADDRESS</FormLabel>
          <Input 
            type="text"
            value={productState.image}
            onChange={(e) =>
              setProductState({ type: "image", payload: e.target.value })
            }
          />
      
          <Button type="submit" onClick={addHandler}>ADD PRODUCTS</Button>
        
      </div>
    </div>
    </>
  );
}

export default OurServices;