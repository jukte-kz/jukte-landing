import moment from "moment";
import Link from "next/link";
import {useState} from "react";

export default function DriverCard({
                                       shipment, product, cub, price, logPrice, weight, date, type, from, to, distance,
                                       description, status, phone, role, id, onClick
}) {
    const [show, setShow] = useState(false);
    return (
        <div className="rounded shadow-sm bg-white w-full myCard-container p-4">
            <div className='pb-2 mb-4 border-b-2 items-start justify-between'>
                <div className='mb-2'>
                    {status === 'open' && (
                        <span
                            className="bg-green-100 text-green-800 text-xs
                                   font-semibold mr-2 px-2.5 py-0.5 rounded
                                   dark:bg-green-200 dark:text-green-900"
                        >
                            открытая
                        </span>
                    )}
                    {status === 'inProgress' && (
                        <span
                            className="bg-yellow-100 text-green-800 text-xs
                                   font-semibold mr-2 px-2.5 py-0.5 rounded
                                   dark:bg-yellow-200 dark:text-yellow-900"
                        >
                            В процессе
                        </span>
                    )}
                </div>
                <div className='flex items-center'>
                    <img className='mr-2' src="/assets/icon/distance.svg" alt=""/>
                    <p className='font-bold'>{from} - {to}</p>
                </div>
            </div>
            {show && (
                <div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/tenge.svg" alt=""/>
                            <h1>Цена: {price} ₸ <br/> Услуги логиста: {logPrice} ₸</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/weight.svg" alt=""/>
                            <p>{weight} тонн {cub && ( '/ ' + cub + ' м3')}</p>
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
                            <p>{distance} км</p>
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
                            <p className="font-bold">Детали перевозки:</p>
                            <p>{product}</p>
                        </div>
                    </div>
                    {role === 'driver' ? (
                        status !== 'inProgress' ? (
                            <Link href={{
                                pathname: '/[slug]',
                                as: '/slug-1',
                                query: {
                                    slug: id
                                }
                            }}>
                                <div className='mt-4 w-full flex justify-center link-button rounded'>
                                    Редактировать
                                </div>
                            </Link>
                        ):(
                            <></>
                        )
                    ): (
                        <div onClick={onClick}>
                            <Link href={'tel:+'+phone}>
                                <div className='mt-4 w-full flex justify-center link-button rounded'>
                                    Позвонить водителю
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            )}
            <button onClick={() => {
                setShow(!show)
            }} className='mt-2 w-full bg-blue-400 text-white rounded p-1'>
                {!show ? (
                    "Подробнее"
                ): (
                    "Закрыть"
                )}
            </button>
        </div>
    )
}
