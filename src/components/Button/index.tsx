import React from "react";
import styles from "./Button.module.scss"
import { getUserAccess, getUserEmail, getUserRefresh } from "../../store/userData/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface TProps {
    btn: {
        type: string,
        color: string
    }
}

export const Button = (props: TProps) => {
    const email = useSelector(getUserEmail);
    const access = useSelector(getUserAccess);
    const refresh = useSelector(getUserRefresh);

    if(access && refresh && email) {
        return (
            <Link to={"/logout"} className={`${styles.button} ${props.btn.type} ${props.btn.color} modal--open`}>Выйти</Link> 
        )
    }

    else {
        return (
            <>
            <Link to={"/register"} className={`${styles.button} ${props.btn.type} ${props.btn.color} modal--open`}>Регистрация</Link>
            <Link to={"/login"} className={`${styles.button} ${props.btn.type} ${props.btn.color} modal--open`}>Войти</Link>
            </>
        )
    }
}