import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text, Badge } from "@chakra-ui/core";

function PokemonList() {
  const [list, setList] = useState([]);
  // const [offset, setOffSet] = useState(0);
  const [pokePerPage, setPokePerPage] = useState(50);
  const fetchList = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${pokePerPage}`
    );
    const listResponse = await data.json();
    setList(listResponse.results);
  };
  const calcImgurl = url => {
    console.log(url);

    let remainerLength = url.substr(34).length;
    return url.substr(34, remainerLength - 1);
  };

  const collection = useSelector(state => state.collectionReducer);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <Text fontSize={36} fontFamily="IBM Plex Sans" m={5}>
        Pokemon List
      </Text>
      <Flex flexWrap="wrap" flexDirection="row" w="100%">
        {list &&
          list.map(x => (
            <Box
              d="flex"
              flex={["1 0 23%", "1 0 23%", "1 0 14%", "1 0 14%"]}
              m={5}
              key={x.name}
              w="5em"
              h="10em"
              rounded="md"
              border="1px dotted grey"
            >
              {" "}
              <Link to={`/pokemondetails/${x.name}`}>
                <Image
                  h={["65%", "65%", "65%", "80%"]}
                  rounded="md"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${calcImgurl(
                    x.url
                  )}.png`}
                />
                <Flex align="baseline" mt={2}>
                  <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize={["xs", "xs", "xs", "sm"]}
                    fontWeight="500"
                    fontFamily="IBM Plex Sans"
                    color="grey"
                  >
                    {x.name[0].toUpperCase()}
                    {x.name.substr(1)} &bull; Owned{" "}
                    {collection &&
                      collection.filter(b => b.name === x.name).length}
                  </Text>
                </Flex>
              </Link>
            </Box>
          ))}
      </Flex>
    </>
  );
}

export default PokemonList;
