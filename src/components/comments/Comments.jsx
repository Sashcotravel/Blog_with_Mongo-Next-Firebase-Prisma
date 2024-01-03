"use client"

import React, {useState} from 'react';
import s from './comments.module.css'
import Link from "next/link";
import Image from "next/image";
import {useSession} from "next-auth/react";
import useSWR from "swr";


const fetcher = async (url) => {
    const res = await fetch(url)

    const data = await res.json()

    if(!res.ok){
        const err = new Error(data.message)
        throw err
    }

    return data
}


const Comments = ({postSlug}) => {

    const [ desc, setDesc ] = useState("")

    const { status } = useSession()

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({desc, postSlug})
        })
        mutate()
    }


    return (
        <div className={s.container}>
            <h1 className={s.title}>Comments</h1>
            {
                status === 'authenticated' ?
                    (
                        <div className={s.write}>
                            <textarea placeholder='write a comment...' className={s.input}
                                      onChange={e => setDesc(e.target.value)} />
                            <button className={s.button} onClick={handleSubmit}>Send</button>
                        </div>
                    ) : (
                        <Link href={'/login'}>Login to write a comment</Link>
                    )
            }
            <div className={s.comments}>
                {
                    isLoading ? 'Loading...' : data?.map(item => {

                        return (
                            <div className={s.comment} key={item.id}>
                                <div className={s.user}>
                                    {item?.user?.image &&
                                        <Image src={item.user.image} alt='user' width={50} height={50}
                                               className={s.image}/>}
                                    <div className={s.userInfo}>
                                        <span className={s.username}>{item.user.name}</span>
                                        <span className={s.date}>{item.createAt}</span>
                                    </div>
                                </div>
                                <p className={s.desc}>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Comments;