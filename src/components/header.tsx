import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from '@/utils/chakra-components';
import { ImdbIcon, PlayIcon, TomatoRatingIcon } from './icons';
import Navbar from './navbar';
// import Carousel from './carousel';

export default function Header() {
  return (
    <Box
      as="header"
      color="mdb.white"
      minH={{ base: '600px' }}
      bgColor="mdb.rose.700"
      bgImage={{ base: "url('/bg-poster.jpg')" }}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      pos="relative"
    >
      <Navbar />
      {/* <Box pos='absolute' top='0' left='0' right='0' w='full' h='full'>
        <Carousel />
      </Box> */}
      <Container pt={{ base: '180px', md: '158px' }}>
        <VStack
          maxW={{ base: '404px' }}
          spacing={{ base: '4' }}
          align={{ base: 'flex-start' }}
        >
          <Heading as="h1" variant={{ base: 'h1-sm', md: 'h1' }}>
            John Wick 3 : Parabellum
          </Heading>
          <HStack spacing="34px" align="center">
            <HStack spacing="10px" align="center">
              <ImdbIcon w="35px" />
              <Text fontSize="xs">86.0 / 100</Text>
            </HStack>
            <HStack spacing="10px" align="center">
              <TomatoRatingIcon w="17px" />
              <Text fontSize="xs">97%</Text>
            </HStack>
          </HStack>
          <Text
            w={{ base: '300px', md: '345px' }}
            fontWeight="medium"
            fontStyle="normal"
            lineHeight="18px"
          >
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </Text>
          <Button
            bg="mdb.rose.700"
            textTransform="uppercase"
            color="mdb.white"
            fontSize="sm"
            fontWeight="bold"
            lineHeight="24px"
            gap="2"
          >
            <PlayIcon boxSize="20px" />
            Watch trailer
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
