import getMovie from '@/libs/custom-fetch';
import { Movie } from '@/types/movie';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@/utils/chakra-components';
import { Fragment } from 'react';

export default async function MovieDetial({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const movie: Movie = await getMovie(url);
  console.log(movie);

  const backdropPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const moviePosterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <Fragment>
      <Box
        maxH={{ md: '449px' }}
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
              w='600px'
              aspectRatio={'4 / 6'}
              display={{ base: 'none', md: 'block' }}
            >
              <Image
                src={moviePosterPath}
                alt={movie.title}
                objectFit='cover'
              />
            </Box>
            <Box>
              <h1>{movie.title}</h1>
              <Heading data-testid='movie-title'>{movie.title}</Heading>
              <Text data-testid='movie-release-date'>{movie.release_date}</Text>
              <Text data-testid='movie-runtime'>{movie.runtime}</Text>
              <Text data-testid='movie-overview'>{movie.overview}</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  );
}
