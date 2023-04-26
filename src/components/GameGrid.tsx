import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame, { Game, Platform } from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGame(gameQuery);

	console.log('selectedGenre:', selectedGenre);
	console.log('selectedPlatform:', selectedPlatform);

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding='10px'
				spacing={6}
			>
				{isLoading
					? Array.from({ length: 10 }).map((_, skeleton) => (
							<GameCardContainer key={skeleton}>
								<GameCardSkeleton />
							</GameCardContainer>
					  ))
					: data &&
					  data.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
					  ))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
function selectedGenre(arg0: string, selectedGenre: any) {
	throw new Error('Function not implemented.');
}

function selectedPlatform(arg0: string, selectedPlatform: any) {
	throw new Error('Function not implemented.');
}
