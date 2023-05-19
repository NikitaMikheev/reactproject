import React from "react";
import styles from "./Register.module.scss"
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userData";
import { useSelector } from "react-redux";
import { getUserAccess, getUserEmail, getUserRefresh } from "../store/userData/selectors";
import { useNavigate } from "react-router-dom";


export const UserPage = () => {
const dispatch = useDispatch();
    const [userID, setID] =  useState("");
    const refresh = useSelector(getUserRefresh);
    const access = useSelector(getUserAccess);
    const email = useSelector(getUserEmail);

    interface DataType {
        userID: number
    }
    const response: DataType = {
        userID: 0
    }
    const navigate = useNavigate();

    const updateToken = async () => {
        const userToken = {
            token: refresh
        }

        await axios.post('http://localhost:8000/authentication/refresh', userToken)
        .then(res => {
            dispatch(setUserData({accessToken: res.data.accessToken, refreshToken: res.data.refreshToken, email: email}))
            // requestAPI(response);
        })
        .catch(error => {
          navigate('/login');
        });
    }

    const requestAPI = async (response: DataType) => {

        await axios.get('http://localhost:8000/user', {params: {id: response.userID}, headers: { Authorization: `Bearer ${access}` }})
        .then(res => {
            console.log("Success");
            console.log(res);
        })
        .catch(error => {
          updateToken();
        });
    }

    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        response.userID = Number(userID);
        
        requestAPI(response)
    }

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value);
    }

    return (
        <div className={`${styles.wrapp} ${styles.flex}`}>                       
            <div className={styles.form}>
                <h2 className={styles.title}>Получить пользователя по ID</h2>
                <form onSubmit={onSubmitHandler} className="form" method="get">
                    <div className="form__field">
                        <input type="number" name="ID" className={styles.input__field} onChange={(e)=>inputChangeHandler(setID, e)} placeholder="Введите ID *" required/>
                    </div>
                    <div className={`${styles.footer} ${styles.flex}`}>
                        <button type="submit" className={`${styles.button} form__submit ${styles.primary}`}>Получить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}