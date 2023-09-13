import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Link,
} from '@/utils/chakra-components';
import HamburgerIcon from '@/components/icons/hamburger-icon';
import SearchBar from '@/components/search-bar';

export default function Navbar() {
  return (
    <Box as='nav' bg='mdb.rose.900' color='mdb.white' py='15px' w='full'>
      <Container>
        <HStack justify='space-between'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt=''
              w={{ base: '150px', md: 'max-content' }}
            />
          </Link>
          <Box
            minW={{ sm: '300px', md: '505px' }}
            display={{ base: 'none', sm: 'block' }}
          >
            <SearchBar />
          </Box>
          <HStack spacing='27px'>
            <Link
              href='/'
              fontSize='md'
              fontWeight='bold'
              lineHeight='24px'
              color='mdb.white'
            >
              Sign in
            </Link>
            <Button
              p='0'
              minW='28px'
              bg='transparent'
              _hover={{
                backgroundColor: 'transparent',
              }}
            >
              <HamburgerIcon boxSize='36px' />
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
