import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/lf30_editor_u5tNDC.json";
import { Flex, Box, Image, Text } from "@chakra-ui/core";
import DrawerBurger from "./DrawerBurger";

function Nav() {
  // const navStyle = {
  //   color: "white",
  //   textDecoration: "none"
  // };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Flex
      bg="black"
      height="3em"
      w="100%"
      p={2}
      color="white"
      borderBottom="0.5px solid black"
      flexDirection="row"
    >
      <Flex flex="1" ml={[1, 1, 5, 5]}>
        {" "}
        <Lottie options={defaultOptions} width="5em" />{" "}
      </Flex>
      <Text
        pt={[2, 2, 1, 1]}
        fontStyle="italic"
        fontSize={[12, 12, 14, 14]}
        fontFamily="IBM Plex Sans"
      >
        Gotta catch 'em all
      </Text>
      <Flex
        display={["none", "none", "none", "flex"]}
        pr={6}
        flexDirection="row"
        alignSelf="flex-end"
        // border="1px solid red"
        justifyContent="flex-end"
        flex="5"
        mb={1}
        fontFamily="IBM Plex Sans"
        fontWeight={400}
      >
        <Link to="/" pt={3} mr={20}>
          Pokemon List{"  "}
        </Link>
        <Text style={{ cursor: "default" }} color="black">
          Poke
        </Text>
        <Link to="/mypokemon" pt={3} ml="5em">
          {"  "}
          My Pokemons
        </Link>
      </Flex>
      <Flex display={["flex", "flex", "flex", "none"]}>
        <DrawerBurger />
      </Flex>
    </Flex>
    // <nav>
    //   <Lottie options={defaultOptions} width={80} />
    //   <h3>Faza's Pokedex</h3>
    //   <ul className="nav-links">
    //     <Link style={navStyle} to="/">
    //       {" "}
    //       <li>Pokemon List</li>
    //     </Link>
    //     <Link style={navStyle} to="/mypokemon">
    //       {" "}
    //       <li>My Pokemons</li>{" "}
    //     </Link>
    //   </ul>
    // </nav>
  );
}

export default Nav;
