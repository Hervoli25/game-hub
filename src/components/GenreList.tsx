import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='42px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              _hover={{ cursor: 'pointer' }} // add hover styling
            />
            <Button
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
  );
};

export default GenreList;
