"use client"

import s from './themToggle.module.css'
import Image from "next/image";
import {useContext} from "react";
import {ThemeContext} from "@/context/ThemeContext";

const ThemToggle = () => {

    const { theme, toggle } = useContext(ThemeContext)

    return (
        <div className={s.container} onClick={toggle} style={
            theme === 'dark' ? {backgroundColor: "white"} : {backgroundColor: "#0f172a"}}>
            <Image src={'/moon.png'} alt={'moon'} width={14} height={14} />
            <div className={s.ball} style={
                theme === 'dark'
                    ? {left: 1, background: "#0f172a"}
                    : {right: 1, background: "white"}}></div>
            <Image src={'/sun.png'} alt={'sun'} width={14} height={14} />
        </div>
    )
}

export default ThemToggle