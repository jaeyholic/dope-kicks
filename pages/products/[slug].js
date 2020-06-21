import { useRouter } from "next/router";
import {
  Image,
  Box,
  Flex,
  Icon,
  Text,
  Progress,
  Heading,
} from "@chakra-ui/core";
import data from "../../data/data.json";
import { useState, useEffect } from "react";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState({});

  useEffect(() => {
    data.filter((item) => item.slug === slug).map((prod) => setProduct(prod));
  }, []);

  if (!product) {
    return <Box>Loading.....</Box>;
  }

  return (
    <Box pos="relative" w="100%">
      <Box w="45%" h="100vh" pos="fixed" left={0} right={0} overflow="hidden">
        <Image src="/images/nike/270-wrapper.jpg" w="100%" objectFit="cover" />

        <Flex pos="absolute" left={20} bottom={4} align="center">
          <Text color="white" fontFamily="bold" fontSize={{ md: "xl" }}>
            01 / 04
          </Text>
          <Box mr={4}>
            <Progress value={20} color="pink" size="sm" />
          </Box>
        </Flex>

        <Flex pos="absolute" right={0} bottom={0}>
          <Box
            as="button"
            bg="black"
            p={4}
            color="white"
            textAlign="center"
            fontFamily="bold"
          >
            <Icon name="arrow-back" /> Prev
          </Box>
          <Box
            as="button"
            bg="gray.700"
            p={4}
            color="white"
            textAlign="center"
            fontFamily="bold"
          >
            Next <Icon name="arrow-forward" />
          </Box>
        </Flex>
      </Box>

      <Box pos="fixed" right="50%" top="45%" transform="skewY(-10deg)">
        <Image src="/images/nike/vapourmax.png" w={40} />
      </Box>

      <Box w="55%" pos="absolute" right={0}>
        <Box p={48}>
          <Box>
            <Heading as="h1" fontFamily="black" fontSize={{ md: "8xl" }}>
              {product.brand}
            </Heading>
            <Text color="red.400" fontFamily="bold" fontSize={{ md: "3xl" }}>
              {product.name}
            </Text>
          </Box>

          <Box>
            <Image src={`/images/${product.product_image}`} w={90} my={10} />
          </Box>

          <Flex align="center" justify="space-between">
            <Image src={`images/${product.brand_logo}`} w={32} />

            <Box textAlign="center">
              <Text
                fontFamily="medium"
                fontSize={{ md: "lg" }}
                color="gray.500"
              >
                Designer
              </Text>
              <Text fontFamily="bold" fontSize={{ md: "2xl" }}>
                {product.designer}
              </Text>
            </Box>

            <Box>
              <Text fontFamily="black" fontSize={{ md: "4xl" }}>
                ${product.price}
              </Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          as="button"
          align="center"
          pos="fixed"
          bottom={0}
          right={0}
          bg="pink.50"
          p={6}
          rounded="md"
        >
          <Icon name="add" color="red.600" mr={2} />{" "}
          <Text fontFamily="bold">add to shopping bag</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Product;
