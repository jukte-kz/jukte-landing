import React, {useEffect, useState} from "react";
import { Collapse, Text } from "@nextui-org/react";
import Header from "../components/atoms/Header/component";

export default function Faq() {
    return (
        <div>
            <Header removeUrl='/home' text='Назад' />
            <h1 className='p-3 text-2xl font-bold'>Вопросы и ответы</h1>
            <Collapse.Group>
                <Collapse title="Стоимость пользование сайтом?">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="За что несет ответственность Jukte.kz?">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="Как происходит договор между логистоми и грузоперевозчиками?">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="Как работает калькулятор?">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
            </Collapse.Group>
        </div>
    )
}
