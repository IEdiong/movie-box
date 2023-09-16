import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Link,
} from '@/utils/chakra-components';
import HamburgerIcon from './icons/hamburger-icon';
import SearchBar from './search-bar';

export default function Navbar() {
  return (
    <Box
      as="nav"
      bg="transparent"
      py="15px"
      pos="absolute"
      top="0"
      w="full"
      left="0"
      right="0"
    >
      <Container>
        <HStack justify="space-between">
          <Image
            src="/logo.png"
            alt=""
            w={{ base: '40px', md: '0' }}
            h={{ base: '40px', md: '0' }}
            display={{ base: 'block', md: 'none' }}
          />
          <Image
            src="/logo.svg"
            alt=""
            w={{ md: 'max-content' }}
            display={{ base: 'none', md: 'block' }}
          />
          <Box
            minW={{ sm: '300px', md: '505px' }}
            display={{ base: 'none', sm: 'block' }}
          >
            <SearchBar />
          </Box>
          <HStack spacing="27px">
            <Link
              href="/"
              fontSize="md"
              fontWeight="bold"
              lineHeight="24px"
              display={{ base: 'none', md: 'block' }}
            >
              Sign in
            </Link>
            <Button
              p="0"
              minW="28px"
              bg="transparent"
              _hover={{
                backgroundColor: 'transparent',
              }}
            >
              <HamburgerIcon boxSize="36px" />
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
