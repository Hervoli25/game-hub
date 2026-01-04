import { Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Box } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	const [hasValue, setHasValue] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const handleClear = () => {
		if (ref.current) {
			ref.current.value = '';
			setHasValue(false);
			ref.current.focus();
			onSearch('');
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (ref.current && ref.current.value.trim()) {
			onSearch(ref.current.value);
		}
	};

	const handleChange = () => {
		if (ref.current) {
			setHasValue(ref.current.value.length > 0);
		}
	};

	return (
		<Box width='100%' maxW='600px'>
			<form onSubmit={handleSubmit}>
				<InputGroup
					size='lg'
					transition='all 0.3s ease-in-out'
					_hover={{
						transform: 'translateY(-1px)',
					}}
				>
					<InputLeftElement
						pointerEvents='none'
						height='100%'
						children={
							<BsSearch
								size={18}
								style={{
									transition: 'all 0.3s ease-in-out',
									transform: isFocused ? 'scale(1.1) rotate(-10deg)' : 'scale(1)',
									color: isFocused ? '#3182CE' : undefined,
								}}
							/>
						}
					/>

					<Input
						ref={ref}
						borderRadius='full'
						placeholder='Search games...'
						variant='filled'
						paddingRight={hasValue ? '45px' : '16px'}
						onChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						transition='all 0.3s ease-in-out'
						_hover={{
							bg: 'whiteAlpha.200',
						}}
						_focus={{
							bg: 'whiteAlpha.100',
							borderColor: 'blue.400',
							borderWidth: '2px',
							boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)',
							transform: 'scale(1.01)',
						}}
						boxShadow='0 2px 8px rgba(0, 0, 0, 0.1)'
					/>

					{hasValue && (
						<InputRightElement height='100%'>
							<IconButton
								aria-label='Clear search'
								icon={<IoMdClose />}
								size='sm'
								variant='ghost'
								borderRadius='full'
								onClick={handleClear}
								transition='all 0.2s ease-in-out'
								_hover={{
									bg: 'whiteAlpha.300',
									transform: 'rotate(90deg)',
								}}
							/>
						</InputRightElement>
					)}
				</InputGroup>
			</form>
		</Box>
	);
};

export default SearchInput;
