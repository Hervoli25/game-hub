import React from 'react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Box, HStack, Icon, Tooltip } from '@chakra-ui/react';
import { Platform } from '../hooks/useGame';
import { IconType } from 'react-icons/lib';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
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
    <HStack spacing={2} marginY={1}>
      {platforms.map((platform) => (
        <Tooltip
          key={platform.id}
          label={platform.name}
          fontSize='xs'
          hasArrow
          placement='top'
        >
          <Box
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            transition='all 0.2s ease-in-out'
            _hover={{
              transform: 'translateY(-2px) scale(1.15)',
              filter: 'brightness(1.2)',
            }}
          >
            <Icon
              as={iconMap[platform.slug]}
              boxSize={5}
              color={platformColors[platform.slug] || 'gray.500'}
              filter='drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
              transition='all 0.2s ease-in-out'
            />
          </Box>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
