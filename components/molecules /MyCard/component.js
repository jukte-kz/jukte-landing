import moment from "moment";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import '../../../utils/i18next';
import 'moment/locale/ru';

export default function MyCard({
                                   shipment, product, cub, price, logPrice, weight, date, type, from, to, distance,
                                   description, status, clickDelete, id, detail, time, companyName, transfer1, transfer2, transfer3, transfer4
}) {
    const [show, setShow] = useState(false);
    const { t } = useTranslation();
    const [timeNow, setTimeNow] = useState('');

    moment.locale('ru')

    useEffect(() => {
      setTimeNow(moment(time).fromNow());
      setInterval(() => {
        setTimeNow(moment(time).fromNow());
      }, 60000);
    }, []);
    return (
        <div className="rounded shadow-sm bg-white w-full myCard-container p-4">
            <div className='mb-2 flex justify-between'>
                {status === 'open' && (
                    <span
                        className="bg-green-100 text-green-800 text-xs
                                   font-semibold mr-2 px-2.5 py-0.5 rounded
                                   dark:bg-green-200 dark:text-green-900"
                    >
                            {t("card.cardOpen")}
                        </span>
                )}
                {status === 'inProgress' && (
                    <span
                        className="bg-yellow-100 text-green-800 text-xs
                                   font-semibold mr-2 px-2.5 py-0.5 rounded
                                   dark:bg-yellow-200 dark:text-yellow-900"
                    >
                            {t("card.cardInProgress")}
                        </span>
                )}
                <p>{timeNow}</p>
            </div>
            <div className='pb-2 mb-4 border-b-2 flex items-start justify-between'>
                <div>
                    <div className='flex items-center'>
                        <h2 className='mb-2'>{companyName}</h2>
                    </div>
                    <div className='flex items-center'>
                        <img className='mr-2' src="/assets/icon/product.svg" alt=""/>
                        <h2 className='mb-2'>{product}</h2>
                    </div>
                    <div className='flex items-center'>
                        <img className='mr-2' src="/assets/icon/distance.svg" alt=""/>
                        <p className='font-bold'>
                          {from} -
                          {transfer1 && (' ' + transfer1 + '-')}
                          {transfer2 && (' ' + transfer2 + '-')}
                          {transfer3 && (' ' + transfer3 + '-')}
                          {transfer4 && (' ' + transfer4 + '-')}
                          {to}
                        </p>
                    </div>
                </div>
            </div>
            {show && (
                <div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/tenge.svg" alt=""/>
                            <h1>{t("createOrders.price")}: {price} ???</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/weight.svg" alt=""/>
                            <p>{weight} ???????? {cub && ( '/ ' + cub + ' ??3')}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/date.svg" alt=""/>
                            <p>{date}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/truck.svg" alt=""/>
                            <p>{type}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/Measure.svg" alt=""/>
                            <p>{distance} ????</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/time.svg" alt=""/>
                            <p>{description}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/carShipment.svg" alt=""/>
                            <p>{shipment}</p>
                        </div>
                        <div className='items-center'>
                            <p className="font-bold">{t("createOrders.detail")}:</p>
                            <p>{detail}</p>
                        </div>
                    </div>
                    {status !== 'inProgress' ? (
                        <button className="w-full" onClick={clickDelete}>
                            <div className='mb-2 w-full flex justify-center delete-button rounded'>
                                {t("card.delete")}
                            </div>
                        </button>
                    ):(
                        <></>
                    )}
                    {status !== 'inProgress' && (
                        <Link href={{
                            pathname: '/[slug]',
                            as: '/slug-1',
                            query: {
                                slug: id
                            }
                        }}>
                            <div className='mb-2 w-full flex justify-center link-button rounded'>
                                {t("card.refactor")}
                            </div>
                        </Link>
                    )}
                </div>
            )}
            <button onClick={() => {
                setShow(!show)
            }} className='w-full bg-blue-400 text-white rounded p-1'>
                {!show ? (
                    t("card.open")
                ): (
                    t("card.close")
                )}
            </button>
        </div>
    )
}
