import {
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
	Button,
	Heading,
	Box,
	Badge,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (isLoading) return <Spinner size='xl' thickness='4px' color='blue.500' />;
	if (error) return <Text color='red.400'>{error}</Text>;

	return (
		<Box>
			<Heading
				fontSize='2xl'
				marginBottom={4}
				bgGradient='linear(to-r, blue.400, purple.500)'
				bgClip='text'
				fontWeight='extrabold'
			>
				Genres
			</Heading>
			<List spacing={2}>
				{data.map((genre) => {
					const isSelected = genre.id === selectedGenre?.id;
					return (
						<ListItem key={genre.id}>
							<HStack
								padding={2}
								borderRadius='lg'
								cursor='pointer'
								onClick={() => onSelectGenre(genre)}
								transition='all 0.2s ease-in-out'
								bg={isSelected ? 'whiteAlpha.200' : 'transparent'}
								borderLeft='4px solid'
								borderColor={isSelected ? 'blue.400' : 'transparent'}
								_hover={{
									bg: 'whiteAlpha.100',
									transform: 'translateX(4px)',
									borderColor: isSelected ? 'blue.400' : 'whiteAlpha.300',
								}}
								position='relative'
								overflow='hidden'
								_before={isSelected ? {
									content: '""',
									position: 'absolute',
									left: 0,
									top: 0,
									bottom: 0,
									width: '4px',
									bg: 'blue.400',
									boxShadow: '0 0 10px rgba(66, 153, 225, 0.6)',
								} : undefined}
							>
								<Box
									position='relative'
									overflow='hidden'
									borderRadius='md'
									transition='all 0.3s ease-in-out'
									_hover={{
										transform: 'scale(1.1)',
										boxShadow: 'lg',
									}}
								>
									<Image
										boxSize='48px'
										borderRadius='md'
										objectFit='cover'
										src={getCroppedImageUrl(genre.image_background)}
										alt={genre.name}
										transition='transform 0.3s ease-in-out'
										filter={isSelected ? 'brightness(1.2)' : 'brightness(1)'}
									/>
								</Box>
								<Button
									whiteSpace='normal'
									textAlign='left'
									fontWeight={isSelected ? 'bold' : 'semibold'}
									onClick={() => onSelectGenre(genre)}
									fontSize='md'
									variant='link'
									color={isSelected ? 'blue.300' : 'inherit'}
									flex={1}
									justifyContent='flex-start'
									transition='all 0.2s ease-in-out'
									_hover={{
										color: 'blue.300',
										textDecoration: 'none',
									}}
								>
									{genre.name}
								</Button>
								{isSelected && (
									<Badge
										colorScheme='blue'
										borderRadius='full'
										px={2}
										fontSize='xs'
										animation='fadeIn 0.3s ease-in'
										sx={{
											'@keyframes fadeIn': {
												from: { opacity: 0, transform: 'scale(0.8)' },
												to: { opacity: 1, transform: 'scale(1)' },
											},
										}}
									>
										Active
									</Badge>
								)}
							</HStack>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};

export default GenreList;
