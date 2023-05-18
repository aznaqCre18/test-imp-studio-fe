"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Divider, VStack, Text, HStack } from "@chakra-ui/react";

const DetailPost = ({ params }) => {
  const { slug: id } = params;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    };

    fetchPost();
  }, [params]);

  return (
    <Box
      maxW="container.lg"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
    >
      <Heading as="h2" size="xl" mb={4}>
        {post.title}
      </Heading>
      <Divider />
      <VStack align="start" mt={4} spacing={4}>
        <Text fontSize="md">{post.body}</Text>
        <HStack spacing={4}>
          <Text fontSize="sm">
            <b>User ID:</b> {post.userId}
          </Text>
          <Text fontSize="sm">
            <b>Post ID:</b> {post.id}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DetailPost;
