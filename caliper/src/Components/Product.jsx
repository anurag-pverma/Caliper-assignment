import { Stack, Flex, Box, Text, Button } from "@chakra-ui/react";
import { Image, Badge, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import {  getProducts } from "../Redux/action";
import { useSearchParams } from "react-router-dom";
import MyNavbar from "./Navbar";

const Product = () => {
  const dispatch=useDispatch();
  const productList=useSelector((store)=>store.reducer.products);
  console.log(productList);
  // const [searchParams]=useSearchParams();

  // const compareFunction =(a,b)=>{
  //   let getSortBy =searchParams.get("sortBy")
  //   if(getSortBy==='asc'){
  //     return Number(a.price)-Number(b.price);
  //   }
  //   else if(getSortBy==="desc"){
  //     return Number(b.price)-Number(a.price);
  //   }
  //   return 0;
  // };

  useEffect(()=>{
    if(productList?.length===0){
      dispatch(getProducts());
    }
  },[dispatch,productList?.length]);


  // const handleCart = (e) => {
  //   let object = {
  //     ...e,
  //     qty: 1,
  //   };
  //   dispatch(addToCart(object));
  // };
  
  return (
    <>
      <MyNavbar />
      <div
        style={{ display: "block", margin: "auto", justifyContent: "center" }}
      >
      
      


      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', margin: "auto", justifyContent: 'space-around' }}>
        {
          productList.map((e, ind) => <div key={ind} >
            <div className="app" style={{ display: 'flex', justifyContent: 'center' }}>
              <Box w="300px" rounded="20px"
                overflow="hidden" mt={10}>
                <Image src={e.image} alt="img" boxSize="300px">
                </Image>
                <Box p={5}>
                  <Stack align="center">
                    <Badge variant="solid" colorScheme="blue"
                      rounded="full" px={5} py={2} fontSize='16px'>
                      {e.name}
                    </Badge>
                  </Stack>
                  <Stack align="center" mt={3}>
                    <Text>Type:-{e.type}</Text>
                    <Text>Votes:-{e.number_of_votes}</Text>
                    <Text>Rating:-{e.rating}</Text>
                    <Text>Price:-{e.price_starts_from}</Text>
                  
                  </Stack>
                </Box>
              </Box>
            </div>
          </div>
          )
        }
      </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Product;







