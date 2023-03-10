import Header from "../../components/Header/Header";
import styles from "./CareerPage.module.scss";
import { useState } from 'react';
import { send } from 'emailjs-com';
import { Alert } from "@mui/material";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";

const CareerPage = () => {
    const [toSend, setToSend] = useState({
        name: '',
        phone: '',
        email: '',
        position: '',
    });

    const [success, setSuccess] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_4d3i5a8',
            'template_6rz0sex',
            toSend,
            'E2mXTQMVNqLrvH6rQ',
        )
            .then((response) => {
                setSuccess(true)
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <div>
            <Header />
            <HeaderMobile />
            <div className={styles.formWrapper}>
                {success && <Alert severity="success">Заявка успешно отправлена</Alert>}
                <form>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            name="name"
                            placeholder="Ваше имя"
                            type="text"
                            onChange={handleChange}
                            value={toSend.name}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            name="phone"
                            placeholder="Телефон"
                            type="text"
                            onChange={handleChange}
                            value={toSend.phone}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            name="email"
                            placeholder="Email адрес"
                            type="text"
                            onChange={handleChange}
                            value={toSend.email}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            name="position"
                            placeholder="Должность"
                            type="text"
                            onChange={handleChange}
                            value={toSend.position}
                        />
                    </div>
                    {/* <div className={styles.inputWrapper}>
                        <div>
                            Добавить резюме:
                        </div>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            value={toSend.resume}
                        />
                    </div> */}
                    <div className={styles.inputWrapper}>
                        <button
                            className={styles.send}
                            onClick={onSubmit}
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CareerPage;