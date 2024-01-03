"use client"

import React from 'react';
import s from './login.module.css'
import { useSession, signIn } from "next-auth/react";
import {useRouter} from "next/navigation";

const Login = () => {

    const router = useRouter()

    const {data, status} = useSession()

    console.log(data, status)

    if(status === 'loading'){
        return <div className={s.loading}>Loading...</div>
    }

    if(status === 'authenticated'){
        router.push('/')
    }


    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <button className={s.socialButton} onClick={() => signIn("google")}>Sing in with Google</button>
                <button className={s.socialButton} onClick={() => signIn("github")}>Sing in with Github</button>
                <button className={s.socialButton} onClick={() => signIn("facebook")}>Sing in with Facebook</button>
            </div>
        </div>
    );
};

export default Login;