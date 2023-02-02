
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo_dark from '../assets/logo_dark.png';
import logo_light from '../assets/logo_light.png';
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('green.50', 'green.900')} p={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} p={4}>
        {colorMode === 'light' ? <Image src={logo_light} width='60px'/>: <Image src={logo_dark} width='60px'/>}
          
          <Box fontSize={22} as='b' fontWeight={'light'}> Tourism in Saudi Arabia</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} bg={useColorModeValue('green.50', 'green.900')} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}