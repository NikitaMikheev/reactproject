import React from "react";
import styles from "./Register.module.scss"
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userData";

export const Authentication = () => {
const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    interface DataType {
        userEmail: string,
        userPass: string,
    }
    const response: DataType = {
        userEmail: "",
        userPass: "",
    }

    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        response.userEmail = email;
        response.userPass = password;
        
        await axios.post('http://localhost:8000/authentication', response)
        .then(res => {
            console.log("Success");
            dispatch(setUserData({accessToken: res.data.accessToken, refreshToken: res.data.refreshToken, email: response.userEmail}))
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