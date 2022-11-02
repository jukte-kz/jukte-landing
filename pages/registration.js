import Header from "../components/atoms/Header/component";
import {Label, TextInput, Modal} from "flowbite-react";
import InputMask from "react-input-mask";
import Image from "next/image";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";
import {useRouter} from "next/router";
import {transport} from "../public/assets/data/transportType";
import Select from "react-select";
import Cookies from "js-cookie";

export default function Registration () {
    const phoneMask = '+7-(999)-999-99-99';
    const otpMask = '999999';
    const passwordMask = '999999';
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(String);
    const [iin, setIin] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [transportType, setTransportType] = useState('');
    const [role, setRole] = useState('');
    const [lawData, setLawData] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errMessage, setErrMesage] = useState('');
    const [checkComplete, setCheckComplete] = useState(false);
    const [otpCheckComplete, setOtpCheckComplete] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [successText, setSuccessText] = useState(false);
    const [showTeleErr, setShowTeleErr] = useState(false);

    const router = useRouter();

    const onChangePhone = useCallback((event) => {
        setPhone(event.target.value);
    }, []);

    const onChangeOtp = useCallback((event) => {
        setOtp(event.target.value);
    }, [])

    const onChangeIin = useCallback((event) => {
        setIin(event.target.value);
    }, [])

    const onChangeName = useCallback((event) => {
        setName(event.target.value);
    }, [])

    const onChangeSurname = useCallback((event) => {
        setSurname(event.target.value);
    }, [])

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const onChangeSelect = (e) => {
        setTransportType(e.label)
    }

    const onChangeRole = (e) => {
        setRole(e.target.value)
    }
    const onChangeLawData = () => {
        setLawData(!lawData)
    }
    const toEndRegister = () => {
        setShowModal(false);
        router.push('/login');
    }

    const postRegister = () => {
        axios({
            method: 'post',
            url: 'https://api.jukte.kz/auth/register',
            data: qs.stringify({
                phone: phone.replace(/(-)|\+|\(|\)/g, ''),
                password: password,
                transportWeight: '20',
                transportType: transportType,
                role: role,
                name: name,
                surname: surname,
                iin: iin,
            }),
        }).then((res) => {
            if (res.data) {
                setShowModal(true)
                Cookies.set('transportType', transportType);
            }
            setShowError(false)
        }).catch((err) => {
            if (err.response.data.message.includes('E11000')) {
                setShowError(true);
                setErrMesage('Такой пользователь уже зарегестрирован')
            }
            if (err.response.data.message === 'can\'t to deliver') {
                setShowTeleErr(true);
            }
        })
    }

    const toVerifyOtp = () => {
        axios({
            method: 'put',
            url: 'https://api.jukte.kz/auth/register/verify',
            data: qs.stringify({
                code: otp,
                phone: phone.replace(/(-)|\+|\(|\)/g, '')
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then((res) => {
            if (res.data) {
                setSuccessText(true)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setCheckComplete(
            phone.length === 18 && name.length > 0 &&
            surname.length > 0 && iin.length > 0 && password.length === 6 && role.length > 0
        )
        setOtpCheckComplete(
            otp.length === 6
        )
    })

    return (
        <div>
            <Header removeUrl='/' />
            <div className='registration-main'>
                <h1>Регистрация пользователя</h1>
                <p className='mt-2 mb-6'>
                    Введите данные для регистрации в <span>Jukte.kz</span>
                </p>
                <div className='mt-6 p-4 rounded flex items-center bg-[#4F52FF]'>
                    <img src="/assets/icon/warning.svg" alt=""/>
                    <div>
                        <p className='ml-4 text-warning'>
                            Внимание! ИИН вводятся один раз!
                            Просим вас вводить данные <b>корректно</b>.
                        </p>
                    </div>
                </div>
                <div className='py-2 mt-2 mb-4 rounded bg-blue-50'>
                    <div className='flex gap-2 radio-button-container'>
                        <div className="w-full flex items-center px-4">
                            <input id="default-checkbox" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="bordered-radio-0"
                                   className="py-4 ml-4 w-full text-md font-medium dark:text-gray-300">Я даю свое согласие на обработку личных данных</label>
                        </div>
                    </div>
                </div>
                <div className='py-2 mt-2 mb-4 rounded bg-blue-50'>
                    <div className="block px-4">
                        <Label
                            htmlFor="role"
                            value="Выберите свою деятельность"
                        />
                    </div>
                    <div className='flex gap-2 radio-button-container'>
                        <div className="w-1/2 flex items-center pl-4">
                            <input onChange={onChangeRole} id="bordered-radio-1" type="radio" value="logistician" name="bordered-radio"
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-radio-1"
                                   className="py-4 ml-2 w-full text-md font-medium dark:text-gray-300">Грузоотправитель</label>
                        </div>
                        <div className="w-1/2 flex items-center pl-4">
                            <input onChange={onChangeRole} id="bordered-radio-2" type="radio" value="driver" name="bordered-radio"
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-radio-2"
                                   className="py-4 ml-2 w-full text-md font-medium dark:text-gray-300">Грузоперевозчик</label>
                        </div>
                    </div>
                </div>
                <form className='flex flex-col registration-form'>
                    <div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Введите свое имя"
                                />
                            </div>
                            <TextInput
                                id="name"
                                type="text"
                                placeholder="Имя"
                                required={true}
                                sizing="lg"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="surname"
                                    value="Введите свою фамилию"
                                />
                            </div>
                            <TextInput
                                id="surname"
                                type="text"
                                placeholder="Фамилия"
                                required={true}
                                sizing="lg"
                                value={surname}
                                onChange={onChangeSurname}
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="iin"
                                    value="Введите ИИН (для нерезидентов Казахстана номер документа)"
                                />
                            </div>
                                <TextInput
                                    onChange={onChangeIin}
                                    value={iin}
                                    id="iin"
                                    type='tel'
                                    placeholder=""
                                    required={true}
                                    sizing="lg"
                                />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Введите номер телефона"
                                />
                            </div>
                            <InputMask value={phone} maskChar={null} onChange={onChangePhone} mask={phoneMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
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
                                    value="Придумайте 6-значный пин-код"
                                />
                            </div>
                            <InputMask value={password} maskChar={null} onChange={onChangePassword} mask={passwordMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        id="password"
                                        type="password"
                                        placeholder="Пароль"
                                        required={true}
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        {role === 'driver' && (
                            <div>
                                <div className='input-container'>
                                <div className='block'>
                                    <Label htmlFor="transport" value='Выберите тип транспорта' />
                                </div>
                                <Select
                                    className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-2"
                                    classNamePrefix="name"
                                    placeholder='Выберите тип транспорта'
                                    options={transport}
                                    onChange={onChangeSelect}
                                    isSearchable={false}
                                />
                            </div>
                            </div>
                        )}
                        {showError && (
                            <h2 className='flex items-center gap-2'>
                                <Image width={24} height={25} src='/assets/icon/attention.svg' alt='errorIcon' />
                                {errMessage}
                            </h2>
                        )}
                    </div>
                    <button type='button' disabled={!checkComplete} onClick={postRegister} className='flex items-center'>
                        <p className="w-full">Зарегестрироваться</p>
                    </button>
                </form>
            </div>
            <Modal
                show={showTeleErr}
                position='center'>
                <Modal.Header onClick={() => {
                    setShowTeleErr(false)
                }}>
                    Ошибка шлюза
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center">
                        К сожалению на данный момент мы не можем обслужить абонентов Tele2/Altel.
                        Для регистраций можете написать в техническую поддержку <a href="https://telegram.me/jukte/" className="text-[#4f52ff]">ПО ССЫЛКЕ</a> !
                    </p>
                </Modal.Body>
            </Modal>
            <Modal
                show={showModal}
                position="center"
            >
                <Modal.Body>
                    {successText ? (
                        <div className='w-full success-container'>
                            <p className='text-center'>Регистрация прошла успешно!</p>
                            <div className="success-animation mt-6">
                                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className="">
                            <p className="text-base leading-relaxed">
                                На номер <span className='violet-text'>{phone}</span> выслан <br/> 6-значный код, введите его для завершения регистрации.
                            </p>
                            <div className='input-container mt-6'>
                                <InputMask value={otp} maskChar={null} onChange={onChangeOtp} mask={otpMask}>
                                    {(inputProps) => (
                                        <TextInput
                                            {...inputProps}
                                            id="otp"
                                            type="text"
                                            placeholder="Введите код"
                                            required={true}
                                            sizing="lg"
                                        />
                                    )}
                                </InputMask>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {successText ? (
                        <button className='w-full redirect-button' onClick={toEndRegister}>
                            Завершить регистрацию
                        </button>
                    ): (
                        <button className='w-full redirect-button' disabled={!otpCheckComplete} onClick={toVerifyOtp}>
                            Подтвердить
                        </button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
