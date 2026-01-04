import React from 'react';
import bullsEyes from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Box, Image, ImageProps } from '@chakra-ui/react';

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'meh', boxSize: '28px' },
		4: { src: thumbsUp, alt: 'recommended', boxSize: '32px' },
		5: { src: bullsEyes, alt: 'exceptional', boxSize: '40px' },
	};

	return (
		<Box
			display='inline-block'
			marginLeft={2}
			marginTop={1}
			transition='all 0.3s ease-in-out'
			animation='fadeIn 0.5s ease-in'
			_hover={{
				transform: 'scale(1.2) rotate(5deg)',
			}}
			sx={{
				'@keyframes fadeIn': {
					from: { opacity: 0, transform: 'scale(0.8)' },
					to: { opacity: 1, transform: 'scale(1)' },
				},
			}}
		>
			<Image
				{...emojiMap[rating]}
				filter='drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
				transition='all 0.3s ease-in-out'
			/>
		</Box>
	);
};

export default Emoji;
