import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Icon,
  Text,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import Logo from '../Logo'
import { logout, setUserInfo } from '../../features/userSlice'
import { authFetch } from '../../request'

const  Header = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { colorMode, toggleColorMode } = useColorMode()
  const { currentUser } = useSelector(state => state.user)
  const bgColor = useColorModeValue('background.light', 'background.dark')
  const color = useColorModeValue('gray.800', 'white')
  const btnBgColor = useColorModeValue('blue.800', 'orange.300')
  const btnColor = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await authFetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user`,
				'GET',
				'',
      )
      dispatch(setUserInfo(user))
    }
    fetchUserData()
  }, [])

  const signout = () => {
    dispatch(logout())
    router.push('/auth')
  }

  return (
    <Box
      as="header"
      display='flex'
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      p={4}
      bg={bgColor}
      color={color}
      pos="fixed"
      top='0'
      left='0'
      zIndex='999'
    >
      <Logo />
      <Flex gap={4}>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="solid"
          color={btnColor}
          bgColor={btnBgColor}
          size='sm'
          _hover={{}}
        />
        {currentUser && (
          <Menu islazy>
            <MenuButton
              size='sm'
              as={Button}
              variant="ghost"
              p={2}
              transition='all 0.2s'
              _hover={{}}
              _active={{}}
              _focus={{}}
            >
              <Icon boxSize={5} as={AiOutlineUser} />
            </MenuButton>
            <MenuList minW={['50vw', '30vw', '15vw']}>
              <Text px={2} textAlign='center'>Hi, {currentUser.name}</Text>
              <MenuDivider />
              <MenuItem icon={<Icon boxSize={4} as={IoSettingsOutline} />}>
                <Text>setting</Text>
              </MenuItem>
              <MenuItem 
                icon={<Icon boxSize={4} as={IoLogOutOutline} />} 
                onClick={signout}
              >
                <Text>sign out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  )
}

export default Header
