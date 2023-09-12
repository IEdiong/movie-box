import { Grid, GridItem, Skeleton } from '@/utils/chakra-components';
import MovieCard from '@/components/movie-card';
import { Movie } from '@/types/movie';

// const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const url =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

async function getMovies(url: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const result = res.json();
  // console.log(result);

  return result;
}

export default async function FeaturedMovies() {
  const { results: movies } = await getMovies(url);
  return (
    <Grid
      as='ul'
      listStyleType='none'
      gridTemplateColumns={{
        base: 'repeat(auto-fill, minmax(250px, 1fr))',
      }}
      gridRowGap={{ base: '8', md: '103px' }}
      gridColumnGap={{ base: '40px', lg: '70px' }}
      justifyContent='space-between'
    >
      {movies.map((movie: Movie) => (
        <GridItem as='li' key={movie.id}>
          {/* <Skeleton h='490px' /> */}
          <MovieCard
            moviePoster={movie.poster_path}
            movieTitle={movie.title}
            movieRating={movie.vote_average}
            releaseDate={movie.release_date}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
