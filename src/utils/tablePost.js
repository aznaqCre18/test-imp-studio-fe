import { Button, Flex } from "@chakra-ui/react";
import { ViewIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { limitText } from ".";

export const initialTablePost = (actionRow) => [
    {
        name: 'user id',
        acessor: 'userId'
    },
    {
        name: 'title',
        acessor: 'title',
    },
    {
        name: 'body',
        acessor: 'body',
        Cell: (data) => limitText(data, 50)
    },
    {
        name: 'action',
        acessor: '',
        action: (data) => (
            <Flex gap={3}>
                <Button onClick={() => actionRow('edit', data)} colorScheme='yellow'><EditIcon /></Button>
                <Button onClick={() => actionRow('delete', data)} colorScheme='red'><DeleteIcon /></Button>
                <Button onClick={() => actionRow('detail', data)} colorScheme='telegram'><ViewIcon/></Button>
            </Flex>
        )
    },
]