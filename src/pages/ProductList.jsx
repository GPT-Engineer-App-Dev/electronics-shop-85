import { Box, Grid, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$499", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const ProductList = () => (
  <Box p={4}>
    <Heading mb={4}>Products</Heading>
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
      {products.map((product) => (
        <Box
          key={product.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
        >
          <Image src={product.image} alt={product.name} mb={4} />
          <VStack align="start">
            <Text fontWeight="bold">{product.name}</Text>
            <Text>{product.price}</Text>
            <Link to={`/product/${product.id}`}>
              <Text color="blue.500">View Details</Text>
            </Link>
          </VStack>
        </Box>
      ))}
    </Grid>
  </Box>
);

export default ProductList;