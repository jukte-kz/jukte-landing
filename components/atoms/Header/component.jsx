import Image from "next/image";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import '../../../utils/i18next';

export default function Header({removeUrl, text, mainHeader, withArrow=true}) {
    const router = useRouter();
    const pushBack = () => {
        router.push(removeUrl);
    }

    const { t, i18n} = useTranslation();
    const changeLang = (lang) => {
      i18n.changeLanguage(lang);
    };

    return (
        <div
            className={
                withArrow ? ('flex items-center justify-between header-main w-full border-b-2 px-4 py-2'):
                            ('flex items-center justify-end header-main w-full px-4 py-2')
            }
        >
            {withArrow && (
                <button onClick={pushBack} className='flex items-center'>
                    <Image width={24} height={24} src="/assets/icon/left-arrow.svg" alt=""/>
                    <p className='ml-4'>{text}</p>
                </button>
            )}
            {mainHeader && (
                <div className='flex items-center'>
                    <button onClick={() => {
                        changeLang('kz')
                    }} className='flex items-center mx-2 border-2 border-[#4f52ff] px-2 rounded'>
                        Қаз.
                    </button>
                    <button onClick={() => {
                        changeLang('ru')
                    }} className='flex items-center mx-2 border-2 border-[#4f52ff] px-2 rounded'>
                        Рус.
                    </button>
                    <button onClick={() => {
                        changeLang('en')
                    }} className='flex items-center ml-2 border-2 border-[#4f52ff] px-2 rounded'>
                        Eng.
                    </button>
                </div>
            )}
        </div>
    )
}
