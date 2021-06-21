import { Box, Button, Flex, Heading, Icon, Table, Tr, Th, Td, Checkbox, Thead, Tbody, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" aling="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>
              <Link href="/users/create" passHref>
                <Button 
                  as="a" 
                  size="sm" 
                  fontSize="small" 
                  colorScheme="pink" 
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Th>
                  <Th>Usuários</Th>
                  {isWideVersion && <Td>04 de Abril, 2021</Td>}
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor de Souza Bezerra</Text>
                      <Text fontSize="sm" color="gray.300">igor@igor.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Abril, 2021</Td>}
                </Tr>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor de Souza Bezerra</Text>
                      <Text fontSize="sm" color="gray.300">igor@igor.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Abril, 2021</Td>}
                </Tr>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor de Souza Bezerra</Text>
                      <Text fontSize="sm" color="gray.300">igor@igor.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Abril, 2021</Td>}
                </Tr>
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
    </Box>
  );
}