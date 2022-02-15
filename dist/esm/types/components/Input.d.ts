import { FC, ChangeEventHandler } from 'react';
export interface Props {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const _: FC<Props>;
