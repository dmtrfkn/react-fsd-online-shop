import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum themeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: themeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {theme, className, children, ...otherProps} = props;
    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};

