import { Grid, GridItem, Skeleton } from '@/utils/chakra-components';
import MovieCard from '@/components/movie-card';

const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function FeaturedMovies() {
  return (
    <Grid
      as='ul'
      listStyleType='none'
      gridTemplateColumns={{
        lg: 'repeat(auto-fill, minmax(250px, 1fr))',
      }}
      gridRowGap={{ lg: '103px' }}
      gridColumnGap={{ lg: '70px' }}
      justifyContent='space-between'
    >
      {movies.map((movie) => (
        <GridItem as='li' key={movie}>
          <Skeleton h='490px' />
        </GridItem>
      ))}
    </Grid>
  );
}
