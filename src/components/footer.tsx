import {
  Box,
  Flex,
  HStack,
  Link,
  VStack,
  Text,
} from '@/utils/chakra-components';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './icons';

export default function Footer() {
  return (
    <Flex
      as='footer'
      justify='center'
      align='center'
      pt={{ base: '44px', md: '74px' }}
      pb={{ base: '6', md: '12' }}
    >
      <VStack spacing='36px' fontWeight='bold' fontSize='lg'>
        <HStack
          as='ul'
          listStyleType='none'
          spacing='12'
          align='center'
          justify='space-between'
        >
          <FacebookIcon boxSize='28px' />
          <InstagramIcon boxSize='28px' />
          <TwitterIcon boxSize='28px' />
          <YoutubeIcon boxSize='28px' />
        </HStack>
        <Flex
          as='ul'
          flexDir={{ base: 'column', md: 'row' }}
          listStyleType='none'
          gap={{ base: '8', md: '12' }}
          align='center'
          justify='space-between'
          color='mdb.gray.900'
          fontSize={{ base: 'sm', md: 'md' }}
        >
          <Box as='li'>
            <Link
              href='/'
              transition='ease-in'
              transitionDuration='.3s'
              _hover={{ color: 'mdb.rose.700', textDecoration: 'none' }}
            >
              Conditions of Use
            </Link>
          </Box>
          <Box as='li'>
            <Link
              href='/'
              transition='ease-in'
              transitionDuration='.3s'
              _hover={{ color: 'mdb.rose.700', textDecoration: 'none' }}
            >
              Privacy & Policy
            </Link>
          </Box>
          <Box as='li'>
            <Link
              href='/'
              transition='ease-in'
              transitionDuration='.3s'
              _hover={{ color: 'mdb.rose.700', textDecoration: 'none' }}
            >
              Press Room
            </Link>
          </Box>
        </Flex>
        <Text color='mdb.gray.500' fontSize={{ base: 'sm', md: 'md' }}>
          © 2021 MovieBox by Adriana Eka Prayudha{' '}
        </Text>
      </VStack>
    </Flex>
  );
}
