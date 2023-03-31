import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Navbar.css'

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";

const NavbarData = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
     <div h={'auto'} b={'2px solid red'} >
     <Box bg={useColorModeValue("white", "gray.900")} px={4} w="100%">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box w={"200px"}>
            <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" />
          </Box>
          <Box>
            {/* <Search2Icon mr={'70px'} /> */}
            <Box>
              <Input
                w={"550px"}
                mr={"150px"}
                variant="outline"
                placeholder="Search"
                border="2px solid"
                focusBorderColor="blackAlpha.300"
                borderColor="blackAlpha.300"
                bg="white"
              />
            </Box>
            {/* <input mr={'20px'}
              placeholder="Find Lipstick, Eyeliner,MakeUp Tutorial,etc"
              w="200px"
            /> */}
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        <Flex>
        
        {/* <div className="dropdown">
      <button className="dropbtn">MEN</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div> */}
      
          <NavLink to="/" className={'AllTabs'}>HOME</NavLink>
          <Spacer />
          <NavLink to="/Makeup" className={'AllTabs'}>MAKEUP</NavLink>
          <Spacer />
          <NavLink to="/HairCare" className={'AllTabs'}>HAIR CARE</NavLink>
          <Spacer />
          <NavLink to="/Bath Body" className={'AllTabs'}>BATH & BODY</NavLink>
          <Spacer />
          <NavLink to="/SkinCare" className={'AllTabs'}>SKINCARE</NavLink>
          <Spacer />
          <NavLink to="/Sanitizing Care" className={'AllTabs'}>SANITIZING CARE</NavLink>
          <Spacer />
          <NavLink to="/Collection" className={'AllTabs'}>COLLECTION</NavLink>
          <Spacer />
          <NavLink to="/Rewards" className={'AllTabs'}>REWARDS</NavLink>
          <Spacer />
          <NavLink to="/MyglammStudio" className={'AllTabs'}>MYGLAMM STUDIO</NavLink>
          <Spacer />
          <NavLink to="/Offers" className={'AllTabs'}>OFFERS</NavLink>
        </Flex>
      </Box>
     </div>
     {/* <br/> */}
     <hr style={{marginTop:'10px'}} />
    </div>
  )
}
