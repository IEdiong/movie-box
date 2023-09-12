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

export default function Header() {
  return (
    <Box
      as='header'
      color='mdb.white'
      minH={{ lg: '600px' }}
      bgImage={{ lg: "url('/bg-poster.jpg')" }}
      bgRepeat='no-repeat'
      bgSize='cover'
      pos='relative'
    >
      <Navbar />
      <Container pt={{ lg: '158px' }}>
        <VStack
          maxW={{ lg: '404px' }}
          spacing={{ lg: '4' }}
          align={{ lg: 'flex-start' }}
        >
          <Heading as='h1' variant='h1'>
            John Wick 3 : Parabellum
          </Heading>
          <HStack spacing='34px' align='center'>
            <HStack spacing='10px' align='center'>
              <ImdbIcon w='35px' />
              <Text fontSize='xs'>86.0 / 100</Text>
            </HStack>
            <HStack spacing='10px' align='center'>
              <TomatoRatingIcon w='17px' />
              <Text fontSize='xs'>97%</Text>
            </HStack>
          </HStack>
          <Text
            w={{ lg: '345px' }}
            fontWeight='medium'
            fontStyle='normal'
            lineHeight='18px'
          >
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </Text>
          <Button
            bg='mdb.rose.700'
            textTransform='uppercase'
            color='mdb.white'
            fontSize='sm'
            fontWeight='bold'
            lineHeight='24px'
            gap='2'
          >
            <PlayIcon boxSize='20px' />
            Watch trailer
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
