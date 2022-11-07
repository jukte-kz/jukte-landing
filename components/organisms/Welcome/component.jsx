import Image from "next/image";
import Link from 'next/link';
import Header from "../../atoms/Header/component";
import { useTranslation } from "react-i18next";
import '../../../utils/i18next';

export default function Welcome({toLogin}) {
    const { t } = useTranslation();
    return (
        <>
            <Header mainHeader={true} withArrow={false}></Header>
            <div className='flex min-h-full flex-col h-full justify-between items-center py-4 px-4 main-welcome'>
                <Image alt='logo' src='/assets/image/logo.svg' width={160} height={40} />
                <div className='flex flex-col items-center'>
                    <Image alt='walp-image' width={328} height={328}  src='/assets/image/walp.svg'></Image>
                    <h2 className='text-center'>{t("welcome.title")}</h2>
                    <p className='text-center'>{t("welcome.desc")}</p>
                </div>
                <div className='w-full'>
                    <p className='mb-4 register-text'>{t("welcome.exist")} <Link href="/login">{t("welcome.login")}</Link></p>
                    <button onClick={toLogin} className='flex items-center justify-center px-4'>
                        <p className='w-full'>{t("welcome.registration")}</p>
                        <Image width={24} height={24} alt='arrow-icon' src='/assets/icon/right-arrow.svg'></Image>
                    </button>
                </div>
            </div>
        </>
    )
}
