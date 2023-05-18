import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, Box } from '@chakra-ui/react'
import React from 'react'

function DrawerDetail({ onClose, isOpen, title, body }) {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='md'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={28}>{title}</DrawerHeader>
          <DrawerBody>
            <Text as="b">CONTENT :</Text>
            <Box style={{backgroundColor: '#EEEEEE', borderRadius: 8}} py={4} px={4} mt={4}>
                <Text>{body}</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  )
}

export default DrawerDetail