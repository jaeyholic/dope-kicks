import { useRouter } from "next/router";
import {
  Image,
  Box,
  Flex,
  Icon,
  Text,
  Progress,
  Heading,
  Link,
} from "@chakra-ui/core";
import useSWR from "swr";
import { useState } from "react";
import { motion } from "framer-motion";
import ReachLink from "next/link";
import { fadeInUp, staggerID } from "../../utils/animation";

const MotionImage = motion.custom(Image);
const MotionBox = motion.custom(Box);
const MotionHeading = motion.custom(Heading);
const MotionText = motion.custom(Text);
const MotionFlex = motion.custom(Flex);

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const [currentSection, setCurrentSection] = useState(0);

  const API_URL = `https://my-json-server.typicode.com/jaeyholic/dope-kicks/kicks/${id}`;

  const fetcher = async (url) => await fetch(url).then((res) => res.json());

  const { data, error } = useSWR(API_URL, fetcher);

  const handleClick = (direction) => {
    setCurrentSection((prevState) => {
      return (data.images.length + prevState + direction) % data.images.length;
    });
  };

  if (!data) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Alert>Error Occured</Alert>;
  }

  return (
    <MotionBox
      pos="relative"
      w="100%"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <MotionBox
        w="45%"
        h="100vh"
        pos="fixed"
        left={0}
        right={0}
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <MotionImage
          src={`/images/${data.images[currentSection].img}`}
          w="100%"
          objectFit="cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <Flex pos="absolute" left={20} bottom={4} align="center">
          <Text color="white" fontFamily="bold" fontSize={{ md: "xl" }}>
            0{currentSection + 1} / 0{data.images.length}
          </Text>
          <Box mr={4}>
            <Progress value={20} color="pink" size="sm" />
          </Box>
        </Flex>

        <Flex pos="absolute" right={0} bottom={0}>
          <Box
            as="button"
            bg="black"
            p={8}
            color="white"
            textAlign="center"
            fontFamily="bold"
            onClick={() => handleClick(-1)}
          >
            <Icon name="arrow-back" /> Prev
          </Box>
          <Box
            as="button"
            bg="gray.700"
            p={8}
            color="white"
            textAlign="center"
            fontFamily="bold"
            onClick={() => handleClick(1)}
          >
            Next <Icon name="arrow-forward" />
          </Box>
        </Flex>
      </MotionBox>

      <Box pos="fixed" right="50%" top="45%" transform="skewY(-10deg)">
        <Image src="/images/nike/vapourmax.png" w={40} />
      </Box>

      <MotionBox w="55%" pos="fixed" right={0} variants={staggerID}>
        <ReachLink href="/" passHref>
          <Link
            _hover={{ textDecor: "none", color: "gray.900" }}
            fontFamily="bold"
          >
            <MotionBox px={48} mt={20} variants={fadeInUp}>
              <Icon name="arrow-back" /> Back to products
            </MotionBox>
          </Link>
        </ReachLink>
        <Box px={48} py={24}>
          <Box>
            <MotionHeading
              as="h1"
              fontFamily="black"
              fontSize={{ md: "8xl" }}
              variants={fadeInUp}
            >
              {data.brand}
            </MotionHeading>
            <MotionText
              color="red.400"
              fontFamily="bold"
              fontSize={{ md: "3xl" }}
              variants={fadeInUp}
            >
              {data.name}
            </MotionText>
          </Box>

          <Box>
            <MotionImage
              src={`/images/${data.product_image}`}
              w={90}
              my={14}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </Box>

          <Flex align="center" justify="space-between">
            <Image src={`/images/${data.brand_logo}`} w={32} />

            <Box textAlign="center">
              <MotionText
                fontFamily="medium"
                fontSize={{ md: "lg" }}
                color="gray.500"
                variants={fadeInUp}
              >
                Designer
              </MotionText>
              <MotionText
                fontFamily="bold"
                fontSize={{ md: "2xl" }}
                variants={fadeInUp}
              >
                {data.designer}
              </MotionText>
            </Box>

            <Box>
              <MotionText
                fontFamily="black"
                fontSize={{ md: "4xl" }}
                variants={fadeInUp}
              >
                ${data.price}
              </MotionText>
            </Box>
          </Flex>
        </Box>

        <MotionFlex
          as="button"
          align="center"
          pos="fixed"
          bottom={0}
          right={0}
          bg="pink.50"
          p={8}
          rounded="md"
          variants={fadeInUp}
        >
          <Icon name="add" color="red.600" mr={2} />{" "}
          <Text fontFamily="bold">add to shopping bag</Text>
        </MotionFlex>
      </MotionBox>
    </MotionBox>
  );
};

export default Product;
