import React, { useCallback, useState } from 'react';

import {
  Input,
  Box,
  Button,
  Text,
  ListItem,
  UnorderedList,
  Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';

import { useGetTodos, useUpdateTodos } from '../service/todo';

const TodosPage: React.FC = () => {
  const [value, setValue] = useState('');

  const { data: todos, isPending, isError } = useGetTodos();
  const { mutate } = useUpdateTodos();

  const handleSubmit = useCallback(() => {
    mutate(value, {
      onSuccess: () => setValue(''),
    });
  }, [value]);

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
          TODO LIST
        </Text>
        <Link href="/">
          <Button>go to POST LIST</Button>
        </Link>
      </Box>
      <Box display="flex" gap={4}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          width={200}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <UnorderedList p={2}>
        {todos?.map((todo, i) => (
          <ListItem key={i}>{todo}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TodosPage;
