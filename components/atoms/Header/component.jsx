import Image from "next/image";
import {useRouter} from "next/router";

export default function Header({removeUrl, text, mainHeader}) {
    const router = useRouter();
    const pushBack = () => {
        router.push(removeUrl);
    }

    return (
        <div className="flex items-center justify-between header-main w-full border-b-2 px-4 py-2">
            <button onClick={pushBack} className='flex items-center'>
                <Image width={24} height={24} src="/assets/icon/left-arrow.svg" alt=""/>
                <p className='ml-4'>{text}</p>
            </button>
            {mainHeader && (
                <div className='flex items-center'>
                    <button onClick={pushBack} className='flex items-center mx-4'>
                        <Image width={32} height={32} src='/assets/lang/kazakhstan.png' />
                    </button>
                    <button onClick={pushBack} className='flex items-center'>
                        <Image width={32} height={32} src='/assets/lang/russia.png' />
                    </button>
                </div>
            )}
        </div>
    )
}
