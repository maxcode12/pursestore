import { HStack, Image, Spacer, Text } from '@chakra-ui/react'
import logo from '../assets/flat-logo.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='50px'/>
        <Text>FlatPurse App</Text>
        <Spacer/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar