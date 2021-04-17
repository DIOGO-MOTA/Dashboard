import { Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPagesLine, RiPaintLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal">Usuàrios</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}

            >
              Criar novo
           </Button>
          </Flex>

          <Table colorSheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="green.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuàrio</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diogo mota</Text>
                    <Text fontSize="sm" color="gray.300">diogomota1@gmail.com</Text>
                  </Box>
                </Td>
                <Td>02 de Abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}

                  >
                    editar
           </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Kamila mota</Text>
                    <Text fontSize="sm" color="gray.300">diogomota2221@gmail.com</Text>
                  </Box>
                </Td>
                <Td>02 de Abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}

                  >
                    editar
           </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>




    </Box>
  )
}