// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Box, Heading, Text, Button } from "@chakra-ui/react";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => (
  <Box textAlign="center" py={10} px={6}>
    <Heading as="h2" size="xl" mt={6} mb={2}>
      Welcome to the Electronics Store
    </Heading>
    <Text color="gray.500">
      Discover the latest in electronic & smart appliance technology.
    </Text>
    <Button 
      mt={6}
      colorScheme="teal"
      as={Link}
      to="/products"
    >
      View Products
    </Button>
  </Box>
);

export default Index;
