import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../actions";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Text,
  Image,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex
} from "@chakra-ui/core";

function PokemonDetails({ match }) {
  useEffect(() => {
    fetchDetail();
  }, []);

  const [detail, setDetail] = useState({});
  const [nickname, setNickname] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const fetchDetail = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
    )
      .then(response => response.json())
      .then(data => {
        setDetail(data);
      });
    console.log(detail);
  };

  const collection = useSelector(state => state.collection);
  const dispatch = useDispatch();

  return (
    <Flex fontFamily="IBM Plex Sans" flexDirection="column" alignItems="center">
      {detail && detail.sprites && (
        <Image w="20em" src={detail.sprites.front_default} />
      )}
      <Text fontFamily="IBM Plex Sans">
        {detail.name && detail.name[0].toUpperCase()}
        {detail.name && detail.name.substr(1)}
      </Text>
      <br />
      <Button
        fontWeight="400"
        onClick={() => {
          let random_boolean = Math.random() >= 0.5;
          if (random_boolean) {
            onOpen();
          } else {
            alert("Oh no!, the pokemon escaped!");
          }
        }}
      >
        Catch
      </Button>
      <br />

      <Box>
        <Box>Height: {Math.round(detail.height * 10) / 100}m</Box>
        <Box>
          Weight: {Math.round(detail.weight * 10) / 100}
          kg
        </Box>
        <Box>
          Abilities:{" "}
          {detail.abilities &&
            detail.abilities.map(ability => ability.ability.name).join(", ")}
        </Box>
        <Box>
          Types:{" "}
          {detail.types && detail.types.map(type => type.type.name).join(", ")}
        </Box>
        <br />
        <AccordionItem>
          <AccordionHeader _expanded={{ bg: "black", color: "white" }}>
            <Box flex="1" textAlign="left">
              Moves
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel>
            {detail.moves &&
              detail.moves.map(movez => (
                <>
                  <Text>{movez.move.name}</Text>
                  <br />
                </>
              ))}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader _expanded={{ bg: "black", color: "white" }}>
            <Box flex="1" textAlign="left">
              Images
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel flexWrap="wrap" flexDirection="row">
            {detail.sprites &&
              Object.values(detail.sprites).map(x =>
                x !== null ? (
                  <Flex alignItems="center" flex="1 0 21%">
                    <Image key={x} src={x} />
                  </Flex>
                ) : null
              )}
          </AccordionPanel>
        </AccordionItem>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Hurray, you succesfully caught a {detail.name}! You can give it a
            nickname if you want.
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Nickname</FormLabel>
              <Input
                ref={initialRef}
                placeholder={detail.name}
                onChange={e => setNickname(e.target.value)}
              />
            </FormControl>{" "}
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                if (nickname.length > 0) {
                  let preNickname = detail;
                  preNickname["nickname"] = nickname;
                  dispatch(add(preNickname));
                } else {
                  dispatch(add(detail));
                }
                onClose();
              }}
              variantColor="green"
            >
              Catch
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default PokemonDetails;
