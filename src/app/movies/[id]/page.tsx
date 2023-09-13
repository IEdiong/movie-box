import getMovie from '@/libs/custom-fetch';
import { Movie } from '@/types/movie';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@/utils/chakra-components';
import { Fragment } from 'react';

export default async function MovieDetial({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const movie: Movie = await getMovie(url);
  // console.log(movie);

  const backdropPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const moviePosterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <Fragment>
      <Box
        h={{ base: '280px', md: '449px' }}
        overflow='hidden'
        bgColor='mdb.black.900'
        bgPos='center'
      >
        <Image src={backdropPath} alt={movie.title} objectFit='fill' />
      </Box>
      <Box pt={{ base: '8', md: '16' }} pb='16'>
        <Container>
          <Flex gap='12'>
            <Box
              w='250px'
              aspectRatio={'4 / 6'}
              display={{ base: 'none', md: 'block' }}
              pos='relative'
              flexBasis={'250px'}
              flexShrink={'0'}
              flexGrow={'1'}
            >
              <Image
                src={moviePosterPath}
                alt={movie.title}
                w='full'
                objectFit='contain'
              />
            </Box>
            <VStack spacing='4' align='flex-start'>
              <Heading data-testid='movie-title'>{movie.title}</Heading>
              <Text data-testid='movie-overview'>{movie.overview}</Text>
              <Text variant='sm'>
                Release date:{' '}
                <span data-testid='movie-release-date'>
                  {movie.release_date}
                </span>
              </Text>
              <Text data-testid='movie-runtime'>{movie.runtime}</Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  );
}
