import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Profile } from './Profile'
import { Logo } from './Logo'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWedeVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWedeVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />

      { isWedeVersion && <SearchBox /> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isWedeVersion} />
      </Flex>
    </Flex>
  )
}