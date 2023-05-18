import React from 'react';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

const TablePost = ({ columns, data }) => {
    const TableHead = ({item}) => (
        <Th style={{ textTransform: 'uppercase' }}>{item.name}</Th>
    )

    const TableRow = ({item, columns}) => (
        <Tr>
            {
                columns.map(column => {
                    if (column.action) {
                        return (
                            <Td>{column.action(item)}</Td>
                        )
                    }

                    return (
                        <Td>{column.Cell ? column.Cell(item[`${column.acessor}`]) : item[`${column.acessor}`]}</Td>
                    )
                })
            }
        </Tr>
    )

    return (
        // <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        {columns.map(item => <TableHead item={item} />)}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => <TableRow item={item} columns={columns} />)}
                </Tbody>
            </Table>
        // </TableContainer>
    )
}

export default TablePost
