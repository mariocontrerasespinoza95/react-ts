import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 89 ? 'green' : score > 69 ? 'yellow' : 'red';
    return (
        <Badge
            fontSize={'14px'}
            paddingX={2}
            borderRadius={'4px'}
            colorScheme={color}
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
