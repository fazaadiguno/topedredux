import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { release } from "../actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Flex, Box, Link, Image, Text, Button } from "@chakra-ui/core";

function MyPokemon() {
  const collection = useSelector(state => state.collectionReducer);
  const dispatch = useDispatch();
  return (
    <Flex flexWrap="wrap" flexDirection="row" w="100%">
      {collection &&
        collection.map((x, y) => (
          <>
            {/* <Link key={y} to={`/pokemondetails/${x.name}`}>
              <Image src={x.sprites.front_default} />{" "}
              <Text>
                {x.name} - {x.nickname}
              </Text>
            </Link>
            <Button onClick={() => dispatch(release(x.name))}>Release</Button> */}
            <Box
              d="flex"
              flex="1 0 21%"
              m={5}
              key={y}
              w="15em"
              rounded="md"
              border="1px dotted grey"
            >
              {" "}
              <Link to={`/pokemondetails/${x.name}`}>
                <Image w="50%" rounded="md" src={x.sprites.front_default} />
                <Flex align="baseline" mt={2}>
                  <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="500"
                    fontFamily="IBM Plex Sans"
                    color="grey"
                  >
                    {x.name[0].toUpperCase()}
                    {x.name.substr(1)} &bull; {x.nickname ? x.nickname : ""}
                  </Text>
                  <br />
                </Flex>
              </Link>
              <Button
                // alignSelf="flex-end"
                mt={5}
                fontWeight="500"
                fontFamily="IBM Plex Sans"
                onClick={() => dispatch(release(x.name))}
              >
                Release
              </Button>
            </Box>
          </>
        ))}
    </Flex>
  );
}

export default MyPokemon;
