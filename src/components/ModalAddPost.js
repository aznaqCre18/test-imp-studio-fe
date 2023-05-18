import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, ModalFooter, Button, FormLabel, Input, FormErrorMessage, Textarea, Select } from '@chakra-ui/react';

const ModalAddPost = ({ isOpen, onClose, handleAddPost, hookForm }) => {
    const { 
        register,
        handleSubmit,
        formState: { errors }
     } = hookForm;

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Post</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleAddPost)}>
                    <ModalBody>
                        <FormControl mb={5} isInvalid={errors.title}>
                            <FormLabel>User ID</FormLabel>
                            <Select id="userId" {...register("userId")}>
                                {Array.from({ length: 10 }, (_, index) => index + 1).map((userId) => (
                                    <option key={userId} value={userId}>{userId}</option>
                                ))}
                            </Select>
                            <FormErrorMessage>
                                {errors.userId && errors.userId.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={5} isInvalid={errors.title}>
                            <FormLabel>Title</FormLabel>
                            <Input type='text' placeholder='Input your title' {...register('title', { required: "Title is required!" })} />
                            <FormErrorMessage>
                                {errors.title && errors.title.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.body}>
                            <FormLabel>Body</FormLabel>
                            <Textarea height='300px' placeholder='Input your story here...' resize='none' {...register('body', { required: "Body is required!" })} />
                            <FormErrorMessage>
                                {errors.body && errors.body.message}
                            </FormErrorMessage>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost'>Cancel</Button>
                        <Button type="submit" colorScheme='whatsapp' mr={3}>Submit</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default ModalAddPost
