import FeaturedMovies from '@/components/featured-movies';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ChevronRightIcon } from '@/components/icons';

import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
} from '@/utils/chakra-components';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Box as='main' pt={{ base: '50px', md: '70px' }} pb={{ base: '144px' }}>
        <Container>
          <HStack justify='space-between' align='center'>
            <Heading as='h2' variant={{ base: 'h2-sm', md: 'h2' }}>
              Featured Movies
            </Heading>
            <Link href='/' color='mdb.rose.700'>
              See more
              <ChevronRightIcon boxSize='20px' />
            </Link>
          </HStack>

          <Box pt={{ base: '8', md: '44px' }}>
            <FeaturedMovies />
          </Box>
        </Container>
      </Box>
      <Footer />
    </Fragment>
  );
}
