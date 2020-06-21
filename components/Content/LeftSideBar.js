import React from "react";
import { Box, Heading } from "@chakra-ui/core";

//components
import FormSelect from "../../utils/Select";

const LeftSideBar = () => {
  return (
    <Box>
      <Box py={10} px={16}>
        <Heading
          as="h5"
          fontFamily="bold"
          textTransform="uppercase"
          fontSize={{ md: "xl" }}
        >
          Sort
        </Heading>

        <FormSelect placeholder="What's New" />
      </Box>

      <Box bg="pink.50" p={16}>
        <Heading
          as="h5"
          fontFamily="bold"
          textTransform="uppercase"
          fontSize={{ md: "xl" }}
        >
          Filter
        </Heading>
        <Box mt={6}>
          <FormSelect bg="white" placeholder="Shoe Type" />

          <FormSelect bg="white" placeholder="Style" mt={4} />

          <FormSelect bg="white" placeholder="Size" mt={4} />

          <FormSelect bg="white" placeholder="Brand" mt={4} />

          <FormSelect bg="white" placeholder="Price range" mt={4} />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
