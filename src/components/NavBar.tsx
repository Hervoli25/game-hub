import React from 'react';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo1.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Image src={logo} boxSize='60px' borderRadius={50} margin={2} />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
