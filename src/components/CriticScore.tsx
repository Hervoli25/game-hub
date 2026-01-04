import { Badge, Box, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  if (!score) return null;

  const getScoreColor = (score: number) => {
    if (score >= 75) return { bg: 'green.500', text: 'white', shadow: 'green.600' };
    if (score >= 50) return { bg: 'yellow.400', text: 'gray.900', shadow: 'yellow.600' };
    return { bg: 'red.500', text: 'white', shadow: 'red.600' };
  };

  const colors = getScoreColor(score);

  return (
    <Box
      position='relative'
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      minW='45px'
      h='32px'
      bg={colors.bg}
      color={colors.text}
      borderRadius='8px'
      fontWeight='bold'
      fontSize='15px'
      px={3}
      boxShadow={`0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)`}
      transition='all 0.2s ease-in-out'
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: `0 6px 12px -2px rgba(0, 0, 0, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.15)`,
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: '2px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '40%',
        bg: 'whiteAlpha.300',
        borderRadius: '8px',
        filter: 'blur(4px)',
      }}
    >
      <Text position='relative' zIndex={1}>
        {score}
      </Text>
    </Box>
  );
};

export default CriticScore;
