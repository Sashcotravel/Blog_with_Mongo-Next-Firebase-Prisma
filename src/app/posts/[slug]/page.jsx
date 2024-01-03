import React from 'react';
import s from './singlePage.module.css'
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}?popular=true`, {
        cache: "no-store"
    })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json()
}



const SinglePage = async ({params}) => {
    const { slug } = params

    const data = await getData(slug)

    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.textContainer}>
                    <h1 className={s.title}>{data?.title}</h1>
                    <div className={s.user}>
                        { data?.user.image && <div className={s.userImageContainer}>
                           <Image src={data?.user.image} alt={'user'} fill className={s.avatar}/>
                       </div>}
                        <div className={s.userTextContainer}>
                            <span className={s.username}>{data?.user.name}</span>
                            <span className={s.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {
                    data?.img &&   <div className={s.imageContainer}>
                        <Image src={data?.img} alt={'user'} fill className={s.image}/>
                    </div>
                }
            </div>
            <div className={s.content}>
                <div className={s.post}>
                    <div className={s.description} dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className={s.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;