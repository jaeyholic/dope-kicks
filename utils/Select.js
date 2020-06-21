import React from "react";
import { Select } from "@chakra-ui/core";

const FormSelect = ({ bg, option, placeholder, mt }) => {
  return (
    <Select
      bg={bg}
      mt={mt}
      borderWidth={0}
      ml={-4}
      color="gray.500"
      _hover={{ borderWidth: 0 }}
      _focus={{ borderWidth: 0 }}
      placeholder={placeholder}
    >
      <option>{option}</option>
    </Select>
  );
};

export default FormSelect;
