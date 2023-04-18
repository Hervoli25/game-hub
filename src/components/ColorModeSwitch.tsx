import React from 'react';
import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme={'green'}
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
