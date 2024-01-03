import s from './footer.module.css'
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";

const Footer = () => {


    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={'/logo.png'} alt={'logo'} width={50} height={50}/>
                    <h1 className={s.logoText}>Travelblog</h1>
                </div>
                <p className={s.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic modi reiciendis rerum similique.
                    Animi architecto commodi cum deleniti dolore dolorem doloribus, exercitationem facilis fugiat in
                    itaque magnam molestias necessitatibus nostrum provident quam repellendus sapiente sit totam
                    voluptatem.
                </p>
                <div className={s.icons}>
                    <Image src='/facebook.png' alt={'facebook'} width={18} height={18} />
                    <Image src='/instagram.png' alt={'instagram'} width={18} height={18} />
                    <Image src='/tiktok.png' alt={'tiktok'} width={18} height={18} />
                    <Image src='/youtube.png' alt={'youtube'} width={18} height={18} />
                </div>
            </div>
            <div className={s.links}>
                <div className={s.list}>
                    <span className={s.listTitle}>Links</span>
                    <Link href={'/'} className={s.link}>Homepage</Link>
                    <Link href={'/blog'} className={s.link}>Blog</Link>
                    <Link href={'/about'} className={s.link}>About</Link>
                    <Link href={'/contacts'} className={s.link}>Contacts</Link>
                </div>
                <div className={s.list}>
                    <span className={s.listTitle}>Tags</span>
                    <Link href={'/'} className={s.link}>Style</Link>
                    <Link href={'/'} className={s.link}>Fashion</Link>
                    <Link href={'/'} className={s.link}>Coding</Link>
                    <Link href={'/'} className={s.link}>Travel</Link>
                </div>
                <div className={s.list}>
                    <span className={s.listTitle}>Social</span>
                    <Link href={'/'} className={s.link}>Facebook</Link>
                    <Link href={'/'} className={s.link}>Instagram</Link>
                    <Link href={'/'} className={s.link}>Tiktok</Link>
                    <Link href={'/'} className={s.link}>Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer