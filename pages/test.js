import styles from '../styles/Home.module.scss'
import React, {useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/atoms/Header/component";
import {Map, Placemark, RouteEditor, RoutePanel, withYMaps, YMaps} from "react-yandex-maps";
import {Button, Spinner, TextInput} from "flowbite-react";

export default function test() {
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

    const onChangeTo = useCallback((event) => {
      setTo(event.target.value);
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
        // Получение ссылки на активный маршрут.
        const activeRoute = multiRoute.getActiveRoute();
        if (activeRoute) {
          console.log(activeRoute.properties.get("duration").text);
          console.log(activeRoute.properties.get("distance").text);
        }
      });
    };
    return (
        <div className={styles.container}>
            <Header mainHeader={true} withArrow={true} removeUrl={'/home'} text={'На главную'} />
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
                  placeholder='Промежуточный пункт'
                  sizing="md"
                  onChange={onChangeCountWay1}
                  value={countWay1}
                />
              )}
              {countWays >= 2 && (
                <TextInput
                  id='countWay-2'
                  type="text"
                  placeholder='Промежуточный пункт'
                  sizing="md"
                  onChange={onChangeCountWay2}
                  value={countWay2}
                />
              )}
              {countWays >= 3 && (
                <TextInput
                  id='countWay-3'
                  type="text"
                  placeholder='Промежуточный пункт'
                  sizing="md"
                  onChange={onChangeCountWay3}
                  value={countWay3}
                />
              )}
              {countWays >= 4 && (
                <TextInput
                  id='countWay-4'
                  type="text"
                  placeholder='Промежуточный пункт'
                  sizing="md"
                  onChange={onChangeCountWay4}
                  value={countWay4}
                />
              )}
              {countWays === 4 ? (
                <></>
              ) : (
                <button onClick={() => {setCountWays(countWays+1)}} className="my-2 text-[#4f52ff]">Добавить промежуточный пункт</button>
              )}
              {countWays > 0 && (
                <button onClick={() => {setCountWays(countWays-1)}} className="my-2 text-[#4f52ff]">Удалить промежуточный пункт</button>
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
                <Spinner></Spinner>
              )}
            </div>
        </div>
    )
}
