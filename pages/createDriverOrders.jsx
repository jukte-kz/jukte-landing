import Header from "../components/atoms/Header/component";
import {Label, Modal, Spinner, Textarea, TextInput} from "flowbite-react";
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
import {Map, YMaps} from "react-yandex-maps";

export default function createDriverOrders() {
    const weightMask = 'тонн | 99';
    const cubMask = 'м3 | 999';

    const [product, setProduct] = useState(' ');
    const [description, setDescription] = useState('');
    const [distance, setDistance] = useState('');
    const [weight, setWeight] = useState('');
    const [cubProduct, setCubProduct] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);
    const [date, endDate] = dateRange;
    const [transportType, setTransportType] = useState('');
    const [transportLoading, setTransportLoading] = useState('');
    const [price, setPrice] = useState('');
    const [logPrice, setLogPrice] = useState('');
    const [checkCalc, setCheckCalc] = useState(false);
    const [checkSendOrder, setCheckSendOrder] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLawError, setShowLawError] = useState(false);
    const [mapModal, setMapModal] = useState(false);
    const [cancel, setCancel] = useState(false);
    const map = useRef(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [refreshMap, setRefreshMap] = useState(true);
    const [countWays, setCountWays] = useState(0);
    const [countWay1, setCountWay1] = useState('');
    const [countWay2, setCountWay2] = useState('');
    const [countWay3, setCountWay3] = useState('');
    const [countWay4, setCountWay4] = useState('');


    const onChangeFrom = useCallback((event) => {
        setFrom(event.target.value);
    }, []);

    const onChangeTo = useCallback((event) => {
        setTo(event.target.value);
    }, []);

    const onChangeCountWay1 = useCallback((event) => {
        setCountWay1(event.target.value);
    }, []);
    const onChangeCountWay2 = useCallback((event) => {
        setCountWay2(event.target.value);
    }, []);
    const onChangeCountWay3 = useCallback((event) => {
        setCountWay3(event.target.value);
    }, []);
    const onChangeCountWay4 = useCallback((event) => {
        setCountWay4(event.target.value);
    }, []);

    const addRoute = (ymaps) => {
        const multiRoute = new ymaps.multiRouter.MultiRoute(
          {
              referencePoints: [from, countWay1, countWay2, countWay3, countWay4, to],
              params: {
                  routingMode: "auto"
              }
          },
          {
              boundsAutoApply: true
          }
        );
        map.current.geoObjects.add(multiRoute);
        multiRoute.model.events.add('requestsuccess', function() {
            const activeRoute = multiRoute.getActiveRoute();
            if (activeRoute) {
                setDescription(activeRoute.properties.get("duration").text);
                setDistance(activeRoute.properties.get("distance").text);
            }
        });
    };

    const router = useRouter();
    const { t } = useTranslation();

    const onChangeMapTransfer = useCallback(() => {
        if (countWays < 1) {
            setCountWay1('');
            setCountWay2('');
            setCountWay3('');
            setCountWay4('');
        } else if (countWays < 2) {
            setCountWay2('');
            setCountWay3('');
            setCountWay4('');
        } else if (countWays < 3) {
            setCountWay3('');
            setCountWay4('');
        } else if (countWays < 4) {
            setCountWay4('');
        }
    }, []);

    const onChangeDescription = useCallback((event) => {
        setDescription(event.target.value);
    }, []);
    const onChangeProduct = useCallback((event) => {
        setProduct(event.target.value);
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
                from: from,
                to: to,
                loadType: transportLoading,
                cubProduct: cubProduct,
                logPrice: parseInt(logPrice.replace(/\s/g, '')),
                distance: parseInt(distance.replace(/\s/g, '')),
                time: new Date(),
                ownerCompany: Cookies.get('companyName'),
                transfer1: countWay1,
                transfer2: countWay2,
                transfer3: countWay3,
                transfer4: countWay4,
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
            let totalPrice = transportPrice * parseFloat(weight) * corrDistance - ((transportPrice * parseFloat(weight) * corrDistance)*0.15);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.15;
            setLogPrice(logPriceCalc + ' ₸');
        } else {
            let totalPrice = corrDistance * transportPrice - ((corrDistance * transportPrice)*0.15);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.15;
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
                <button
                  className="p-2 bg-[#4f52ff] text-white rounded w-full mb-3"
                  onClick={() => {setMapModal(true)}}
                >
                    Проложить маршрут
                </button>
                <form className='flex flex-col mt-4 login-form'>
                    <div className='mb-auto'>
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
                                className='block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-2'
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
                                className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-1"
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
                                        sizing="md"
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
                                        sizing="md"
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
                                sizing="md"
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
                                sizing="md"
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
                                sizing="md"
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
                                sizing="md"
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
            {mapModal && (
              <div className="custom-modal bg-white">
                  <div className="flex items-center justify-between p-4">
                      <h2 className="font-bold">Построение маршрута</h2>
                      <button className="p-2 bg-[#4f52ff] rounded text-white" onClick={() => {
                          setMapModal(false);
                      }}>Закрыть</button>
                  </div>
                  <div className="px-4 flex gap-2 flex-col mt-4">
                      <TextInput
                        id="from"
                        type="text"
                        placeholder='Откуда'
                        sizing="md"
                        onChange={onChangeFrom}
                        value={from}
                      />
                      {countWays >= 1 && (
                        <TextInput
                          id='countWay-1'
                          type="text"
                          placeholder={'Промежуточный пункт'}
                          sizing="md"
                          onChange={onChangeCountWay1}
                          value={countWay1}
                        />
                      )}
                      {countWays >= 2 && (
                        <TextInput
                          id='countWay-2'
                          type="text"
                          placeholder={'Промежуточный пункт'}
                          sizing="md"
                          onChange={onChangeCountWay2}
                          value={countWay2}
                        />
                      )}
                      {countWays >= 3 && (
                        <TextInput
                          id='countWay-3'
                          type="text"
                          placeholder={'Промежуточный пункт'}
                          sizing="md"
                          onChange={onChangeCountWay3}
                          value={countWay3}
                        />
                      )}
                      {countWays >= 4 && (
                        <TextInput
                          id='countWay-4'
                          type="text"
                          placeholder={'Промежуточный пункт'}
                          sizing="md"
                          onChange={onChangeCountWay4}
                          value={countWay4}
                        />
                      )}
                      {countWays === 4 ? (
                        <></>
                      ) : (
                        <button onClick={() => {
                            setCountWays(countWays+1);
                            console.log(countWays);
                        }} className="my-2 text-[#4f52ff]">
                            Добавить промежуточный пункт
                        </button>
                      )}
                      {countWays > 0 && (
                        <button onClick={() => {
                            setCountWays(countWays-1);
                            onChangeMapTransfer();
                        }} className="my-2 text-[#4f52ff]">
                            Удалить промежуточный пункт
                        </button>
                      )}
                      <TextInput
                        id="to"
                        type="text"
                        placeholder='Куда'
                        sizing="md"
                        onChange={onChangeTo}
                        value={to}
                      />
                      <button className="w-full bg-[#4f52ff] text-white p-2 rounded" onClick={() => {
                          setRefreshMap(false)
                          setTimeout(() => {setRefreshMap(true)}, 1000)
                      }}>Обновить</button>
                  </div>
                  <div className='mt-8 px-4 rounded'>
                      {refreshMap ? (
                        <YMaps query={{apikey: '0fb09044-5132-48a3-8653-02425b40b298', load: "package.full"}} >
                            <Map onLoad={addRoute} instanceRef={map} defaultState={{
                                center: [51.128207, 71.430420],
                                zoom: 9,
                                controls: ['zoomControl']
                            }} style={{width: '100%', height: '400px'}}>
                            </Map>
                        </YMaps>
                      ) : (
                        <div className="w-full flex justify-center">
                            <Spinner size={"xl"}></Spinner>
                        </div>
                      )}
                  </div>
              </div>
            )}
        </div>
    )
}
