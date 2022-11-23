import React, {useEffect, useState} from "react";
import Header from "../components/atoms/Header/component";
import {useTranslation} from "react-i18next";
import '../utils/i18next';

export default function Faq() {

    const { t } = useTranslation();

    return (
        <div>
            <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true} />
            <h1 className='p-3 text-2xl font-bold'>{t("home.faq")}</h1>
        </div>
    )
}
