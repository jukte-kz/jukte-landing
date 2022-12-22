import Header from "../components/atoms/Header/component";
import MyCard from "../components/molecules /MyCard/component";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Pagination, Spinner} from "flowbite-react";
import DriverCard from "../components/molecules /DriverCard/component";
import qs from "qs";
import {useTranslation} from "react-i18next";
import '../utils/i18next';

export default function driverOrders() {
    const [myOrders, setMyOrders] = useState(Array);
    const [cancelArchive, setCancelArchive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showAskUser, setShowAskUser] = useState(false);

    const { t } = useTranslation();

    const toAskUser = () => {
        setShowAskUser(!showAskUser);
    }

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
            if (res.status === 200) {}
        })
    }

    useEffect(() => {
        if(!cancelArchive) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/orders/',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                if (res.data.data.orders.length) {
                    setMyOrders(res.data.data.orders);
                }
                setLoading(false)
                setCancelArchive(true)
            })
        }
    })

    const onPageChange = useCallback(() => {
        const previous = () => {
            alert('Previous btn clicked. Make a call to your server to fetch data.');
        };
        const next = () => {
            alert('Next btn clicked. Make a call to your server to fetch data.');
        };
    }, [])

    return (
        <div className='myOrders-container'>
            <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true}></Header>
            <div className='p-4 pb-2'>
                <div className='flex w-full justify-between items-center'>
                    <h2>Открытые машины</h2>
                    <div className="inline-flex shrink-0 items-center justify-center rounded bg-blue-50">
                        <p className='p-2'>Количество: {myOrders.length}</p>
                    </div>
                </div>
                {loading ? (
                    <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
                        <div className="text-center">
                            <Spinner aria-label="Center-aligned spinner example" />
                        </div>
                    </div>
                ):(
                    <div>
                        {myOrders.length > 0 ? (
                            <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                {
                                    myOrders.slice(0,6).map((data, index) => {
                                        return (
                                            <DriverCard
                                                onClick={() => {
                                                    toAskUser
                                                    matchOrder(data._id)
                                                }}
                                                transfer={data.transfer}
                                                cub={data.cubProduct}
                                                key={index}
                                                shipment={data.loadType}
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
                                                companyName={data.ownerCompany}
                                                transfer1={data.transfer1}
                                                transfer2={data.transfer2}
                                                transfer3={data.transfer3}
                                                transfer4={data.transfer4}
                                                time={data.time}
                                            />
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <p className='mt-4'>{t("home.noDriverOrders")}</p>
                        )}
                    </div>
                )}
            </div>
            {myOrders.length > 6 && (
                <div className='flex justify-center mb-6'>
                    <Pagination
                        currentPage={1}
                        onPageChange={onPageChange}
                        showIcons={true}
                        totalPages={Math.ceil(myOrders.length/4)}
                    />
                </div>
            )}
        </div>
    )
}
