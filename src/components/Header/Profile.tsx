import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diogo Ferreira</Text>
          <Text color="green.300" fontSize="small">
            diogomota21@gmail.com
            </Text>

        </Box>
      )}

      <Avatar size="md" name="Diogo mota" />
    </Flex>
  )
}