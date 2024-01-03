
import s from './navbar.module.css'
import Image from "next/image";
import Link from "next/link";
import ThemToggle from "@/components/themToggle/ThemToggle";
import AuthLinks from "@/components/authLinks/AuthLinks";

const Navbar = () => {


    return (
        <div className={s.container}>
            <div className={s.social}>
                <Image src='/facebook.png' alt={'facebook'} width={24} height={24} />
                <Image src='/instagram.png' alt={'instagram'} width={24} height={24} />
                <Image src='/tiktok.png' alt={'tiktok'} width={24} height={24} />
                <Image src='/youtube.png' alt={'youtube'} width={24} height={24} />
            </div>
            <div className={s.logo}>Sashkotravel</div>
            <div className={s.links}>
                <ThemToggle />
                <Link href={'/'} className={s.link}>Homepage</Link>
                <Link href={'/contacts'} className={s.link}>Contacts</Link>
                <Link href={'/about'} className={s.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar