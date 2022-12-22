import Header from "../components/atoms/Header/component";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Modal, Pagination, Spinner} from "flowbite-react";
import OpenCard from "../components/molecules /OpenCard/component";
import qs from "qs";
import {useTranslation} from "react-i18next";
import '../utils/i18next';

export default function MyOrders() {
    const [openOrders, setOpenOrders] = useState(Array);
    const [cancelArchive, setCancelArchive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showAskUser, setShowAskUser] = useState(false);
    const [ownerId, setOwnerId] = useState('');

    const { t } = useTranslation();

    const toAskUser = () => {
        setShowAskUser(!showAskUser);
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
                    setOpenOrders(res.data.data.orders);
                }
                setLoading(false)
                setCancelArchive(true)
            })
        }
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
                    <h2>{t("home.openOrder")}</h2>
                    <div className="inline-flex shrink-0 items-center justify-center rounded bg-blue-50">
                        <p className='p-2'>{t("home.totalOrder")} {openOrders.length}</p>
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
                        {openOrders.length > 0 ? (
                            <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                {
                                    openOrders.slice(0,6).map((data, index) => {
                                        return (
                                            <OpenCard
                                                onClick={() => {
                                                    setOwnerId(data._id);
                                                    toAskUser();
                                                }}
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
                                                phone={data.ownerPhone}
                                                id={data._id}
                                                companyName={data.ownerCompany}
                                                time={data.time}
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
            {openOrders.length > 6 && (
                <div className='flex justify-center mb-6'>
                    <Pagination
                        currentPage={1}
                        onPageChange={onPageChange}
                        showIcons={true}
                        totalPages={Math.ceil(openOrders.length/4)}
                    />
                </div>
            )}
            <Modal show={showAskUser} id="modal-width" position="center">
                <Modal.Body style={{width: '100%'}}>
                    <div className="space-y-6" style={{width: '100%'}}>
                        <Header removeUrl='/home' />
                        <p className="text-base leading-relaxed">
                            Вы договорились по поводу заявки ?
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='flex justify-between items-center w-full gap-4'>
                        <button className='w-full redirect-button' onClick={() => {
                            if (ownerId) {
                                matchOrder(ownerId);
                            }
                            toAskUser();
                        }}>
                            Да
                        </button>
                        <button className='w-full redirect-button' onClick={toAskUser}>
                            Нет
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
