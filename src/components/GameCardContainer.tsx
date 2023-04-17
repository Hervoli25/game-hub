import React from 'react';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width='100%' borderRadius='10px 10px 0 0' overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
