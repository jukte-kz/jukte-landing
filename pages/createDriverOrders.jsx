import Header from "../components/atoms/Header/component";
import {Label, Modal, Textarea, TextInput} from "flowbite-react";
import InputMask from "react-input-mask";
import {useCallback, useEffect, useRef, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import qs from "qs";
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import React from "react";
import Script from "next/script";
import {useRouter} from "next/router";
import { ru } from 'date-fns/locale';
import {transportUp} from "../public/assets/data/transportUp";
import {transport} from "../public/assets/data/transportType";
import moment from "moment";
import '../utils/i18next';
import { useTranslation } from "react-i18next";

export default function createDriverOrders() {
    const weightMask = 'тонн | 99';
    const cubMask = 'м3 | 999';

    const [product, setProduct] = useState(' ');
    const [transfer, setTransfer] = useState('');
    const [transfer_1, setTransfer_1] = useState('');
    const [transfer_2, setTransfer_2] = useState('');
    const [transfer_3, setTransfer_3] = useState('');
    const [transfer_4, setTransfer_4] = useState('');
    const [transfer_5, setTransfer_5] = useState('');
    const [description, setDescription] = useState('');
    const [distance, setDistance] = useState('');
    const [weight, setWeight] = useState('');
    const [cubProduct, setCubProduct] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);
    const [date, endDate] = dateRange;
    const [fromPoint, setFromPoint] = useState('');
    const [toPoint, setToPoint] = useState('');
    const [transportType, setTransportType] = useState('');
    const [transportLoading, setTransportLoading] = useState('');
    const [price, setPrice] = useState('');
    const [logPrice, setLogPrice] = useState('');
    const [checkCalc, setCheckCalc] = useState(false);
    const [checkSendOrder, setCheckSendOrder] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLawError, setShowLawError] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [cancel, setCancel] = useState(false);

    const mapRef = useRef();
    const router = useRouter();
    const { t } = useTranslation();

    const onChangeDescription = useCallback((event) => {
        setDescription(event.target.value);
    }, []);
    const onChangeProduct = useCallback((event) => {
        setProduct(event.target.value);
    }, []);
    const onChangeTransfer_1 = useCallback((event) => {
        setTransfer_1(event.target.value);
    }, []);
    const onChangeTransfer_2 = useCallback((event) => {
        setTransfer_2(event.target.value);
    }, []);
    const onChangeTransfer_3 = useCallback((event) => {
        setTransfer_3(event.target.value);
    }, []);
    const onChangeTransfer_4 = useCallback((event) => {
        setTransfer_4(event.target.value);
    }, []);
    const onChangeTransfer_5 = useCallback((event) => {
        setTransfer_5(event.target.value);
    }, []);
    const onChangeWeight = useCallback((event) => {
        setWeight(event.target.value.split(' ')[2]);
    })
    const onChangeCubProduct = useCallback((event) =>  {
        setCubProduct(event.target.value.split(' ')[2]);
    })

    useEffect(() => {
        setCheckCalc(distance.length > 0 && weight.length > 0)
        setCheckSendOrder(
            distance.length > 0 &&
            weight.length > 0 && date &&
            description.length > 0 &&
            parseInt(price.replace(/\s/g, '')) > 0);
    })

    useEffect(() => {
        if (parseInt(weight) > 22) {
            if (transportType !== 'Тралл' && transportType !== 'Самосвал') {
                setShowLawError(true);
            }
        } else {
            setShowLawError(false);
        }
    })

    const onChangeDate = (update) => {
        setDateRange(update);
    }
    const onChangeSelect = (e) => {
        setTransportLoading(e.label);
    }

    const sendOrderData = () => {
        axios({
            method: 'post',
            url: 'https://api.jukte.kz/orders/',
            data: qs.stringify({
                product: product,
                description: description,
                price: parseInt(price.replace(/\s/g, '')),
                weight: parseInt(weight.replace(/\s/g, '')),
                date: `${moment(date).format('L')} - ${moment(endDate).format('L')}`,
                type: transportType,
                from: fromPoint,
                to: toPoint,
                loadType: transportLoading,
                cubProduct: cubProduct,
                logPrice: parseInt(logPrice.replace(/\s/g, '')),
                distance: parseInt(distance.replace(/\s/g, '')),
                transfer: transfer,
                time: new Date(),
                ownerCompany: Cookies.get('companyName')
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                token: Cookies.get('accessToken')
            }
        }).then((res) => {
            if (res.status === 200) {
                setShowModal(true);
            }
        })
    }

    const handleClick = event => {
        setShowTransferModal(!showTransferModal)
    };

    const transferEnd = useCallback(() => {
        setTransfer(transfer_1+' '+transfer_2+' '+transfer_3+' '+transfer_4+' '+transfer_5);
        handleClick();
    });

    useEffect(() => {
        if (!cancel) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/user/info',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                setTransportType(res.data.transport.type);
                setCancel(true)
            }).catch((err) => {
                if (err) {
                    setCancel(true)
                }
            })
        }
    })

    const calcPrice = () => {
        let corrDistance = parseInt(distance.replace(/\s/g, ''));
        let transportObj = transport.filter(obj => {
            return obj.label === transportType
        })
        let transportPrice = transportObj[0].price
        if (transportPrice === 27) {
            let totalPrice = transportPrice * parseFloat(weight) * corrDistance - ((transportPrice * parseFloat(weight) * corrDistance)*0.1);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.1;
            setLogPrice(logPriceCalc + ' ₸');
        } else {
            let totalPrice = corrDistance * transportPrice - ((corrDistance * transportPrice)*0.1);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.1;
            setLogPrice(logPriceCalc + ' ₸');
        }
    }
    const endCreateOrder = () => {
        setShowModal(false);
        router.push('/home');
    }

    return (
        <div>
            <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true}/>
            <div className='settings-main py-6 px-4'>
                <h1>{t("createOrders.title")}</h1>
                <hr className='mt-4' />
                <form className='flex flex-col mt-4 login-form'>
                    <div className='mb-auto'>
                        <div className='w-full mb-4 relative' style={{
                            height: '400px'
                        }}>
                            <div id='map' ref={mapRef}></div>
                            <Script
                                id="yandex-maps"
                                src="https://api-maps.yandex.ru/2.1/?apikey=0fb09044-5132-48a3-8653-02425b40b298&lang=ru_RU"
                                onLoad={() => {
                                    ymaps.ready(init);
                                    function init(){
                                        let myMap = new ymaps.Map(mapRef.current, {
                                            center: [51.128207, 71.430420],
                                            zoom: 9,
                                            controls: ['routePanelControl']
                                        });
                                        let control = myMap.controls.get('routePanelControl');
                                        control.routePanel.options.set({
                                            types: {
                                                auto: true,
                                                pedestrian: false,
                                            }
                                        });
                                        let multiRoutePromise = control.routePanel.getRouteAsync();
                                        multiRoutePromise.then(function(multiRoute) {
                                            multiRoute.model.events.add('requestsuccess', function() {
                                                let activeRoute = multiRoute.getActiveRoute();
                                                if (activeRoute) {
                                                    setDescription(activeRoute.properties.get("duration").text);
                                                    setDistance(activeRoute.properties.get("distance").text);
                                                    setFromPoint(control.routePanel.state.get('from'));
                                                    setToPoint(control.routePanel.state.get('to'));
                                                }
                                            });
                                        }, function (err) {
                                            console.log(err);
                                        });
                                    }
                                }}
                            />
                        </div>
                        <div className='input-container' onClick={handleClick}>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="transfer"
                                    value={t("createOrders.transfer")}
                                />
                            </div>
                            <TextInput
                                id="transfer"
                                type="text"
                                value={transfer}
                                placeholder={t("createOrders.transfer")}
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="desc"
                                    value={t("createOrders.detail")}
                                />
                            </div>
                            <Textarea value={product} onChange={onChangeProduct} />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="surname"
                                    value={t("createOrders.date")}
                                />
                            </div>
                            <DatePicker
                                selected={date}
                                dateFormat="dd.MM.yyyy"
                                onChange={onChangeDate}
                                startDate={date}
                                endDate={endDate}
                                placeholderText="ДД.ММ.ГГГГ - ДД.ММ.ГГГГ"
                                dateFormatCalendar="MMMM"
                                className='block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-4'
                                yearDropdownItemNumber={100}
                                scrollableYearDropdown
                                minDate={new Date()}
                                selectsRange={true}
                                isClearable={true}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                locale={ru}
                            />
                        </div>
                        <div className='input-container'>
                            <div className='mb-2 block'>
                                <Label htmlFor="transport" value={t("createOrders.upTransport")} />
                            </div>
                            <Select
                                className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-2"
                                classNamePrefix="name"
                                placeholder={t("createOrders.upTransport")}
                                options={transportUp}
                                onChange={onChangeSelect}
                                isSearchable={false}
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="weight"
                                    value={t("createOrders.weight")}
                                />
                            </div>
                            <InputMask value={weight} maskChar={null} onChange={onChangeWeight} mask={weightMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        id="distance"
                                        type="tel"
                                        placeholder='тонн | 0'
                                        required={true}
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="cubProduct"
                                    value={t("createOrders.cubometr")}
                                />
                            </div>
                            <InputMask value={cubProduct} maskChar={null} onChange={onChangeCubProduct} mask={cubMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        onChange={onChangeCubProduct}
                                        value={cubProduct}
                                        id="distance"
                                        type="tel"
                                        placeholder='м3 | 0'
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="distance"
                                    value={t("createOrders.distance")}
                                />
                            </div>
                            <TextInput
                                disabled
                                id="distance"
                                type="tel"
                                value={distance}
                                placeholder='0 км'
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="desc"
                                    value={t("createOrders.time")}
                                />
                            </div>
                            <TextInput
                                onChange={onChangeDescription}
                                value={description}
                                disabled
                                id="desc"
                                type="text"
                                placeholder="0 ч."
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="price"
                                    value={t("createOrders.price")}
                                />
                            </div>
                            <TextInput
                                disabled
                                id="price"
                                value={price}
                                placeholder='0 ₸'
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="price"
                                    value={t("createOrders.priceLogistician")}
                                />
                            </div>
                            <TextInput
                                disabled
                                id="price"
                                value={logPrice}
                                placeholder='0 ₸'
                                required={true}
                                sizing="lg"
                            />
                        </div>
                    </div>
                </form>
                <button type='button' disabled={!checkCalc} className='flex items-center settings-button px-4 mt-4' onClick={calcPrice}>
                    <p className="w-full">{t("createOrders.calc")}</p>
                </button>
                <button type='button' disabled={!checkSendOrder} className='flex items-center settings-button px-4 mt-4' onClick={() => {
                    sendOrderData();
                }}>
                    <p className="w-full">{t("createOrders.confirmOrder")}</p>
                </button>
            </div>
            <Modal
                show={showModal}
                position="center"
            >
                <Modal.Body>
                    <div className='w-full success-container'>
                        <p className='text-center'>{t("createOrders.orderSuccess")}</p>
                        <div className="success-animation mt-6">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='w-full redirect-button' onClick={endCreateOrder}>
                        {t("home.mainPage")}
                    </button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showTransferModal}
                position="center"
                id='modalTransfer'
            >
                <Modal.Body>
                    <button className='mb-4' onClick={handleClick}>
                        <img src="/assets/icon/left-arrow.svg" alt=""/>
                    </button>
                    <div className='w-full success-container'>
                        <div className='input-container mb-4'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="transfer1"
                                    value={t("createOrders.transfer")+" 1"}
                                />
                            </div>
                            <TextInput
                                onChange={onChangeTransfer_1}
                                id="transfer1"
                                value={transfer_1}
                                placeholder=''
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container mb-4'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="transfer2"
                                    value={t("createOrders.transfer")+" 2"}
                                />
                            </div>
                            <TextInput
                                onChange={onChangeTransfer_2}
                                id="transfer2"
                                value={transfer_2}
                                placeholder=''
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container mb-4'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="transfer3"
                                    value={t("createOrders.transfer")+" 3"}
                                />
                            </div>
                            <TextInput
                                onChange={onChangeTransfer_3}
                                id="transfer3"
                                value={transfer_3}
                                placeholder=''
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container mb-4'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="transfer4"
                                    value={t("createOrders.transfer")+" 4"}
                                />
                            </div>
                            <TextInput
                                onChange={onChangeTransfer_4}
                                id="transfer4"
                                value={transfer_4}
                                placeholder=''
                                required={true}
                                sizing="lg"
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="transfer5"
                                    value={t("createOrders.transfer")+" 5"}
                                />
                            </div>
                            <TextInput
                                onChange={onChangeTransfer_5}
                                id="transfer5"
                                value={transfer_5}
                                placeholder=''
                                required={true}
                                sizing="lg"
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='w-full redirect-button w-full' onClick={transferEnd}>
                        {t("home.save")}
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
