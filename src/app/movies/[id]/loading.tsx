import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonText,
} from '@/utils/chakra-components';
import { Fragment } from 'react';

export default function Loading() {
  return (
    <Fragment>
      <Skeleton h='449px' />
      <Box pt={{ base: '8', md: '16' }} pb='16'>
        <Container>
          <Flex gap='12'>
            <Box
              w='250px'
              aspectRatio={'4 / 6'}
              display={{ base: 'none', md: 'block' }}
            >
              <Skeleton h='full' />
            </Box>
            <Box w='800px'>
              <SkeletonText skeletonHeight={4} />
              <SkeletonText skeletonHeight={6} mt='4' />
              <SkeletonText skeletonHeight={4} noOfLines={3} mt='4' />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  );
}
