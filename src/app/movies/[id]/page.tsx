import getMovie from '@/libs/custom-fetch';
import { Movie } from '@/types/movie';
import { Box, Heading, Image, Text } from '@/utils/chakra-components';
import { Fragment } from 'react';

export default async function MovieDetial({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const movie: Movie = await getMovie(url);

  const moviePosterPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <Fragment>
      <Box
        as='header'
        h={{ lg: '449px' }}
        overflow='hidden'
        backgroundColor='mdb.black.900'
      >
        <Image src={moviePosterPath} alt={movie.title} objectFit='cover' />
      </Box>
      <Box as='main'>
        <h1>{movie.title}</h1>
        <Heading data-testid='movie-title'>{movie.title}</Heading>
        <Text data-testid='movie-release-date'>{movie.release_date}</Text>
        <Text data-testid='movie-runtime'>{movie.runtime}</Text>
        <Text data-testid='movie-overview'>{movie.overview}</Text>
      </Box>
    </Fragment>
  );
}
