import React from 'react';
import s from "@/components/menu/Menu.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({widthImage}) => {
    return (
        <div className={s.items}>
            <Link href={'/'} className={s.item}>
                {widthImage && <div className={s.imageContainer}>
                    <Image src='/p1.jpeg' alt={'popular'} fill className={s.image}/>
                </div>}
                <div className={s.textContent}>
                    <span className={`${s.category} ${s.travel}`}>Travel</span>
                    <h3 className={s.postTitle}>
                        Debits expedita id libero molest porro quibusdam.
                    </h3>
                    <div className={s.details}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className={s.item}>
                {widthImage && <div className={s.imageContainer}>
                    <Image src='/p1.jpeg' alt={'popular'} fill className={s.image}/>
                </div>}
                <div className={s.textContent}>
                    <span className={`${s.category} ${s.fashion}`}>Fashion</span>
                    <h3 className={s.postTitle}>
                        Debitis expedita id libero molestiae porro quibusdam.
                    </h3>
                    <div className={s.details}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className={s.item}>
                {widthImage && <div className={s.imageContainer}>
                    <Image src='/p1.jpeg' alt={'popular'} fill className={s.image}/>
                </div>}
                <div className={s.textContent}>
                    <span className={`${s.category} ${s.food}`}>Food</span>
                    <h3 className={s.postTitle}>
                        Debitis expedita id libero molestiae porro quibusdam.
                    </h3>
                    <div className={s.details}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className={s.item}>
                {widthImage && <div className={s.imageContainer}>
                    <Image src='/p1.jpeg' alt={'popular'} fill className={s.image}/>
                </div>}
                <div className={s.textContent}>
                    <span className={`${s.category} ${s.culture}`}>Culture</span>
                    <h3 className={s.postTitle}>
                        Debitis expedita id libero molestiae porro quibusdam.
                    </h3>
                    <div className={s.details}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPosts;