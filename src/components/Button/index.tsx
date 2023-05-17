import React from "react";
import styles from "./Button.module.scss"

interface TProps {
    btn: {
        type: string,
        color: string
    }
}

export const Button = (props: TProps) => {
    return (
        <a className={`${styles.button} ${props.btn.type} ${props.btn.color} modal--open`} href="/register">Регистрация</a>
    )
}