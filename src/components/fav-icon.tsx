'use client';
import { Button } from '@/utils/chakra-components';
import { FavoriteIcon } from './icons';
import { useState } from 'react';

export default function FavIcon() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <Button
      p="0"
      minW="30px"
      h="30px"
      bg="transparent"
      _hover={{
        backgroundColor: 'transparent',
      }}
      color={isFavorite ? 'mdb.rose.700' : '#D1D5DB'}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsFavorite(!isFavorite);
      }}
    >
      <FavoriteIcon color="currentcolor" zIndex="4" />
    </Button>
  );
}
