import { Button, Menu, MenuButton, MenuItem, MenuList, Icon, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown, BsCheckCircleFill } from 'react-icons/bs';
import { MdTrendingUp, MdDateRange, MdSortByAlpha, MdNewReleases, MdStars, MdRecommend } from 'react-icons/md';

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: 'relevance', label: 'Relevance', icon: MdRecommend },
		{ value: '-added', label: 'Date added', icon: MdDateRange },
		{ value: 'name', label: 'Name', icon: MdSortByAlpha },
		{ value: '-released', label: 'Release date', icon: MdNewReleases },
		{ value: '-metacritic', label: 'Popularity', icon: MdTrendingUp },
		{ value: '-rating', label: 'Average Rating', icon: MdStars },
	];
	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

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
				Order by: {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList
				borderRadius='xl'
				boxShadow='xl'
				border='1px solid'
				borderColor='whiteAlpha.200'
				overflow='hidden'
				py={2}
			>
				{sortOrders.map((order) => {
					const isSelected = order.value === sortOrder;
					return (
						<MenuItem
							onClick={() => onSelectSortOrder(order.value)}
							key={order.value}
							icon={<Icon as={order.icon} boxSize={5} />}
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
								<Text>{order.label}</Text>
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

export default SortSelector;
