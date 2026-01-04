import { Card, CardBody, Skeleton, SkeletonText, Box, HStack } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card
      overflow='hidden'
      borderRadius='xl'
      bg='gray.800'
      boxShadow='lg'
      border='1px solid'
      borderColor='whiteAlpha.100'
    >
      <Skeleton
        height='200px'
        startColor='gray.700'
        endColor='gray.600'
        speed={1.2}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: 'shimmer 2s infinite',
          },
          '@keyframes shimmer': {
            '0%': { left: '-100%' },
            '100%': { left: '100%' },
          },
        }}
      />
      <CardBody p={4}>
        <HStack
          justifyContent='space-between'
          marginBottom={3}
          spacing={2}
        >
          <HStack spacing={2}>
            <Skeleton
              height='20px'
              width='20px'
              borderRadius='md'
              startColor='gray.700'
              endColor='gray.600'
            />
            <Skeleton
              height='20px'
              width='20px'
              borderRadius='md'
              startColor='gray.700'
              endColor='gray.600'
            />
          </HStack>
          <Skeleton
            height='32px'
            width='45px'
            borderRadius='lg'
            startColor='gray.700'
            endColor='gray.600'
          />
        </HStack>
        <Box minH='60px'>
          <SkeletonText
            noOfLines={2}
            spacing={2}
            skeletonHeight={4}
            startColor='gray.700'
            endColor='gray.600'
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
