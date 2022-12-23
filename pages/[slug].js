import React, {useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/atoms/Header/component";
import {Map, YMaps} from "react-yandex-maps";
import {Label, Spinner, Textarea, TextInput} from "flowbite-react";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import axios from "axios";
import qs from "qs";
import moment from "moment";
import Cookies from "js-cookie";
import {transport} from "../public/assets/data/transportType";
import DatePicker from "react-datepicker";
import {ru} from "date-fns/locale";
import Select from "react-select";
import {transportUp} from "../public/assets/data/transportUp";
import InputMask from "react-input-mask";

export default function refreshOrders() {
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
    const [transportType, setTransportType] = useState('');
    const [transportLoading, setTransportLoading] = useState('');
    const [price, setPrice] = useState('');
    const [checkCalc, setCheckCalc] = useState(false);
    const [logPrice, setLogPrice] = useState('');
    const [checkSendOrder, setCheckSendOrder] = useState(false);
    const map = useRef(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [refreshMap, setRefreshMap] = useState(true);
    const [countWays, setCountWays] = useState(0);
    const [countWay1, setCountWay1] = useState('');
    const [countWay2, setCountWay2] = useState('');
    const [countWay3, setCountWay3] = useState('');
    const [countWay4, setCountWay4] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [disButton, setDisButton] = useState(true);
    const [myOrders, setMyOrders] = useState(Array);
    const [cancelArchive, setCancelArchive] = useState(false);
    const [myOrderRedact, setMyOrderRedact] = useState(null);
    const [role, setRole] = useState(null);
    const [roud, setRoud] = useState(null);

    const router = useRouter();
    const { t } = useTranslation();

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
    const onChangeDescription = useCallback((event) => {
        setDescription(event.target.value);
    }, []);
    const onChangeProduct = useCallback((event) => {
        setProduct(event.target.value);
    }, []);
    const onChangeDetail = useCallback((event) => {
        setDetail(event.target.value);
    }, []);
    const onChangeWeight = useCallback((event) => {
        setWeight(event.target.value.split(' ')[2]);
    })
    const onChangeCubProduct = useCallback((event) =>  {
        setCubProduct(event.target.value.split(' ')[2]);
    })
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
    const onChangeDate = (update) => {
        setDateRange(update);
    }
    const onChangeSelect = (e) => {
        setTransportType(e.label);
    }
    const onChangeSelectLoadTransport = (e) => {
        setTransportLoading(e.label);
    }

    function parseToDate(date) {
        Date.parse(date);
    };

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
    }, []);

    useEffect(() => {
        setRoud(router.asPath.replace('/',''));
        if (roud) {
            setMyOrderRedact(myOrders.find(obj => {
                return obj._id === roud
            }))
        }
    });

    useEffect(() => {
        if (myOrderRedact) {
            setFrom(myOrderRedact.from);
            setCountWay1(myOrderRedact.transfer1);
            setCountWay2(myOrderRedact.transfer2);
            setCountWay3(myOrderRedact.transfer3);
            setCountWay4(myOrderRedact.transfer4);
            setTo(myOrderRedact.to);
            onClickRefreshMap();
            setProduct(myOrderRedact.product);
            setDescription(myOrderRedact.description);
            setDistance(myOrderRedact.distance);
            setDetail(myOrderRedact.detail);
            if (role === 'driver') {
                setDetail(myOrderRedact.product);
            }
        }
    }, [myOrderRedact]);

    useEffect(() => {
        setCheckCalc(distance.length > 0 && weight.length > 0)
        setCheckSendOrder(
          weight.length > 0 && date &&
          description.length > 0 &&
          product.length &&
          parseInt(price.replace(/\s/g, '')) > 0);
    });

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

    const nextStep = useCallback(() => {
        setCurrentStep((currentStep) => currentStep + 1);
    }, []);

    const prevStep = useCallback(() => {
        setCurrentStep((currentStep) => currentStep - 1);
    }, []);

    const onClickRefreshMap = useCallback(() => {
        setRefreshMap(false);
        setTimeout(() => {setRefreshMap(true)}, 1000);
    }, []);

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
                from: from,
                to: to,
                loadType: transportLoading,
                cubProduct: cubProduct,
                logPrice: parseInt(logPrice.replace(/\s/g, '')),
                distance: parseInt(distance.replace(/\s/g, '')),
                detail: detail,
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
                nextStep();
            }
        })
    }
    const calcPrice = () => {
        let corrDistance = parseInt(distance.replace(/\s/g, ''));
        let transportObj = transport.filter(obj => {
            return obj.label === transportType
        })
        let transportPrice = transportObj[0].price
        if (transportPrice === 30) {
            let totalPrice = transportPrice * parseFloat(weight) * corrDistance - ((transportPrice * parseFloat(weight) * corrDistance)*0.15);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.15;
            setLogPrice(logPriceCalc + ' ₸');
        } if (transportPrice === 35) {
            let totalPrice = transportPrice * parseFloat(weight) * corrDistance - ((transportPrice * parseFloat(weight) * corrDistance)*0.15);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.15;
            setLogPrice(logPriceCalc + ' ₸');
        }
        else {
            let totalPrice = corrDistance * transportPrice - ((corrDistance * transportPrice)*0.15);
            setPrice(totalPrice + ' ₸');
            let logPriceCalc = totalPrice*0.15;
            setLogPrice(logPriceCalc + ' ₸');
        }
    }
    const endCreateOrder = () => {
        router.push('/home');
    }

    return (
      <div>
          <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true}/>
          <div className='settings-main py-6 px-4'>
              {currentStep === 0 && (
                <div className='flex justify-between items-center'>
                    <h1>{t("createOrders.updateOrder")}</h1>
                    <div className="p-2 border-2 border-[#4f52ff] rounded">
                        <p>{currentStep+1} {t("createOrders.step")} / 4</p>
                    </div>
                </div>
              )}
              {currentStep > 0 && (
                <div className='flex justify-between items-center'>
                    <button
                      className="py-2 px-6 bg-[#4f52ff] text-white rounded"
                      onClick={prevStep}
                    >
                        {t("createOrders.prev")}
                    </button>
                    <div className="p-2 border-2 border-[#4f52ff] ml-[10%] rounded">
                        <p>{currentStep+1} {t("createOrders.step")} / 4</p>
                    </div>
                </div>
              )}
              <hr className='mt-4' />
              {currentStep === 0 && (
                <>
                    <div className="flex gap-2 flex-col mt-4">
                        <TextInput
                          id="from"
                          type="text"
                          placeholder={t("createOrders.from")}
                          sizing="md"
                          onChange={onChangeFrom}
                          value={from}
                        />
                        {countWays >= 1 && (
                          <TextInput
                            id='countWay-1'
                            type="text"
                            placeholder={t("createOrders.transfer")}
                            sizing="md"
                            onChange={onChangeCountWay1}
                            value={countWay1}
                          />
                        )}
                        {countWays >= 2 && (
                          <TextInput
                            id='countWay-2'
                            type="text"
                            placeholder={t("createOrders.transfer")}
                            sizing="md"
                            onChange={onChangeCountWay2}
                            value={countWay2}
                          />
                        )}
                        {countWays >= 3 && (
                          <TextInput
                            id='countWay-3'
                            type="text"
                            placeholder={t("createOrders.transfer")}
                            sizing="md"
                            onChange={onChangeCountWay3}
                            value={countWay3}
                          />
                        )}
                        {countWays >= 4 && (
                          <TextInput
                            id='countWay-4'
                            type="text"
                            placeholder={t("createOrders.transfer")}
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
                          }} className="my-2 text-[#4f52ff]">
                              {t("createOrders.addTransfer")}
                          </button>
                        )}
                        {countWays > 0 && (
                          <button onClick={() => {
                              setCountWays(countWays-1);
                              onChangeMapTransfer();
                          }} className="my-2 text-[#4f52ff]">
                              {t("createOrders.delTransfer")}
                          </button>
                        )}
                        <TextInput
                          id="to"
                          type="text"
                          placeholder={t("createOrders.to")}
                          sizing="md"
                          onChange={onChangeTo}
                          value={to}
                        />
                        <button
                          type='button'
                          className="settings-button"
                          onClick={() => {
                              onClickRefreshMap();
                          }}
                        >{t("createOrders.refresh")}</button>
                    </div>
                    <div className='mt-8 rounded'>
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
                          <div className="w-full flex justify-center items-center h-[400px]">
                              <Spinner size={"xl"}></Spinner>
                          </div>
                        )}
                    </div>
                    <div className="mt-8">
                        <button
                          type='button'
                          className="settings-button"
                          disabled={!distance}
                          onClick={nextStep}
                        >
                            <p className="w-full">{t("createOrders.next")}</p>
                        </button>
                    </div>
                </>
              )}
              {currentStep === 1 && (
                <>
                    <form className='flex flex-col mt-2 login-form'>
                        <div className='mb-auto'>
                            {role === 'logistician' && (
                              <div className='input-container'>
                                  <div className="mb-2 block">
                                      <Label
                                        htmlFor="product"
                                        value={t("createOrders.product")}
                                      />
                                  </div>
                                  <TextInput
                                    id="product"
                                    type="text"
                                    placeholder=''
                                    required={true}
                                    sizing="md"
                                    value={product}
                                    onChange={onChangeProduct}
                                  />
                              </div>
                            )}
                            <div className='input-container'>
                                <div className="mb-2 block">
                                    <Label
                                      htmlFor="desc"
                                      value={t("createOrders.detail")}
                                    />
                                </div>
                                <Textarea value={detail} onChange={onChangeDetail} />
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
                            {role === 'logistician' && (
                              <div className='input-container'>
                                  <div className='mb-2 block'>
                                      <Label htmlFor="transport" value={t("createOrders.transport")} />
                                  </div>
                                  <Select
                                    className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-1"
                                    classNamePrefix="name"
                                    placeholder={t("createOrders.transport")}
                                    options={transport}
                                    onChange={onChangeSelect}
                                    isSearchable={false}
                                  />
                              </div>
                            )}
                            <div className='input-container'>
                                <div className='mb-2 block'>
                                    <Label htmlFor="transportLoad" value={t("createOrders.upTransport")} />
                                </div>
                                <Select
                                  className="react-select block w-full border focus\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-1"
                                  classNamePrefix="name"
                                  placeholder={t("createOrders.upTransport")}
                                  options={transportUp}
                                  onChange={onChangeSelectLoadTransport}
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
                        </div>
                    </form>
                    <button type='button' disabled={!checkCalc} className='flex items-center settings-button px-4 mt-4' onClick={() => {
                        calcPrice();
                        setDisButton(false);
                    }}>
                        <p className="w-full">{t("createOrders.calc")}</p>
                    </button>
                    <div className="mt-4">
                        <button
                          type='button'
                          className="settings-button"
                          disabled={disButton}
                          onClick={() => {
                              nextStep();
                              setDisButton(true);
                          }}
                        >
                            <p className="w-full">{t("createOrders.next")}</p>
                        </button>
                    </div>
                </>
              )}
              {currentStep === 2 && (
                <>
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
                    <div className='input-container mt-4'>
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
                    <div className='input-container mt-4'>
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
                    <div className='input-container mt-4'>
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
                    <div>
                        <button type='button' disabled={!checkSendOrder} className='flex items-center settings-button px-4 mt-4' onClick={sendOrderData}>
                            <p className="w-full">{t("createOrders.updateOrder")}</p>
                        </button>
                    </div>
                </>
              )}
              {currentStep === 3 && (
                <>
                    <div className='w-full success-container mt-8'>
                        <p className='text-center'>{t("createOrders.updateSuccess")}</p>
                        <div className="success-animation mt-6">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                          type="button"
                          className='w-full settings-button'
                          onClick={endCreateOrder}
                        >
                            {t("home.mainPage")}
                        </button>
                    </div>
                </>
              )}
          </div>
      </div>
    )
}
