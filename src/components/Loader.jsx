import React from "react";
import { Image, Box, Stack, Heading } from "@chakra-ui/react";
import LoaderIcon from "../assets/Gear-0.9s-200px.gif";

function Loader() {
  return (
    <Stack
      width={"100%"}
      backgroundColor={"transparent"}
      height={"100vh"}
      alignItems={"center"}
    >
      <Box boxSize="sm" margin={"auto"}>
        <Image src={LoaderIcon} alt="Loader icon spinning" margin={"auto"} />
        <Heading size={"md"} textAlign={"center"} margin={10}>
          Loading...
        </Heading>
      </Box>
    </Stack>
  );
}

export default Loader;
