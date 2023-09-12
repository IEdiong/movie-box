import {
  Input,
  InputGroup,
  InputRightElement,
} from '@/utils/chakra-components';
import { SearchIcon } from './icons';

export default function SearchBar() {
  return (
    <InputGroup py='6px' px='10px'>
      <Input
        placeholder='What do you want to watch?'
        _placeholder={{
          color: 'mdb.white',
          fontSize: 'md',
          fontWeight: 'normal',
          lineHeight: '24px',
        }}
        _focusVisible={{
          borderColor: 'mdb.rose.700',
          boxShadow: '0 0 0 1px #BE123C',
        }}
      />
      <InputRightElement h='full' me='10px'>
        <SearchIcon boxSize='16px' />
      </InputRightElement>
    </InputGroup>
  );
}
