import React from "react";
import { Box, Input } from "@chakra-ui/core";

const Search = () => {
  return (
    <form>
      <Input
        placeholder="search..."
        fontFamily="black"
        fontWeight="bold"
        fontSize="7xl"
        h={40}
        w={125}
        borderWidth={0}
        _hover={{ borderWidth: 0 }}
        _focus={{ borderWidth: 0 }}
      />
    </form>
  );
};

export default Search;
