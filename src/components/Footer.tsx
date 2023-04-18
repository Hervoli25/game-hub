import { Box, Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as='footer' py={8} bg='gray.800' color='white'>
      <Flex direction='column' alignItems='center' justifyContent='center'>
        <Stack direction='row' spacing={8} alignItems='center'>
          <Link href='https://github.com'>
            <IconButton
              aria-label='GitHub'
              icon={<FaGithub />}
              colorScheme='gray'
            />
          </Link>
          <Link href='https://twitter.com'>
            <IconButton
              aria-label='Twitter'
              icon={<FaTwitter />}
              colorScheme='blue'
            />
          </Link>
          <Link href='https://youtube.com'>
            <IconButton
              aria-label='YouTube'
              icon={<FaYoutube />}
              colorScheme='red'
            />
          </Link>
        </Stack>
        <Flex justifyContent='center' mt={4}>
          <Text fontSize='sm'>
            &copy; 2023 My Website. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
