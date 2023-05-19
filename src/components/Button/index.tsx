import React from "react";
import styles from "./Button.module.scss"
import { getUserAccess, getUserEmail, getUserRefresh } from "../../store/userData/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../store/userData";
import axios from "axios";

interface TProps {
    btn: {
        type: string,
        color: string
    }
}

export const Button = (props: TProps) => {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    const access = useSelector(getUserAccess);
    const refresh = useSelector(getUserRefresh);
    const navigate = useNavigate();
    if(access && refresh && email) {
        const logoutHandler = async () => {
            const userToken = {
                token: refresh
            }
            await axios.post('http://localhost:8000/logout', userToken)
            .then(res => {
                console.log("Success");
                navigate('/');
                dispatch(setUserData({accessToken: "", refreshToken: "", email: ""}))

                localStorage.setItem('email', "" );
                localStorage.setItem('accessToken', "");
                localStorage.setItem('refreshToken', "");
            })
            .catch(error => {
              console.log(error)
            });
        }
        return (
            <Link to={"/logout"} className={`${styles.button} ${props.btn.type} ${props.btn.color} modal--open`} onClick={logoutHandler}>Выйти</Link> 
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