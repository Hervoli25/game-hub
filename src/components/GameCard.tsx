import { Card, CardBody, Heading, HStack, Image, Box } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGame';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image-url';
import Emoji from './Emoji';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card
			overflow='hidden'
			borderRadius='xl'
			bg='gray.800'
			boxShadow='lg'
			transition='all 0.3s ease-in-out'
			_hover={{
				transform: 'translateY(-8px)',
				boxShadow: '2xl',
				borderColor: 'whiteAlpha.300',
			}}
			border='1px solid'
			borderColor='whiteAlpha.100'
		>
			<Box
				position='relative'
				overflow='hidden'
				_before={{
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					bg: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.7) 100%)',
					zIndex: 1,
					opacity: 0,
					transition: 'opacity 0.3s ease-in-out',
				}}
				_hover={{
					'&::before': {
						opacity: 1,
					},
					'& img': {
						transform: 'scale(1.1)',
					},
				}}
			>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					alt={game.name}
					width='100%'
					height='200px'
					objectFit='cover'
					transition='transform 0.3s ease-in-out'
					cursor='pointer'
				/>
			</Box>

			<CardBody p={4}>
				<HStack
					justifyContent='space-between'
					alignItems='center'
					marginBottom={3}
					flexWrap='wrap'
					gap={2}
				>
					<PlatformIconList
						platforms={game.parent_platforms?.map((p) => p.platform) || []}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading
					fontSize='xl'
					fontWeight='bold'
					color='white'
					lineHeight='1.3'
					noOfLines={2}
					minH='60px'
					display='flex'
					alignItems='flex-start'
					transition='color 0.2s ease-in-out'
					_hover={{
						color: 'blue.300',
					}}
				>
					{game.name}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
