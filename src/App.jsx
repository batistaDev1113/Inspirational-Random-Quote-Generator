import { useState } from "react";
import "./App.css";
import { CATEGORY_OPTIONS } from "./utils/Category";
import { Heading, Select } from "@chakra-ui/react";
import { Stack, useMediaQuery } from "@chakra-ui/react";
import Quote from "./components/Quote";
import Loader from "./components/Loader";
import { useFetchData } from "./customHooks/useFetchData";

function App() {
  const [input, setInput] = useState("");
  const { data, loading, error } = useFetchData(input);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  if (loading) {
    return <Loader />;
  }

  return (
    <Stack
      justify={"flex-start"}
      height={"100vh"}
      alignItems={"center"}
      direction={"column"}
      spacing={10}
      background={
        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);"
      }
      paddingTop={"5%"}
    >
      <Heading size={isLargerThan1024 ? "2xl" : "md"}>
        Select a quote category below
      </Heading>
      <Select
        placeholder="Choose a category"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size={"md"}
        width={isLargerThan768 ? "50%" : "80%"}
        borderColor={"000"}
      >
        {CATEGORY_OPTIONS.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </Select>
      {error && (
        <Heading size={"md"} color={"red"}>
          Error: {error}
        </Heading>
      )}
      {data && <Quote quote={data[0]?.quote} author={data[0]?.author} />}
    </Stack>
  );
}

export default App;
