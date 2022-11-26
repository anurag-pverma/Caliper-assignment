import { Stack, Flex, Box, Text, Button } from "@chakra-ui/react";
import { Image, Badge, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { deleteProducts, getProducts } from "../Redux/action";
import { useSearchParams } from "react-router-dom";
import MyNavbar from "./Navbar";

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.reducer.products);
  console.log(productList);
  const [searchParams] = useSearchParams();

  const compareFunction = (a, b) => {
    let getSortBy = searchParams.get("sortBy");
    if (getSortBy === "asc") {
      return Number(a.price) - Number(b.price);
    } else if (getSortBy === "desc") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  };

  useEffect(() => {
    if (productList?.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, productList?.length]);

  const navigate = useNavigate();
  const deleteHandler = (id) => {
    dispatch(deleteProducts(id)).then(() => dispatch(getProducts()));
  };

  return (
    <>
      <MyNavbar />
      <div
        style={{ display: "block", margin: "auto", justifyContent: "center" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "30px",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          {productList?.length > 0 &&
            productList?.sort(compareFunction).map((e, ind) => (
              <div key={ind}>
                <div
                  className="app"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box w="300px" overflow="hidden" mt={10}>
                    <Image src={e.image} alt="img" boxSize="300px"></Image>
                    <Box p={5}>
                      <Stack align="center">
                        <Badge
                          variant="solid"
                          colorScheme="blue"
                          rounded="full"
                          px={5}
                          py={2}
                          fontSize="14px"
                        >
                          {e.name}
                        </Badge>

                        <Flex>
                          <Link  to={`/edit/${e.id}`}>
                            <Button  mx={"10px"}   onClick={() => navigate(`/edit/${e.id}`)}>
                              Edit Product
                            </Button>
                          </Link>
                          {
                            <Button 
                            mx={"10px"} onClick={() => deleteHandler(e.id)}>
                              {" "}
                              Delete Product
                            </Button>
                          }
                        </Flex>
                      </Stack>
                      <Stack align="center" mt={3}  fontSize="14px">
                        <Flex>
                          <Text mx={"10px"}>Type:-{e.type}</Text>
                          <Text mx={"10px"}>Votes:-{e.number_of_votes}</Text>
                        </Flex>
                        <Flex>
                          <Text mx={"10px"}>Price:-{e.price_starts_from}</Text>
                          <Text mx={"10px"}>Rating:-{e.rating}</Text>
                        </Flex>
                      </Stack>
                    </Box>
                  </Box>
                </div>
              </div>
            ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Product;
