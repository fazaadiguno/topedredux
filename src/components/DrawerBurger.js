import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Text
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import React from "react";

export default function DrawerBurger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button mt="-4px" bg="black" ref={btnRef} onClick={onOpen}>
        <Box as={FiMenu} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Link href="/" exact></Link>
          </DrawerHeader>
          <DrawerBody
            fontFamily="IBM Plex Sans"
            fontSize={28}
            flexDirection="column"
          >
            <Box ml={-2}>
              <Link to="/">
                <Text fontFamily="IBM Plex Sans" my={4}>
                  Pokemon List
                </Text>
              </Link>
              <Link to="/mypokemon">
                <Text fontFamily="IBM Plex Sans">My Pokemon</Text>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
