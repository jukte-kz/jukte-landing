import Header from "../components/atoms/Header/component";
import {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Modal, Spinner} from "flowbite-react";
import {useRouter} from "next/router";
import Link from 'next/link'
import LinkBlock from "../components/atoms/LinkBlock/component";
import MyCard from "../components/molecules /MyCard/component";
import OpenCard from "../components/molecules /OpenCard/component";
import DriverCard from "../components/molecules /DriverCard/component";
import qs from "qs";
import { useTranslation } from "react-i18next";
import '../utils/i18next';

export default function Home () {
    const [userSuccess, setUserSuccess] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [cancelArchive, setCancelArchive] = useState(false);
    const [cancelOpenOrders, setCancelOpenOrders] = useState(false);
    const [loading, setLoading] = useState();

    const [userInfo, setUserInfo] = useState();
    const [myOrders, setMyOrders] = useState(Array);
    const [openOrders, setOpenOrders] = useState(Array);
    const [showAskUser, setShowAskUser] = useState(false);
    const [ownerId, setOwnerId] = useState('');

    const [userSuccessMessage, setUserSuccessMessage] = useState('');

    const router = useRouter();
    const { t } = useTranslation();

    const toAskUser = () => {
        setShowAskUser(!showAskUser);
    }
    useEffect(()=>{
    })

    const matchOrder = (orderID) => {
        axios({
            method: 'put',
            url: `https://api.jukte.kz/orders/match/${orderID}`,
            data: qs.stringify({}),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                token: Cookies.get('accessToken')
            }
        }).then((res) => {
            if (res.status === 200) {
                window.location.reload(false);
            }
        })
    }

    const goToSuccess = () => {
        router.push('/settings');
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
                setUserInfo(res.data)
                setCancel(true)
                setLoading(true)
                Cookies.set('role',res.data.role)
                if (JSON.stringify(res.data.company.director) === '{}') {
                    setUserSuccess(true)
                }
            }).catch((err) => {
                if (err) {
                    setCancel(true)
                }
                if (err.response.data.message === 'User has not access') {
                    Cookies.set('userSuccess', userSuccess)
                }
            })
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
                if (res.data.data.orders.length)
                    setMyOrders(res.data.data.orders);
                setCancelArchive(true)
            })
        }
        if (!userSuccess) {
            setUserSuccessMessage(t("home.statusVer"))
        } else {
            setUserSuccessMessage(t("home.statusUnver"))
        }
    })

    useEffect(() => {
        if(!cancelOpenOrders) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/orders',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                if (res.data.data.orders.length) {
                    setOpenOrders(res.data.data.orders);
                }
                setCancelOpenOrders(true)
            })
        }
    })

    return (
        <div>
            <Header removeUrl='/login' text={t("home.exit")} mainHeader={true}></Header>
            {loading ? (
                <div className='p-4'>
                    <div className='mb-4'>
                        <div className='flex mb-3 justify-between items-center'>
                            <h1 className='font-bold text-lg'>{t("home.sharesTitle")}</h1>
                        </div>
                        <div className='w-full'>
                            <h4>{t("home.sharesText")}</h4>
                        </div>
                    </div>
                    <div className='flex mb-6 justify-between items-center'>
                        <h1 className='font-bold text-lg'>{t("home.homeTitle")}</h1>
                    </div>
                    <div className='w-full info-title-container'>
                        {userInfo && (
                            <h2>{userInfo.surname + ' ' + userInfo.name}</h2>
                        )}
                        {userSuccessMessage && (
                            <p className='mb-1'>Статус: {userSuccessMessage}</p>
                        )}
                        {userInfo && (
                            userInfo.role === 'driver' ? (
                                <p>{t("registration.driver")}</p>
                            ):(
                                <p>Отправитель</p>
                            )
                        )}
                        <div className='elip1'/>
                        <div className='elip2'/>
                    </div>
                    <LinkBlock removeUrl='/myOrders' title={t("home.myOrder")} image='/assets/icon/myOrders.svg' />
                    {userInfo.role === 'logistician' && (
                        <LinkBlock removeUrl='/createOrders' title={t("home.createLogOrder")} image='/assets/icon/createOrders.svg' />
                    )}
                    {userInfo.role === 'logistician' && (
                        <LinkBlock removeUrl='/driverOrders' title={t("home.freeCars")} image='/assets/icon/openCar.svg' />
                    )}
                    {userInfo.role === 'driver' && (
                        <LinkBlock removeUrl='/openOrders' title={t("home.openOrder")} image='/assets/icon/createOrders.svg' />
                    )}
                    {userInfo.role === 'driver' && (
                        <LinkBlock removeUrl='/createDriverOrders' image='/assets/icon/createOrders.svg' title={t("home.createDriverOrder")} />
                    )}
                    <LinkBlock removeUrl='/settings' title={t("home.settings")} image='/assets/icon/settings.svg' />
                    <LinkBlock removeUrl='/faq' title={t("home.faq")} image='/assets/icon/faq.svg' />
                    <LinkBlock removeUrl='https://telegram.me/jukte/' title={t("home.support")} image='/assets/icon/tech.svg' />
                    <div className='my-orders-container py-8'>
                        <div className='flex w-full justify-between items-center'>
                            <h2>{t("home.myOrder")}</h2>
                            <Link href='/myOrders'>
                                {t("home.viewAll")}
                            </Link>
                        </div>
                        <div className='flex justify-end mt-2'>
                            <div className="inline-flex shrink-0 items-center justify-center rounded bg-blue-50">
                                <p className='p-2'>{t("home.totalOrder")} {myOrders.length}</p>
                            </div>
                        </div>
                        {myOrders.length > 0 ? (
                            <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                {
                                    myOrders.slice(0,1).map((data, index) => {
                                        return (
                                            data.ownerRole === 'logistician' ? (
                                                <MyCard
                                                    transfer={data.transfer}
                                                    key={index}
                                                    shipment={data.loadType}
                                                    cub={data.cubProduct}
                                                    logPrice={data.logPrice}
                                                    product={data.product}
                                                    price={data.price}
                                                    weight={data.weight}
                                                    date={data.date}
                                                    type={data.type}
                                                    from={data.from}
                                                    to={data.to}
                                                    distance={data.distance}
                                                    detail={data.detail}
                                                    description={data.description}
                                                    status={data.status}
                                                    role={userInfo.role}
                                                    phone={data.ownerPhone}
                                                    id={data._id}
                                                />
                                            ) : (
                                                <DriverCard
                                                    transfer={data.transfer}
                                                    key={index}
                                                    shipment={data.loadType}
                                                    cub={data.cubProduct}
                                                    logPrice={data.logPrice}
                                                    price={data.price}
                                                    weight={data.weight}
                                                    date={data.date}
                                                    type={data.type}
                                                    from={data.from}
                                                    to={data.to}
                                                    distance={data.distance}
                                                    description={data.description}
                                                    status={data.status}
                                                    role={userInfo.role}
                                                    phone={data.ownerPhone}
                                                    id={data._id}
                                                    product={data.product}
                                                />
                                            )
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <p className='mt-4'>{t("home.noMyOrders")}</p>
                        )}
                    </div>
                    {userInfo.role === 'driver' && (
                        <div className='my-orders-container py-8'>
                            <div className='flex w-full justify-between items-center'>
                                <h2>{t("home.openOrder")}</h2>
                                <Link href='/openOrders'>
                                    {t("home.viewAll")}
                                </Link>
                            </div>
                            <div className='flex justify-end mt-2'>
                                <div className="inline-flex shrink-0 items-center justify-center rounded bg-blue-50">
                                    <p className='p-2'>{t("home.totalOrder")} {openOrders.length}</p>
                                </div>
                            </div>
                            {openOrders.length > 0 ? (
                                <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                    {
                                        openOrders.slice(0,1).map((data, index) => {
                                            return (
                                                <OpenCard
                                                    onClick={() => {
                                                        setOwnerId(data._id);
                                                        toAskUser();
                                                    }}
                                                    key={index}
                                                    transfer={data.transfer}
                                                    shipment={data.loadType}
                                                    cub={data.cubProduct}
                                                    logPrice={data.logPrice}
                                                    product={data.product}
                                                    price={data.price}
                                                    weight={data.weight}
                                                    date={data.date}
                                                    type={data.type}
                                                    from={data.from}
                                                    to={data.to}
                                                    distance={data.distance}
                                                    detail={data.detail}
                                                    description={data.description}
                                                    status={data.status}
                                                    role={userInfo.role}
                                                    phone={data.ownerPhone}
                                                    id={data._id}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <p className='mt-4'>{t("home.noOpenOrders")}</p>
                            )}
                        </div>
                    )}
                    {userInfo.role === 'logistician' && (
                        <div className='my-orders-container py-8'>
                            <div className='flex w-full justify-between items-center'>
                                <h2>{t("home.freeCars")}</h2>
                                <Link href='/driverOrders'>
                                    {t("home.viewAll")}
                                </Link>
                            </div>
                            <div className='flex justify-end mt-2'>
                                <div className="inline-flex shrink-0 items-center justify-center rounded bg-blue-50">
                                    <p className='p-2'>{t("home.totalOrder")} {openOrders.length}</p>
                                </div>
                            </div>
                            {openOrders.length > 0 ? (
                                <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                    {
                                        openOrders.slice(0,1).map((data, index) => {
                                            return (
                                                <DriverCard
                                                    onClick={() => {
                                                        setOwnerId(data._id);
                                                        toAskUser()
                                                    }}
                                                    key={index}
                                                    shipment={data.loadType}
                                                    cub={data.cubProduct}
                                                    logPrice={data.logPrice}
                                                    price={data.price}
                                                    weight={data.weight}
                                                    date={data.date}
                                                    type={data.type}
                                                    from={data.from}
                                                    to={data.to}
                                                    distance={data.distance}
                                                    description={data.description}
                                                    status={data.status}
                                                    role={Cookies.get('role')}
                                                    phone={data.ownerPhone}
                                                    product={data.product}
                                                    detail={data.detail}
                                                    transfer={data.transfer}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <p className='mt-4'>{t("home.noOpenOrders")}</p>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned spinner example" />
                    </div>
                </div>
            )}
            <Modal show={showAskUser} style={{width: '100%'}} id="modal-width" position="center">
                <Modal.Body style={{width: '100%'}}>
                    <div className="space-y-6">
                        <Header removeUrl='/home' />
                        <p className="text-base leading-relaxed">
                            {t("home.orderMatch")}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='flex justify-between items-center w-full gap-4'>

                        <button className='w-full redirect-button' onClick={() => {
                            if (ownerId) {
                                matchOrder(ownerId);
                            }
                            toAskUser()
                        }}>
                            {t("home.yes")}
                        </button>
                        <button className='w-full redirect-button' onClick={toAskUser}>
                            {t("home.no")}
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            <Modal
                show={userSuccess}
            >
                <Modal.Body>
                    <div className="space-y-6">
                        <Header removeUrl='/login' />
                        <p className="text-base leading-relaxed">
                            {t("home.noVer")}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='w-full redirect-button' onClick={goToSuccess}>
                        {t("home.noVerButton")}
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
