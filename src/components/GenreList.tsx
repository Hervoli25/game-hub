import {
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
	Button,
	Heading,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (isLoading) return <Spinner />;
	if (error) return <Text>{error}</Text>;

	return (
		<>
			<Heading fontSize='2xl' marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								boxSize='42px'
								borderRadius={8}
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
								_hover={{ cursor: 'pointer' }} // add hover styling
							/>
							<Button
								whiteSpace={'normal'}
								textAlign={'left'}
								fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
								onClick={() => onSelectGenre(genre)}
								fontSize='lg'
								variant={'link'}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
