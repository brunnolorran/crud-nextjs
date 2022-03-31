import { useState } from 'react';

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
  const [clients, setClients] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({ name: null, email: null });

  const isValidFormData = () => {
    if (!name) {
      setErrors({ name: 'Nome obrigatório' });
      return false;
    }

    if (!email) {
      setErrors({ email: 'Email obrigatório' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmitCreateClient = e => {
    e.preventDefault();

    if (!isValidFormData()) return;

    setClients(
      clients.concat({
        _id: new Date().getMilliseconds().toString(),
        name,
        email
      })
    );

    setName('');
    setEmail('');
    setId(null);
    toggleFormState();
  };

  const handleSubmitUpdateClient = e => {
    e.preventDefault();

    if (!isValidFormData()) return;

    setClients(
      clients.map(client =>
        client._id === id ? { name, email, _id: id } : client
      )
    );

    setName('');
    setEmail('');
    toggleFormState();
  };

  const handleDeleteClient = _id => {
    setClients(clients.filter(client => client._id !== _id));
  };

  const handleChangeName = text => {
    setName(text);
  };
  const handleChangeEmail = text => {
    setEmail(text);
  };

  const handleShowUpdateClientForm = client => {
    setId(client._id);
    setName(client.name);
    setEmail(client.email);
    setIsFormOpen(true);
  };

  const toggleFormState = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Box w={700} margin={4}>
      <Flex color={'white'} justifyContent={'space-between'} marginY={4}>
        <Text color={'black'} fontSize={'2xl'}>
          Lista de Clientes
        </Text>
        <Button colorScheme={'blue'} onClick={toggleFormState}>
          {isFormOpen ? '-' : '+'}
        </Button>
      </Flex>

      {isFormOpen && (
        <VStack
          marginY={4}
          as={'form'}
          onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient}
        >
          <InputForm
            label="Nome"
            name="name"
            value={name}
            onChange={e => handleChangeName(e.target.value)}
            error={errors.name}
          />
          <InputForm
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={e => handleChangeEmail(e.target.value)}
            error={errors.email}
          />
          <Button
            colorScheme="blue"
            size="sm"
            alignSelf={'flex-end'}
            type="submit"
          >
            {id ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </VStack>
      )}

      <TableContainer>
        <Table size="sm">
          <Thead bgColor={'blue.500'}>
            <Tr>
              <Th textColor={'white'}>Nome</Th>
              <Th textColor={'white'}>E-mail</Th>
              <Th textColor={'white'}>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.map(client => (
              <Tr key={client.email}>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>
                  <Flex>
                    <Tooltip label={'Editar'}>
                      <Button
                        colorScheme={'yellow'}
                        mr={1}
                        onClick={() => {
                          handleShowUpdateClientForm(client);
                        }}
                      >
                        <FiEdit />
                      </Button>
                    </Tooltip>
                    <Tooltip label={'Deletar'}>
                      <Button
                        colorScheme={'red'}
                        onClick={() => handleDeleteClient(client._id)}
                      >
                        <FiDelete />
                      </Button>
                    </Tooltip>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
