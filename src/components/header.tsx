import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@/utils/chakra-components';
import { PlayIcon } from './icons';

export default function Header() {
  return (
    <Box
      as='header'
      color='mdb.white'
      minH={{ lg: '600px' }}
      bgImage={{ lg: "url('/bg-poster.jpg')" }}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Container pt={{ lg: '158px' }}>
        <VStack
          maxW={{ lg: '404px' }}
          spacing={{ lg: '4' }}
          align={{ lg: 'flex-start' }}
        >
          <Heading as='h1' variant='h1'>
            John Wick 3 : Parabellum
          </Heading>
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