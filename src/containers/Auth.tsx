import React from "react";
import styles from "./Register.module.scss"
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userData";
import { useNavigate } from "react-router-dom";

export const Authentication = () => {
const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    interface DataType {
        email: string,
        password: string,
    }
    const response: DataType = {
        email: "",
        password: "",
    }

    const navigate = useNavigate();
    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        response.email = email;
        response.password = password;
        
        await axios.post('http://localhost:8000/authentication', response)
        .then(res => {
            console.log("Success");
            navigate('/');
            dispatch(setUserData({accessToken: res.data.accessToken, refreshToken: res.data.refreshToken, email: response.email}))
                                    
            localStorage.setItem('email', response.email );
            localStorage.setItem('accessToken', res.data.accessToken );
            localStorage.setItem('refreshToken', res.data.refreshToken);
        })
        .catch(error => {
          console.log(error)
        });
    }

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value);
    }

    return (
        <div className={`${styles.wrapp} ${styles.flex}`}>                       
            <div className={styles.form}>
                <h2 className={styles.title}>Авторизация</h2>
                <form onSubmit={onSubmitHandler} className="form">
                    <div className="form__field">
                        <input type="email" name="email" className={styles.input__field} onChange={(e)=>inputChangeHandler(setEmail, e)} placeholder="Введите email *" required/>
                    </div>
                    <div className="form__field">
                        <input type="password" name="password" className={styles.input__field} onChange={(e)=>inputChangeHandler(setPassword, e)} placeholder="Введите пароль *" required/>
                    </div>
                    <div className={`${styles.footer} ${styles.flex}`}>
                        <button type="submit" className={`${styles.button} form__submit ${styles.primary}`}>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}