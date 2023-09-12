import {
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Link,
} from '@/utils/chakra-components';
import {
  FavoriteIcon,
  ImdbIcon,
  TomatoRatingIcon,
  TvSeriesBadgeIcon,
} from './icons';

export default function MovieCard() {
  return (
    <Box h='490px' as={Link} href='#' _hover={{ textDecor: 'none' }}>
      <Box
        p='4'
        minH='370px'
        bgImg={"url('/poster-image.png')"}
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
      >
        <HStack justify='space-between' align='center'>
          <TvSeriesBadgeIcon />
          <FavoriteIcon />
        </HStack>
      </Box>
      <VStack align='flex-start' justify='space-between' spacing='3' mt='3'>
        <Text
          variant='xs'
          color='mdb.gray.400'
          fontWeight='bold'
          lineHeight='normal'
        >
          USA, 2016 - Current
        </Text>
        <Heading as='h3' variant='h3' color='mdb.gray.900' noOfLines={1}>
          Stranger Things
          {/* Spider-Man : Into The Spider Verse */}
        </Heading>
        <HStack
          spacing='34px'
          align='center'
          justify='space-between'
          w='full'
          color='mdb.gray.900'
        >
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
          variant='xs'
          color='mdb.gray.400'
          fontWeight='bold'
          lineHeight='normal'
        >
          Action, Adventure, Horror
        </Text>
      </VStack>
    </Box>
  );
}

// bgColor: bg='mdb.rose.700'
