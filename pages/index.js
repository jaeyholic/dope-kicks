import Head from "next/head";
import { Box, Flex, Grid, Alert } from "@chakra-ui/core";
import useSWR from "swr";
import { motion } from "framer-motion";
import { stagger } from "../utils/animation";

//components
import Search from "../components/Search";
import LeftSideBar from "../components/Content/LeftSideBar";
import ProductCard from "../components/ProductCard";

const MotionBox = motion.custom(Box);

export default function Home() {
  const API_URL =
    "https://my-json-server.typicode.com/jaeyholic/dope-kicks/kicks";

  const fetcher = async (url) => await fetch(url).then((res) => res.json());

  const { data, error } = useSWR(API_URL, fetcher);

  if (!data) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Alert>Error Occured</Alert>;
  }

  console.log(data);

  return (
    <MotionBox
      fontFamily="body"
      pos="relative"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Kicks Store Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        pt={32}
        w="100%"
        pb={10}
        pos="fixed"
        bg="white"
        zIndex={20}
        left={0}
        right={0}
        align="center"
        justify="center"
      >
        <Search />
      </Flex>

      <Box pt={70} borderTopWidth={1} borderTopColor="gray.100">
        <Flex pos="relative" w="100%">
          <Box w="30%" pos="fixed" left={0}>
            <LeftSideBar />
          </Box>

          <MotionBox w="70%" pos="absolute" right={0} variants={stagger}>
            <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
              {data.map((item) => (
                <ProductCard
                  key={item.id}
                  brand={item.brand}
                  name={item.name}
                  link={item.id}
                  img={`/images/${item.product_image}`}
                  price={item.price}
                />
              ))}
            </Grid>
          </MotionBox>
        </Flex>
      </Box>
    </MotionBox>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/jaeyholic/dope-kicks/kicks"
  );
  const data = await res.json();
  return { products: data };
};
