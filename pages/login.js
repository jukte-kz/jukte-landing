import Header from "../components/atoms/Header/component";
import {Label, TextInput} from "flowbite-react";
import Image from "next/image";
import InputMask from 'react-input-mask';
import {useCallback, useEffect, useState} from "react";
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import '../utils/i18next';

export default function Login() {
    const phoneMask = '+7-(999)-999-99-99';
    const passwordMask = '999999';
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [errMessage, setErrMesage] = useState('');
    const [checkComplete, setCheckComplete] = useState(false);
    const router = useRouter();
    const { t } = useTranslation();


    const onChangePhone = useCallback((event) => {
        setPhone(event.target.value);
        setError(undefined);
    }, []);

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
        setError(undefined);
    })

    useEffect(() => {
        setCheckComplete(phone.length === 18 && password.length > 0)
    })

    const postLogin = () => {
        axios({
            method: 'post',
            url: 'https://api.jukte.kz/auth/login',
            data: qs.stringify({
                phone: phone.replace(/(-)|\+|\(|\)/g, ''),
                password: password
            }),
        }).then((res) => {
            setShowError(false)
            Cookies.set('accessToken', res.data.accessToken)
            router.push('/home')
        }).catch((err) => {
            setError(err)
            if (err.response.data.message === 'User not found') {
                setErrMesage('Такого пользователя нету')
                setShowError(true)
            } if (err.response.data.message === 'Invalid credentials') {
                setErrMesage('Вы ввели неверный пароль')
                setShowError(true)
            }
        })
    }

    return (
        <div className=''>
            <Header removeUrl='/' mainHeader={true} />
            <div className='login-main'>
                <h1>{t("login.title")}</h1>
                <p className='mt-2'>{t("login.desc")} <span>Jukte.kz</span></p>
                <form className='flex flex-col pt-6 login-form'>
                    <div className='mb-auto'>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value={t("login.phone_number")}
                                />
                            </div>
                            <InputMask value={phone} maskChar={null} onChange={onChangePhone} mask={phoneMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        color={error && '#C92140'}
                                        id="phone"
                                        type="tel"
                                        placeholder="+7-777-777-77-77"
                                        required={true}
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value={t("login.password_label")}
                                />
                            </div>
                            <InputMask value={password} maskChar={null} onChange={onChangePassword} mask={passwordMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        id="password"
                                        type="password"
                                        placeholder={t("login.password")}
                                        required={true}
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        {showError && (
                            <h2 className='flex items-center gap-2'>
                                <Image width={24} height={25} src='/assets/icon/attention.svg' alt='errorIcon' />
                                {errMessage}
                            </h2>
                        )}
                    </div>
                    <button disabled={!checkComplete} type='button' onClick={postLogin} className='flex login-button items-center px-4'>
                        <p className="w-full">{t("login.btn")}</p>
                        <Image width={24} height={24} alt='arrow-icon' src='/assets/icon/right-arrow.svg'></Image>
                    </button>
                </form>
            </div>
        </div>
    )
}
