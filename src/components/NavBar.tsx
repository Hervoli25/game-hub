import React from 'react';
import { HStack, Image, Box, useColorModeValue } from '@chakra-ui/react';
import logo from '../assets/logo1.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	const bgColor = useColorModeValue('whiteAlpha.900', 'gray.900');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');

	return (
		<Box
			position='sticky'
			top={0}
			zIndex={1000}
			bg={bgColor}
			backdropFilter='blur(10px)'
			borderBottom='1px solid'
			borderColor={borderColor}
			boxShadow='sm'
			transition='all 0.3s ease-in-out'
			_hover={{
				boxShadow: 'md',
			}}
		>
			<HStack
				justifyContent='space-between'
				padding={{ base: '12px 16px', md: '16px 24px' }}
				maxW='1800px'
				margin='0 auto'
				spacing={{ base: 2, md: 4 }}
			>
				<Box
					transition='all 0.3s ease-in-out'
					_hover={{
						transform: 'scale(1.05) rotate(-5deg)',
						filter: 'brightness(1.1)',
					}}
					cursor='pointer'
					flexShrink={0}
				>
					<Image
						src={logo}
						boxSize={{ base: '50px', md: '60px' }}
						borderRadius='full'
						objectFit='cover'
						boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)'
						border='3px solid'
						borderColor='whiteAlpha.300'
						transition='all 0.3s ease-in-out'
						_hover={{
							borderColor: 'blue.400',
							boxShadow: '0 4px 20px rgba(66, 153, 225, 0.4)',
						}}
					/>
				</Box>

				<Box flex={1} maxW='600px'>
					<SearchInput onSearch={onSearch} />
				</Box>

				<Box flexShrink={0}>
					<ColorModeSwitch />
				</Box>
			</HStack>
		</Box>
	);
};

export default NavBar;
