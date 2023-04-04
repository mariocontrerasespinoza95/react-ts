import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, color = 'primary', onClick }: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
