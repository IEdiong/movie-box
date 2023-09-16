import {
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Link,
  Image,
} from '@/utils/chakra-components';
import { ImdbIcon, TomatoRatingIcon, TvSeriesBadgeIcon } from './icons';
import FavIcon from './fav-icon';

type MovieCardProps = {
  movieId: number;
  moviePoster: string;
  movieTitle: string;
  movieRating: number;
  releaseDate: string;
};

export default function MovieCard({
  movieId,
  moviePoster,
  movieTitle,
  movieRating,
  releaseDate,
}: MovieCardProps) {
  const moviePosterPath = `https://image.tmdb.org/t/p/original${moviePoster}`;

  const dateString = releaseDate.split('-')[0];
  const releaseYear = parseInt(dateString);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Box
      as={Link}
      href={`/movies/${movieId}`}
      display="block"
      pos="relative"
      _hover={{
        textDecor: 'none',
      }}
      className="movie-card"
      data-testid="movie-card"
    >
      <Box
        minH="370px"
        aspectRatio={'4 / 6'}
        pos="relative"
        overflow="hidden"
        transition=".3s ease-out"
        sx={{
          '&::after': {
            content: "''",
            transition: '.2s ease-out',
            transitionProperty: 'background-color',
          },
          '.movie-card:hover &::after': {
            content: "''",
            position: 'absolute',
            top: '0',
            left: '0',
            width: 'full',
            height: 'full',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            pointerEvents: 'none',
          },
        }}
      >
        <HStack
          justify="space-between"
          align="center"
          p="4"
          pos="absolute"
          w="full"
          left="0"
          top="0"
        >
          <TvSeriesBadgeIcon visibility="hidden" />
          <FavIcon />
        </HStack>

        <Image
          src={moviePosterPath}
          objectFit="cover"
          alt={movieTitle}
          transition=".3s ease-in-out"
          sx={{
            '.movie-card:hover &': {
              transform: 'scale(1.1)',
            },
          }}
          data-testid="movie-poster"
        />
      </Box>
      <VStack align="flex-start" justify="space-between" spacing="3" mt="3">
        <Text
          variant="xs"
          color="mdb.gray.400"
          fontWeight="bold"
          lineHeight="normal"
        >
          USA, <span data-testid="movie-release-date">{releaseYear}</span>
          {releaseYear === currentYear ? ' - Current' : null}
        </Text>
        <Heading
          as="h3"
          variant="h3"
          color="mdb.gray.900"
          noOfLines={1}
          transition=".3s ease-in-out"
          sx={{
            '.movie-card:hover &': {
              color: 'mdb.rose.700',
            },
          }}
          data-testid="movie-title"
        >
          {movieTitle}
        </Heading>
        <HStack
          spacing="34px"
          align="center"
          justify="space-between"
          w="full"
          color="mdb.gray.900"
        >
          <HStack spacing="10px" align="center">
            <ImdbIcon w="35px" />
            <Text fontSize="xs">{movieRating.toFixed(2)} / 100</Text>
          </HStack>
          <HStack spacing="10px" align="center">
            <TomatoRatingIcon w="17px" />
            <Text fontSize="xs">97%</Text>
          </HStack>
        </HStack>
        <Text
          variant="xs"
          color="mdb.gray.400"
          fontWeight="bold"
          lineHeight="normal"
        >
          Action, Adventure, Horror
        </Text>
      </VStack>
    </Box>
  );
}
