import React from 'react';
import s from './card.module.css'
import Image from "next/image";
import Link from "next/link";

const Card = ({key, item}) => {
    return (
        <div className={s.container} key={key}>
            {item.img &&<div className={s.imageContainer}>
                <Image src={item.img} alt={item.title} fill className={s.image}/>
            </div>}
            <div className={s.textContent}>
                <div className={s.detail}>
                    <span className={s.date}>{item.createdAt.substring(0, 10)} - </span>
                    <span className={s.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <p className={s.desc} dangerouslySetInnerHTML={{__html: item.desc.substring(0, 150)}}></p>
                <Link href={`/posts/${item.slug}`} className={s.link}>Read more</Link>
            </div>
        </div>
    );
};

export default Card;