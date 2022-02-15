import { FC, MouseEventHandler } from 'react';
export declare type Props = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export declare const _: FC<Props>;
