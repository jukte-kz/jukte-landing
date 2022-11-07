import React, {useEffect, useState} from "react";
import { Collapse, Text } from "@nextui-org/react";
import Header from "../components/atoms/Header/component";
import {useTranslation} from "react-i18next";
import '../utils/i18next';

export default function Faq() {

    const { t } = useTranslation();

    return (
        <div>
            <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true} />
            <h1 className='p-3 text-2xl font-bold'>{t("home.faq")}</h1>
            <Collapse.Group>
                <Collapse title={t("faq.question1")}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title={t("faq.question2")}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title={t("faq.question3")}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title={t("faq.question4")}>
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
