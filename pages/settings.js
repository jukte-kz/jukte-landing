import Header from "../components/atoms/Header/component";
import {Label, Modal, Spinner, TextInput, Toast} from "flowbite-react";
import InputMask from "react-input-mask";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import '../utils/i18next';

export default function Settings () {
    const phoneMask = '+7-(999)-999-99-99';
    const binMask = '999999999999';
    const router = useRouter();
    const { t } = useTranslation();

    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [cancelReq, setCancelReq] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [iin, setIin] = useState('');

    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [bin, setBin] = useState('');
    const [iban, setIban] = useState('');

    const [directorName, setDirectorName] = useState('');
    const [directorSurname, setDirectorSurname] = useState('');

    const [carNumber, setCarNumber] = useState('');

    const [disabledIin, setDisabledIin] = useState(false);
    const [disabledCompanyName, setDisabledCompanyName] = useState(false);
    const [disabledCompanyBin, setDisabledCompanyBin] = useState(false);
    const [disabledCompanyIban, setDisabledCompanyIban] = useState(false);
    const [disabledCarNumber, setDisabledCarNumber] = useState(false);
    const [disabledPhone, setDisabledPhone] = useState(false);

    const toEndSettings = () => {
        router.push('/home')
    }

    const onChangePhone = useCallback((event) => {
        setPhone(event.target.value);
    }, []);
    const onChangeName = useCallback((event) => {
        setName(event.target.value);
    }, []);
    const onChangeSurname = useCallback((event) => {
        setSurname(event.target.value);
    }, []);
    const onChangeIin = useCallback((event) => {
        setIin(event.target.value);
    }, []);

    const onChangeCompanyAddress = useCallback((event) => {
        setCompanyAddress(event.target.value);
    }, []);
    const onChangeCompanyName = useCallback((event) => {
        setCompanyName(event.target.value);
    }, []);
    const onChangeBin = useCallback((event) => {
        setBin(event.target.value);
    }, []);
    const onChangeIban = useCallback((event) => {
        setIban(event.target.value);
    }, []);

    const onChangeDirectorName = useCallback((event) => {
        setDirectorName(event.target.value);
    }, []);
    const onChangeDirectorSurname = useCallback((event) => {
        setDirectorSurname(event.target.value);
    }, []);

    const onChangeCarNumber = useCallback((event) => {
        setCarNumber(event.target.value);
    }, []);

    useEffect(() => {
        if (!cancelReq) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/user/info',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                console.log(res);
                setUserInfo(res.data);
                setCancelReq(true);
                setLoading(true);
                setName(res.data.name);
                setSurname(res.data.surname);
                setIin(res.data.iin);
                setPhone(res.data.phone);
                setCompanyName(res.data.company.name);
                setCompanyAddress(res.data.company.contacts.address);
                setBin(res.data.company.bin);
                setIban(res.data.company.account);
                setDirectorName(res.data.company.director.name);
                setDirectorSurname(res.data.company.director.surname);
                setCarNumber(Cookies.get('carNumber'));
            }).catch((err) => {
                if (err) {
                    setCancelReq(true);
                }
            })
        }
        if (userInfo) {
            if (userInfo.iin) {
                setDisabledIin(true);
            }
            if (userInfo.company.name) {
                setDisabledCompanyName(true);
            }
            if (userInfo.company.bin) {
                setDisabledCompanyBin(true);
            }
            if (userInfo.company.account) {
                setDisabledCompanyIban(true);
            }
            if (userInfo.company.director.name) {
                setDisabledCarNumber(true);
            }
            if (userInfo.phone) {
                setDisabledPhone(true);
            }
        }
    })

    const sendUserData = () => {
        Cookies.set('carNumber', carNumber);
        axios({
            method: 'put',
            url: 'https://api.jukte.kz/user/',
            data: qs.stringify({
                personal: {
                    name: name,
                    surname: surname,
                    iin: iin,
                    phone: phone.replace(/(-)|\+|\(|\)/g, ''),
                },
                company: {
                    name: companyName,
                    account: iban.toUpperCase(),
                    bin: bin,
                    director: {
                        name: directorName,
                        surname: directorSurname,
                        iin: '981103350587',
                    },
                    contacts: {
                        address: companyAddress,
                    }
                },
                transport: {
                    number: carNumber,
                },
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                token: Cookies.get('accessToken')
            }
        }).then((res) => {
            if(res) {
                setShowToast(true);
            }
        })
    }

    return (
        <div>
            <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true} />
            <div className='settings-main py-6 px-4'>
                <h1>{t("home.settings")}</h1>
                <hr className='mt-4' />
                <div className='mt-6 p-4 rounded flex items-center bg-[#4F52FF]'>
                    <img src="/assets/icon/warning.svg" alt=""/>
                    <div>
                        <p className='ml-4 text-white'>
                            {t("settings.warning")} <b>{t("registration.warningBold")}</b>
                        </p>
                    </div>
                </div>
                <div className="form-section mt-6 border-2 p-4">
                    <h4>{t("settings.myInfo")}</h4>
                    {userInfo && (
                        <form className='flex flex-col mt-4 login-form'>
                            {loading ? (
                                <div className='mb-auto'>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="name"
                                                value={t("registration.name")}
                                            />
                                        </div>
                                        <InputMask value={name} maskChar={null} onChange={onChangeName}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="name"
                                                    type="text"
                                                    placeholder={name}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="surname"
                                                value={t("registration.surname")}
                                            />
                                        </div>
                                        <InputMask value={surname} maskChar={null} onChange={onChangeSurname}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="surname"
                                                    type="text"
                                                    placeholder={surname}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="iin"
                                                value={t("settings.iinLabel")}
                                            />
                                        </div>
                                            <TextInput
                                                disabled={disabledIin}
                                                onChange={onChangeIin}
                                                value={iin}
                                                id="iin"
                                                type="tel"
                                                placeholder={iin}
                                                required={true}
                                                sizing="lg"
                                            />
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="phone"
                                                value={t("settings.phone")}
                                            />
                                        </div>
                                        <InputMask value={phone} maskChar={null} disabled={disabledPhone} onChange={onChangePhone} mask={phoneMask}>
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
                                </div>
                            ) : (
                                <div className='w-full flex items-center justify-center'>
                                    <div className="text-center">
                                        <Spinner aria-label="Center-aligned spinner example" />
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
                <div className="form-section mt-6 border-2 p-4">
                    <h4>{t("settings.companyTitle")}</h4>
                    {userInfo && (
                        <form className='flex flex-col mt-4 login-form'>
                            {loading ? (
                                <div className='mb-auto'>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="companyName"
                                                value={t("settings.companyName")}
                                            />
                                        </div>
                                        <TextInput
                                            disabled={disabledCompanyName}
                                            onChange={onChangeCompanyName}
                                            value={companyName}
                                            id="companyName"
                                            type="text"
                                            placeholder={companyName}
                                            required={true}
                                            sizing="lg"
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="companyAddress"
                                                value={t("settings.companyAddress")}
                                            />
                                        </div>
                                        <TextInput
                                            onChange={onChangeCompanyAddress}
                                            value={companyAddress}
                                            id="companyAddress"
                                            type="text"
                                            placeholder={companyAddress ? (companyAddress) : (t("settings.companyPlaceholder"))}
                                            required={true}
                                            sizing="lg"
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="bin"
                                                value={t("settings.companyBin")}
                                            />
                                        </div>
                                            <TextInput
                                                value={bin}
                                                disabled={disabledCompanyBin}
                                                onChange={onChangeBin}
                                                id="bin"
                                                type="tel"
                                                placeholder={bin}
                                                required={true}
                                                sizing="lg"
                                            />
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="iban"
                                                value={t("settings.companyIban")}
                                            />
                                        </div>
                                            <TextInput
                                                disabled={disabledCompanyIban}
                                                onChange={onChangeIban}
                                                value={iban}
                                                id="iban"
                                                type="text"
                                                placeholder={iban}
                                                required={true}
                                                sizing="lg"
                                            />
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full flex items-center justify-center'>
                                    <div className="text-center">
                                        <Spinner aria-label="Center-aligned spinner example" />
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
                {userInfo && (
                    userInfo.role === 'driver' && (
                        <div className="form-section mt-6 border-2 p-4">
                            <h4>{t("settings.companyCarNumberTitle")}</h4>
                            <form className='flex flex-col mt-4 login-form'>
                                {loading ? (
                                    <div className='mb-auto'>
                                        <div className='input-container'>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="carNumber"
                                                    value={t("settings.companyCarNumber")}
                                                />
                                            </div>
                                            <TextInput
                                                id="carNumber"
                                                type="text"
                                                disabled={disabledCarNumber}
                                                placeholder={directorName}
                                                onChange={onChangeDirectorName}
                                                value={directorName}
                                                required={true}
                                                sizing="lg"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='w-full flex items-center justify-center'>
                                        <div className="text-center">
                                            <Spinner aria-label="Center-aligned spinner example" />
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    )
                )}
                <button type='button' className='flex items-center settings-button px-4 mt-4' onClick={sendUserData}>
                    <p className="w-full">{t("home.save")}</p>
                </button>
            </div>
            <Modal
                show={showToast}
                position="center"
            >
                <Modal.Body>
                    <div className='w-full success-container z-10'>
                        <p className='text-center'>{t("settings.saveSuccessModal")}</p>
                        <div className="success-animation mt-6">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='w-full redirect-button' onClick={toEndSettings}>
                        {t("home.mainPage")}
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
