import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" p={4}>
    <Flex justify="space-between">
      <ChakraLink as={Link} to="/" fontWeight="bold">
        Home
      </ChakraLink>
      <ChakraLink as={Link} to="/products" fontWeight="bold">
        Products
      </ChakraLink>
    </Flex>
  </Box>
);

export default Navbar;