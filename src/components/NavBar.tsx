import React from 'react';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo1.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Image src={logo} boxSize='60px' borderRadius={50} margin={2} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
