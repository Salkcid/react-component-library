import { MouseEventHandler, FC, ChangeEventHandler } from 'react';

declare type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const _: FC<ButtonProps>;

type Button_d_ButtonProps = ButtonProps;
declare const Button_d__: typeof _;
declare namespace Button_d {
  export {
    Button_d_ButtonProps as ButtonProps,
    Button_d__ as _,
  };
}

interface InputProps {
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

type Input_d_InputProps = InputProps;
declare namespace Input_d {
  export {
    Input as default,
    Input_d_InputProps as InputProps,
  };
}

export { Button_d as Button, Input_d as Input };
