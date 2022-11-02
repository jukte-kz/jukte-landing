import Image from "next/image";
import Link from "next/link";

export default function LinkBlock({removeUrl, image, title}) {
    return (
        <Link href={removeUrl}>
            <div className='p-4 rounded-b mt-0.5 link-block flex justify-between'>
                <p>{title}</p>
                <Image width={24} height={24} src={image}></Image>
            </div>
        </Link>
    )
}

export async function getServerSideProps({params}) {
    const image = await getImages() // fetch your data;
    const imageDynamic = image[param.id] //pass the prop from the url

    return { props: { imageDynamic : imageDynamic || null } };
}
