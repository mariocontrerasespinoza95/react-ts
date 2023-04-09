import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <Card
            borderRadius={10}
            width={'453.44px'}
            height={'407.09px'}
            overflow={'hidden'}
        >
            <Skeleton height={'200px'} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;
