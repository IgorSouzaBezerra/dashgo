import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDate?: boolean;
}

export function Profile({showProfileDate = true }: ProfileProps) {
  return (
    <Flex align="center">
     {showProfileDate && (
        <Box mr="4" textAlign="right">
          <Text>Igor de Souza Bezerra</Text>
          <Text color="gray.300" fontSize="small">igor.souza1.bezerra@gmail.com</Text>
        </Box>
     )}

      <Avatar size="md" name="Igor de Souza Bezerra" src="https://github.com/igorsouzabezerra.png" />
    </Flex>
  );
}