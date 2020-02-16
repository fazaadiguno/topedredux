import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Link
} from "@chakra-ui/core";
import { FiMenu } from "react-icons/fi";
import React from "react";

export default function DrawerBurger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // const { isLoggedIn } = Auth.useContainer()

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
            fontSize="24"
            flexDirection="column"
          >
            <Box ml={-2}>
              <Link onClick={onClose} href="/" pt={3} pr={20}>
                Pokemon List
              </Link>
              <br />
              <Link onClick={onClose} href="/mypokemon" pt={3} pr={20}>
                My Pokemon
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
