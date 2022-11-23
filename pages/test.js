import styles from '../styles/Home.module.scss'
import React, {useEffect, useState} from "react";
import Header from "../components/atoms/Header/component";
import {Map, RoutePanel, YMaps} from "react-yandex-maps";

export default function test() {
    return (
        <div className={styles.container}>
            <Header mainHeader={true} withArrow={true} removeUrl={'/home'} text={'На главную'} />
            <div className='mt-8'>
                <YMaps query={{apikey: '0fb09044-5132-48a3-8653-02425b40b298'}}>
                    <Map defaultState={{
                        center: [51.128207, 71.430420],
                        zoom: 9,
                        controls: []
                    }} style={{width: '400px', height: '400px'}}>
                        <RoutePanel options={{
                            float: 'left',
                            visible: true,
                            options: {
                                types: {
                                    auto: true,
                                    pedestrian: false,
                                }
                            }
                        }} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}
