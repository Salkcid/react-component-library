import { MouseEventHandler, FC, ChangeEventHandler } from 'react';

declare type Props$1 = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const _$1: FC<Props$1>;

declare namespace Button_d {
  export {
    Props$1 as Props,
    _$1 as _,
  };
}

interface Props {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const _: FC<Props>;

type Input_d_Props = Props;
declare const Input_d__: typeof _;
declare namespace Input_d {
  export {
    Input_d_Props as Props,
    Input_d__ as _,
  };
}

export { Button_d as Button, Input_d as Input };
