import ReachLink from "next/link";
import { Box, Heading, Flex, Text, Image, Link } from "@chakra-ui/core";

const ProductCard = ({ brand, name, img, designer, price, link }) => {
  return (
    <ReachLink passHref href={`/products/${link}`}>
      <Link
        _hover={{ textDecor: "none" }}
        _focus={{ textDecor: "none" }}
        px={8}
        py={16}
        borderRightWidth={1}
        borderRightColor="gray.100"
        w="100%"
        h={85}
      >
        <Box>
          <Heading as="h4" fontFamily="black" fontSize={{ md: "2xl" }}>
            {brand}
          </Heading>
          <Text as="span" d="block" color="gray.600">
            {name}
          </Text>
        </Box>
        <Box my={14}>
          <Image src={img} w={64} />
        </Box>
        <Flex align="center" justify="space-between">
          <Box>
            <Text as="span" color="gray.400">
              Designer
            </Text>
            <Text fontFamily="bold">{designer || "Unknown"}</Text>
          </Box>

          <Box>
            <Text fontFamily="black" fontSize={{ md: "2xl" }}>
              ${price}
            </Text>
          </Box>
        </Flex>
      </Link>
    </ReachLink>
  );
};

export default ProductCard;
