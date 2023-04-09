import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box width="300px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;
