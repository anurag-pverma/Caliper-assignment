import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProducts, getProducts } from "../Redux/action";
import {
  chakra,
  Button,
  useDisclosure,
  FormLabel,
  Input, 
  
} from "@chakra-ui/react";
import MyNavbar from "./Navbar";

const Editpage = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const navigate=useNavigate();

  const [name,setName] = useState('');
  const [rating,setRating] = useState('');
  const [number_of_votes,setNumber_of_votes] = useState('');
  const [type,setType] = useState('');
  const [price_starts_from,setPrice_starts_from] = useState('');
  const [image,setImage] = useState('');
  const [price,setPrice] = useState('');

  const handleUpdate = () =>{
   let params={
    name:name,
    type:type,
    rating:rating,
    number_of_votes:number_of_votes,
    price_starts_from: price_starts_from,
    image: image
   };

   dispatch(editProducts(id,params))
   .then((r)=>{
    dispatch(getProducts());
    navigate("/product");
   });
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
          value={name}
          onChange={(e)=>setName(e.target.value)} 
        />
   
   <FormLabel>ENTER PRODUCT TYPE</FormLabel>
        <Input 
          type="text"
          value={type}
           onChange={(e)=>setType(e.target.value)} 
        />
   
   <FormLabel>ENTER RATING  VALUE</FormLabel>
        <Input 
          type="number"
          value={rating}
           onChange={(e)=>setRating(e.target.value)} 
        />
    <FormLabel>ENTER PRODUCT CODE</FormLabel>
        <Input 
          type="number"
          value={number_of_votes}
           onChange={(e)=>setNumber_of_votes(e.target.value)} 
        />
     <FormLabel>ENTER PRICE</FormLabel>
        <Input 
          type="number"
          value={price_starts_from}
           onChange={(e)=>setPrice_starts_from(e.target.value)} 
        />
     
     <FormLabel>ENTER EMAIGE ADDRESS</FormLabel>
        <Input 
          type="text"
          value={image}
           onChange={(e)=>setImage(e.target.value)} 
        />
    
        <Button type="submit" onClick={handleUpdate}>ADD PRODUCTS</Button>
      
    </div>
  </div>
  </>
  );
};

export default Editpage;

