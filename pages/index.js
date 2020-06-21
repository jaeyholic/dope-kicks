import Head from "next/head";
import { Box, Flex, Grid } from "@chakra-ui/core";

//components
import Search from "../components/Search";
import LeftSideBar from "../components/Content/LeftSideBar";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(data);

  console.log(products);

  return (
    <Box fontFamily="body" pos="relative">
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

          <Box w="70%" pos="absolute" right={0}>
            <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  brand={item.brand}
                  name={item.name}
                  link={item.slug}
                  img={`/images/${item.product_image}`}
                  price={item.price}
                />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
