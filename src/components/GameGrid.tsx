import React from 'react';
import { Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      <ul>
        {error && <Text>{error}</Text>}

        {games.map((game) => (
          <Text key={game.id}>{game.name}</Text>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
