import Header from '@/components/header';
import { ChevronRightIcon } from '@/components/icons';
import MovieCard from '@/components/movie-card';
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
} from '@/utils/chakra-components';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Box as='main' pt={{ lg: '70px' }}>
        <Container>
          <HStack justify='space-between' align='center'>
            <Heading as='h2'>Featured Movie</Heading>
            <Link href='/' color='mdb.rose.700'>
              See more
              <ChevronRightIcon boxSize='20px' />
            </Link>
          </HStack>

          <Box pt={{ lg: '44px' }}>
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
                  <MovieCard />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
