import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const InputForm = ({ label, name, ...rest }) => {
  return (
    <FormControl marginY="1rem">
      <FormLabel>{label}</FormLabel>
      <Input type="email" name={name} id={name} {...rest} />
    </FormControl>
  );
};

export default InputForm;
