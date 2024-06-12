import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$499", description: "Latest smartphone with amazing features.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", description: "High performance laptop for professionals.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling over-ear headphones.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} mb={4} />
      <VStack align="start">
        <Heading>{product.name}</Heading>
        <Text fontWeight="bold">{product.price}</Text>
        <Text>{product.description}</Text>
      </VStack>
    </Box>
  );
};

export default ProductDetail;