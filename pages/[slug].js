import Header from "../components/atoms/Header/component";
import {Label, Modal, Textarea, TextInput} from "flowbite-react";
import InputMask from "react-input-mask";
import {useCallback, useEffect, useRef, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import qs from "qs";
import DatePicker from 'react-datepicker';
import MaskedInput from 'react-maskedinput';
import Select from 'react-select';
import React from "react";
import Script from "next/script";
import {useRouter} from "next/router";
import moment from "moment/moment";
import {transportUp} from "../public/assets/data/transportUp";
import {ru} from "date-fns/locale";

export const transport = [
    {
        value: 1,
        label: 'Фура',
        price: 400
    },
    {
        value: 2,
        label: 'Самосвал',
        price: 27
    },
    {
        value: 3,
        label: 'Тралл',
        price: 1000
    },
    {
        value: 4,
        label: 'Рефрижератор',
        price: 500
    },
    {
        value: 5,
        label: 'Изотерм',
        price: 400
    },
    {
        value: 6,
        label: 'Бортовой',
        price: 400
    },
    {
        value: 7,
        label: 'Крытый',
        price: 400
    },
    {
        value: 8,
        label: 'Открытый',
        price: 400
    },
    {
        value: 9,
        label: 'Тент',
        price: 400
    },
    {
        value: 8,
        label: 'Зерновоз',
        price: 27
    },
    {
        value: 9,
        label: 'Газель',
        price: 180
    }
];

export default function createOrders() {
    const weightMask = 'тонн | 99';
    const cubMask = 'м3 | 999';

    const [product, setProduct] = useState('');
    const [detail, setDetail] = useState('');
    const [description, setDescription] = useState('');
    const [distance, setDistance] = useState('');
    const [weight, setWeight] = useState('');
    const [cubProduct, setCubProduct] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);
    const [date, endDate] = dateRange;
    const [fromPoint, setFromPoint] = useState('');
    const [toPoint, setToPoint] = useState('');
    const [transportType, setTransportType] = useState('');
    const [showErrorLabel, setShowErrorLabel] = useState(false);
    const [price, setPrice] = useState('');
    const [logPrice, setLogPrice] = useState('');
    const [transportLoading, setTransportLoading] = useState('');
    const [checkCalc, setCheckCalc] = useState(false);
    const [checkSendOrder, setCheckSendOrder] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [myOrderRedact, setMyOrderRedact] = useState(null);
    const [roud, setRoud] = useState(null);
    const [role, setRole] = useState(null);
    const [showLawError, setShowLawError] = useState(false);

    const [myOrders, setMyOrders] = useState(Array);
    const [cancelArchive, setCancelArchive] = useState(false);

    const mapRef = useRef()
    const router = useRouter();

    const onChangeDescription = useCallback((event) => {
        setDescription(event.target.value);
    }, []);
    const onChangeProduct = useCallback((event) => {
        setProduct(event.target.value);
    }, []);
    const onChangeDetail = useCallback((event) => {
        setDetail(event.target.value);
    }, []);
    const onChangeCubProduct = useCallback((event) =>  {
        setCubProduct(event.target.value.split(' ')[2]);
    })
    const onChangeWeight = useCallback((event) => {
        setWeight(event.target.value.split(' ')[2]);
        if (parseFloat(event.target.value) > 20) {
            setShowErrorLabel(true)
        } else {
            setShowErrorLabel(false)
        }
    })


    useEffect(() => {
        if(!cancelArchive) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/orders/archive',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                if (res.data.data) {
                    setMyOrders(res.data.data.orders);
                }
                setCancelArchive(true)
            })
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/user/info',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                if (res.data) {
                    setCancelArchive(true)
                    setRole(res.data.role)
                    setTransportType(res.data.transport.type)
                }
            })
        }
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

    useEffect(() => {
        setCheckCalc(distance.length > 0 && weight.length > 0)
        setCheckSendOrder(
            distance.length > 0 &&
            weight.length > 0 && date &&
            description.length > 0 &&
            product.length &&
            parseInt(price.replace(/\s/g, '')) > 0);
    })

    useEffect(() => {
        setRoud(router.asPath.replace('/',''))
        if (roud) {
            setMyOrderRedact(myOrders.find(obj => {
                return obj._id === roud
            }))
        }
    })

    const onChangeDate = (update) => {
        setDateRange(update);
    }
    const onChangeSelect = (e) => {
        setTransportLoading(e.label)
    }

    const sendOrderData = () => {
        axios({
            method: 'put',
            url: `https://api.jukte.kz/orders/${roud}`,
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
            <Header removeUrl='/home' text='На главную' />
            <div className='settings-main py-6 px-4'>
                <h1>Обновить заявку</h1>
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
                        {role !== 'driver' && (
                            <div className='input-container'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="product"
                                        value="Наименование товара"
                                    />
                                </div>
                                {myOrderRedact && (
                                    <TextInput
                                        id="product"
                                        type="text"
                                        placeholder={myOrderRedact.product}
                                        required={true}
                                        sizing="lg"
                                        value={product}
                                        onChange={onChangeProduct}
                                    />
                                )}
                            </div>
                        )}
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="desc"
                                    value="Детали перевозки"
                                />
                            </div>
                            {myOrderRedact && (
                                <Textarea value={detail} onChange={onChangeDetail} placeholder={myOrderRedact.detail} />
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="surname"
                                    value="Выберите дату отправления"
                                />
                            </div>
                            {myOrderRedact && (
                                <DatePicker
                                    selected={date}
                                    dateFormat="dd.MM.yyyy"
                                    onChange={onChangeDate}
                                    startDate={date}
                                    endDate={endDate}
                                    placeholderText={myOrderRedact.date}
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
                            )}
                        </div>
                        {role === 'logistician' && (
                            <div className='input-container'>
                                <div className='mb-2 block'>
                                    <Label htmlFor="transport" value='Выберите тип транспорта' />
                                </div>
                                {myOrderRedact && (
                                    <Select
                                        className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-2"
                                        classNamePrefix="name"
                                        placeholder={myOrderRedact.type}
                                        options={transport}
                                        onChange={onChangeSelect}
                                        isSearchable={false}
                                    />
                                )}
                            </div>
                        )}
                        <div className='input-container'>
                            <div className='mb-2 block'>
                                <Label htmlFor="transport" value='Выберите тип погрузки' />
                            </div>
                            {myOrderRedact && (
                                <Select
                                    className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-2"
                                    classNamePrefix="name"
                                    placeholder={myOrderRedact.loadType}
                                    options={transportUp}
                                    onChange={onChangeSelect}
                                    isSearchable={false}
                                />
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="weight"
                                    value="Вес груза"
                                />
                            </div>
                            {myOrderRedact && (
                                <InputMask value={weight} maskChar={null} onChange={onChangeWeight} mask={weightMask}>
                                    {(inputProps) => (
                                        <TextInput
                                            {...inputProps}
                                            id="distance"
                                            type="tel"
                                            placeholder={'тонн | ' + myOrderRedact.weight}
                                            required={true}
                                            sizing="lg"
                                        />
                                    )}
                                </InputMask>
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="cubProduct"
                                    value="Кубометр груза"
                                />
                            </div>
                            {myOrderRedact && (
                                <InputMask value={cubProduct} maskChar={null} onChange={onChangeCubProduct} mask={cubMask}>
                                    {(inputProps) => (
                                        <TextInput
                                            {...inputProps}
                                            onChange={onChangeCubProduct}
                                            value={cubProduct}
                                            id="distance"
                                            type="tel"
                                            placeholder={'м3 | ' + myOrderRedact.cubProduct}
                                            sizing="lg"
                                        />
                                    )}
                                </InputMask>
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="distance"
                                    value="Расстояние"
                                />
                            </div>
                            {myOrderRedact && (
                                <TextInput
                                    disabled
                                    id="distance"
                                    type="tel"
                                    value={distance}
                                    placeholder={myOrderRedact.distance + ' км'}
                                    required={true}
                                    sizing="lg"
                                />
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="desc"
                                    value="Время в пути"
                                />
                            </div>
                            {myOrderRedact && (
                                <TextInput
                                    onChange={onChangeDescription}
                                    value={description}
                                    disabled
                                    id="desc"
                                    type="text"
                                    placeholder={myOrderRedact.description}
                                    required={true}
                                    sizing="lg"
                                />
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="price"
                                    value="Цена"
                                />
                            </div>
                            {myOrderRedact && (
                                <TextInput
                                    disabled
                                    id="price"
                                    value={price}
                                    placeholder={myOrderRedact.price + ' ₸'}
                                    required={true}
                                    sizing="lg"
                                />
                            )}
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="price"
                                    value="Цена за услуги логиста"
                                />
                            </div>
                            {myOrderRedact && (
                                <TextInput
                                    disabled
                                    id="price"
                                    value={logPrice}
                                    placeholder={myOrderRedact.logPrice + ' ₸'}
                                    required={true}
                                    sizing="lg"
                                />
                            )}
                        </div>
                    </div>
                </form>
                <button type='button' disabled={!checkCalc} className='flex items-center settings-button px-4 mt-4' onClick={calcPrice}>
                    <p className="w-full">Посчиатать</p>
                </button>
                <button type='button' disabled={!checkSendOrder} className='flex items-center settings-button px-4 mt-4' onClick={sendOrderData}>
                    <p className="w-full">Обновить заявку</p>
                </button>
            </div>
            <Modal
                show={showModal}
                position="center"
            >
                <Modal.Body>
                    <div className='w-full success-container'>
                        <p className='text-center'>Заявка успешно обновлена!</p>
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
                        Перейти в меню
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
