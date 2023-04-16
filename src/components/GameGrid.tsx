import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { games, error, isLoading } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <GameCardSkeleton key={index} />
            ))
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
