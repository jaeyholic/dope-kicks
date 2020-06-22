import { useRouter } from "next/router";
import ReachLink from "next/link";
import { Heading, Flex, Text, Icon, Link } from "@chakra-ui/core";

const NavBar = () => {
  const router = useRouter();
  return (
    <Flex
      pos="fixed"
      zIndex={64}
      align="center"
      justify="space-between"
      h={20}
      w="100%"
    >
      <Flex align="center">
        <ReachLink href="/" passHref>
          <Link _hover={{ textDecor: "none" }}>
            <Flex
              as="button"
              align="center"
              justify="center"
              h={20}
              bg="black"
              color="white"
              w={24}
              shadow="md"
              _focus={{ borderWidth: 0 }}
            >
              <Icon name="menuOpen" size={10} />
            </Flex>
          </Link>
        </ReachLink>

        <Heading
          as="h2"
          ml={10}
          fontFamily="black"
          fontWeight="bold"
          color={router.pathname === `/products/[id]` ? "white" : "black"}
        >
          Dope Kicks
        </Heading>
      </Flex>

      <Flex
        align="center"
        justify="center"
        h="100%"
        bg="black"
        color="white"
        textTransform="uppercase"
        w={32}
        shadow="md"
        fontFamily="black"
        fontWeight="bold"
      >
        <Text as="span" color="red.800" mr={1}>
          2
        </Text>{" "}
        in bag
      </Flex>
    </Flex>
  );
};

export default NavBar;
