import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { release } from "../actions";
import { Link } from "react-router-dom";
import { Flex, Box, Image, Text, Button } from "@chakra-ui/core";

function MyPokemon() {
  const collection = useSelector(state => state.collectionReducer);
  const dispatch = useDispatch();
  return (
    <>
      <Text fontSize={36} fontFamily="IBM Plex Sans" m={5}>
        My Pokemons
      </Text>
      <Flex flexWrap="wrap" flexDirection="column" w="100%">
        {collection &&
          collection.map((x, y) => (
            <>
              <Box
                d="flex"
                m={3}
                key={y}
                w="15em"
                rounded="md"
                border="1px dotted grey"
              >
                {" "}
                <Image
                  w="50%"
                  h="auto"
                  rounded="md"
                  src={x.sprites.front_default}
                />
                <Flex align="baseline" mt={2} flexDirection="column">
                  <Link to={`/pokemondetails/${x.name}`}>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="500"
                      fontFamily="IBM Plex Sans"
                      color="grey"
                    >
                      {x.name[0].toUpperCase()}
                      {x.name.substr(1)} <br /> &bull;{" "}
                      {x.nickname ? x.nickname : ""}
                    </Text>
                  </Link>
                  <Button
                    mt={2}
                    ml={1}
                    fontWeight="500"
                    fontFamily="IBM Plex Sans"
                    onClick={() => dispatch(release(x.name))}
                  >
                    Release
                  </Button>
                </Flex>
              </Box>
            </>
          ))}
      </Flex>
    </>
  );
}

export default MyPokemon;
