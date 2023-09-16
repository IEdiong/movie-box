import { Grid, GridItem } from '@/utils/chakra-components';
import MovieCard from '@/components/movie-card';
import { Movie } from '@/types/movie';
import getMovies from '@/libs/custom-fetch';

const url =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export default async function FeaturedMovies() {
  const { results: movies } = await getMovies(url);

  return (
    <Grid
      as="ul"
      listStyleType="none"
      gridTemplateColumns={{
        base: 'repeat(auto-fill, minmax(250px, 1fr))',
      }}
      gridRowGap={{ base: '8', md: '103px' }}
      gridColumnGap={{ base: '40px', lg: '70px' }}
      justifyContent="space-between"
    >
      {movies.slice(0, 10).map((movie: Movie) => (
        <GridItem as="li" key={movie.id} pos="relative">
          <MovieCard
            moviePoster={movie.poster_path}
            movieTitle={movie.title}
            movieRating={movie.vote_average}
            releaseDate={movie.release_date}
            movieId={movie.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
