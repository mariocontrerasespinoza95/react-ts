import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

interface Props extends PropsWithChildren {
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, color = 'primary', onClick }: Props) => {
    return (
        <button
            className={[styles.btn, styles['btn-' + color]].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
