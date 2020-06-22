import ReachLink from "next/link";
import { Box, Heading, Flex, Text, Image, Link } from "@chakra-ui/core";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animation";

const MotionBox = motion.custom(Box);
const MotionImage = motion.custom(Image);

const ProductCard = ({ brand, name, img, designer, price, link }) => {
  return (
    <ReachLink passHref href="/products/[id]" as={`/products/${link}`}>
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
        <MotionBox variants={fadeInUp}>
          <Box>
            <Heading as="h4" fontFamily="black" fontSize={{ md: "2xl" }}>
              {brand}
            </Heading>
            <Text as="span" d="block" color="gray.600">
              {name}
            </Text>
          </Box>
          <Box my={14}>
            <MotionImage
              src={img}
              w={64}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
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
        </MotionBox>
      </Link>
    </ReachLink>
  );
};

export default ProductCard;
