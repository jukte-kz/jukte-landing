import React, {useEffect, useState} from "react";
import Header from "../components/atoms/Header/component";
import {useTranslation} from "react-i18next";
import '../utils/i18next';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq() {

    const { t } = useTranslation();

    return (
        <div>
          <Header removeUrl='/home' text={t("home.mainPage")} mainHeader={true} />
          <h1 className='p-4 text-2xl font-bold'>{t("home.faq")}</h1>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {t("faq.question1")}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in
                  cupidatat occaecat ut occaecat consequat est minim minim
                  esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {t("faq.question2")}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {t("faq.question3")}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {t("faq.question4")}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
    )
}
