import { Box, Heading, useMediaQuery } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Quote({ quote, author }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Box
        p={5}
        shadow="lg"
        borderWidth="1px"
        background={"#fff"}
        width={isLargerThan768 ? "60%" : "80%"}
      >
        <Heading size="md">&ldquo;{quote}&rdquo;</Heading>
        <Heading size="sm" marginTop={"2%"} marginBottom={"2%"}>
          Author: {author}
        </Heading>
      </Box>
    </>
  );
}

export default Quote;
