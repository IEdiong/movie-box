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
      <Skeleton h={{ base: '280px', md: '449px' }} />
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
              <Skeleton height='40px' width='35ch' />
              <SkeletonText skeletonHeight={4} noOfLines={3} mt='8' />
              <SkeletonText
                skeletonHeight={4}
                noOfLines={1}
                mt='4'
                width='300px'
              />
              <SkeletonText
                skeletonHeight={4}
                noOfLines={1}
                mt='4'
                width='100px'
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  );
}
