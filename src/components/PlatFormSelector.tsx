import { Button, Menu, MenuButton, MenuItem, MenuList, Icon, HStack, Text } from '@chakra-ui/react';
import { BsChevronDown, BsCheckCircleFill } from 'react-icons/bs';
import { Platform } from '../hooks/useGame';
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

import usePlatforms from '../hooks/usePlatforms';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	const platformColors: { [key: string]: string } = {
		pc: '#0078D4',
		playstation: '#003791',
		xbox: '#107C10',
		nintendo: '#E60012',
		mac: '#000000',
		linux: '#FCC624',
		android: '#3DDC84',
		ios: '#000000',
		web: '#4285F4',
	};

	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}
				fontWeight='semibold'
				borderRadius='lg'
				px={6}
				transition='all 0.2s ease-in-out'
				boxShadow='sm'
				_hover={{
					transform: 'translateY(-2px)',
					boxShadow: 'md',
				}}
				_active={{
					transform: 'translateY(0)',
					boxShadow: 'sm',
				}}
			>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList
				borderRadius='xl'
				boxShadow='xl'
				border='1px solid'
				borderColor='whiteAlpha.200'
				overflow='hidden'
				py={2}
			>
				{data.map((platform) => {
					const isSelected = platform.id === selectedPlatform?.id;
					const platformIcon = iconMap[platform.slug];
					const platformColor = platformColors[platform.slug];

					return (
						<MenuItem
							onClick={() => onSelectPlatform(platform)}
							key={platform.id}
							icon={
								platformIcon ? (
									<Icon
										as={platformIcon}
										boxSize={5}
										color={platformColor || 'gray.500'}
									/>
								) : undefined
							}
							fontWeight={isSelected ? 'bold' : 'normal'}
							bg={isSelected ? 'whiteAlpha.100' : 'transparent'}
							transition='all 0.2s ease-in-out'
							_hover={{
								bg: 'whiteAlpha.200',
								transform: 'translateX(4px)',
							}}
							position='relative'
							borderLeft='3px solid'
							borderColor={isSelected ? 'blue.400' : 'transparent'}
						>
							<HStack justify='space-between' width='100%'>
								<Text>{platform.name}</Text>
								{isSelected && (
									<Icon
										as={BsCheckCircleFill}
										color='blue.400'
										boxSize={4}
										animation='fadeIn 0.3s ease-in'
										sx={{
											'@keyframes fadeIn': {
												from: { opacity: 0, transform: 'scale(0.5)' },
												to: { opacity: 1, transform: 'scale(1)' },
											},
										}}
									/>
								)}
							</HStack>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
