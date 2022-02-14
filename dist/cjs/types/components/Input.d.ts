import { FC, ChangeEventHandler } from 'react';
export interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: FC<InputProps>;
export default Input;
