import React from 'react'
import { Box, Stack, Skeleton } from '@chakra-ui/react'

const SkeletonLoading = () => {
  return (
    <Box p={24}>
        <Stack>
            <Skeleton height='40px' width='60%' style={{ margin: 'auto' }} />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    </Box>
  )
}

export default SkeletonLoading
