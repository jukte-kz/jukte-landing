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

export default function FaqLand() {

	const { t } = useTranslation();

	return (
		<div>
			<Header removeUrl='https://jukte.kz/' text={t("home.mainPage")} mainHeader={true} />
			<h1 className='p-4 text-2xl font-bold'>{t("home.faq")}</h1>
			<Accordion allowZeroExpanded>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							{t("faq.question1")}
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<p className="whitespace-pre-line">
							{t("faq.answer1")}
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
						<p className="whitespace-pre-line">
							{t("faq.answer2")}
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
						<p className="whitespace-pre-line">
							{t("faq.answer3")}
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
						<p className="whitespace-pre-line">
							{t("faq.answer4")}
						</p>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
