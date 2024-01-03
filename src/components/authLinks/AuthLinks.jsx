"use client"

import s from './authLinks.module.css'
import Link from "next/link";
import {useState} from "react";
import {signOut, useSession} from "next-auth/react";

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const {data, status} = useSession()

    return (
        <>
            {
                status === 'unauthenticated'
                    ? (
                        <Link href={'/login'} className={s.link}>Login</Link>
                    ) : (<>
                            <Link href={'/write'} className={s.link}>Write</Link>
                            <span className={s.link} onClick={signOut}>Logout</span>
                        </>
                    )
            }
            <div className={s.burger} onClick={() => setOpen(!open)}>
                <div className={s.line}></div>
                <div className={s.line}></div>
                <div className={s.line}></div>
            </div>
            {
                open && <div className={s.responsiveMenu}>
                    <Link href={'/'}>Homepage</Link>
                    <Link href={'/contacts'}>Contacts</Link>
                    <Link href={'/about'}>About</Link>
                    {
                        status === 'notauthenntication'
                            ? (
                                <Link href={'/login'}>Login</Link>
                            ) : (<>
                                    <Link href={'/write'}>Write</Link>
                                    <span>Logout</span>
                                </>
                            )
                    }
                </div>
            }
        </>
    )
}

export default AuthLinks