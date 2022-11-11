import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiFillHome, AiOutlineInbox } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyNavbar from "./Navbar";
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

export default function OurServices() {
  const { token } = useSelector((state) => state.admin);
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <MyNavbar />
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              {
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                    <BsCart2 />
                  </Button>
                </>
              }

              {
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/orders")}
                >
                  Orders <CiDeliveryTruck />
                </Button>
              }
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
