import React from 'react';
import { Button, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

function ModalDelete({ isOpen, handleDelete, onOpen }) {
    return (
        <Modal onClose={onOpen} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontSize='24px'>Delete Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>are you really going to delete this post?</Text>
                </ModalBody>
                <ModalFooter>
                    <Button mr={2} onClick={() => closeModal(false)}>Cancel</Button>
                    <Button colorScheme='red' onClick={handleDelete}>Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalDelete