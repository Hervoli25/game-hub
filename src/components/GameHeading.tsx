import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	//Gmes
	//Action Games
	//Xbox Games
	//Xbox Action Games
	const heading = `${gameQuery.platform?.name || ''} ${
		gameQuery.genre?.name || ''
	} Games`;
	return (
		<Heading as='h1' size='2xl' textAlign='center' margin='20px'>
			{heading}
		</Heading>
	);
};

export default GameHeading;
