import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from './components/Footer';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/useGame';
import { Genre } from './hooks/useGenres';
import usePlatforms from './hooks/usePlatforms';

export interface GameQuery {
	platform: Platform | null;
	genre: Genre | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({
		platform: null,
		genre: null,
	});

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' padding={5}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<HStack spacing={5} paddingLeft={12}>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector />
				</HStack>
				<GameGrid
					selectedPlatform={gameQuery.platform}
					selectedGenre={gameQuery.genre}
					gameQuery={gameQuery}
				/>
			</GridItem>
			<GridItem>
				<Footer />
			</GridItem>
		</Grid>
	);
}

export default App;
