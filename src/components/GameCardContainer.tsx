import React from 'react';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width='100%'
      height='100%'
      transition='all 0.3s ease-in-out'
      position='relative'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
