import React from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import { useGetPosts } from '../service/post';

const IndexPage: React.FC = () => {
  const { data: posts, isPending, isError } = useGetPosts();

  // loading UI
  if (isPending) {
    return <Spinner />;
  }

  // error UI
  if (isError) {
    return <div>error</div>;
  }

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" pt={1} pb={4}>
          POST LIST
        </Text>
        <Link href="/todos">
          <Button>go to TODO LIST</Button>
        </Link>
      </Box>
      <Box display="flex" flexDir="column" gap={4}>
        {posts?.map((post) => (
          <Card key={post.id}>
            <CardBody>
              <Heading size="xs" textTransform="uppercase">
                {post.title}
              </Heading>
              <Text>{post.body}</Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default IndexPage;
