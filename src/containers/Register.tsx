import React from "react";
import styles from "./Register.module.scss"
import { useState } from "react";
import axios from "axios";

export const Register = () => {

    const [name, setName] =  useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");

    interface DataType {
        name: string,
        surname: string,
        email: string,
        password: string,
        confirmPassword: string,
        age: number
    }
    const response: DataType = {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: 0
    }

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        response.name = name;
        response.surname = surname;
        response.email = email;
        response.password = password;
        response.confirmPassword = confirmPassword;
        response.age = Number(age);

        axios.post('http://localhost:8000/register', response);
    }

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value);
    }

    return (
        <div className={`${styles.wrapp} ${styles.flex}`}>                       
            <div className={styles.form}>
                <h2 className={styles.title}>Регистрация</h2>
                <p>* обязательные поля</p>
                <form onSubmit={onSubmitHandler} className="form">
                    <div className="form__field">
                        <input type="text" name="name" className={styles.input__field} onChange={(e)=>inputChangeHandler(setName, e)} placeholder="Введите имя *" required/>
                    </div>
                    <div className="form__field">
                        <input type="text" name="surname" className={styles.input__field} onChange={(e)=>inputChangeHandler(setSurname, e)} placeholder="Введите фамилию *" required/>
                    </div>
                    <div className="form__field">
                        <input type="email" name="email" className={styles.input__field} onChange={(e)=>inputChangeHandler(setEmail, e)} placeholder="Введите email *" required/>
                    </div>
                    <div className="form__field">
                        <input type="password" name="password" className={styles.input__field} onChange={(e)=>inputChangeHandler(setPassword, e)} placeholder="Введите пароль *" required/>
                    </div>
                    <div className="form__field">
                        <input type="password" name="accesPassword" className={styles.input__field} onChange={(e)=>inputChangeHandler(setConfirmPassword, e)} placeholder="Подтвердите пароль *" required/>
                    </div>
                    <div className="form__field">
                        <input type="number" name="age" className={styles.input__field} onChange={(e)=>inputChangeHandler(setAge, e)} placeholder="Введите возраст *" required/>
                    </div>
                    <div className={`${styles.footer} ${styles.flex}`}>
                        <span className="span main-text">Регистрируясь, Вы соглашаетесь с <a href="404.html">политикой конфиденциальности</a></span>
                        <button type="submit" className={`${styles.button} form__submit ${styles.primary}`}>Регистрация</button>
                    </div>
                </form>
            </div>
        </div>
    )
}