import {
  Button,
  Flex,
  Text,
  Box,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  TableContainer
} from '@chakra-ui/react';

import { FiEdit, FiDelete } from 'react-icons/fi';

import InputForm from '../components/InputForm';

const Index = () => {
  return (
    <Box w={700} margin={4}>
      <Flex color={'white'} justifyContent={'space-between'} marginY={4}>
        <Text color={'black'} fontSize={'2xl'}>
          Lista de Clientes
        </Text>
        <Button colorScheme={'blue'}>+</Button>
      </Flex>

      <VStack marginY={4}>
        <InputForm label="Nome" name="name" />
        <InputForm label="Email" name="email" type="email" />
        <Button colorScheme="blue" size="sm" alignSelf={'flex-end'}>
          Cadastro
        </Button>
      </VStack>
      <TableContainer>
        <Table size="sm">
          <Thead bgColor={'blue.200'}>
            <Tr>
              <Th textColor={'white'}>Nome</Th>
              <Th textColor={'white'}>E-mail</Th>
              <Th textColor={'white'}>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Brunno Lorran</Td>
              <Td>brunnolorran.silva@gmail.com</Td>
              <Td>
                <Flex>
                  <Tooltip label={'Editar'}>
                    <Button colorScheme={'yellow'} mr={1}>
                      <FiEdit />
                    </Button>
                  </Tooltip>
                  <Tooltip label={'Deletar'}>
                    <Button colorScheme={'red'}>
                      <FiDelete />
                    </Button>
                  </Tooltip>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
