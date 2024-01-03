import React from 'react';
import s from "@/components/menu/Menu.module.css";
import Link from "next/link";

const MenuCategories = () => {
    return (
        <div className={s.categoryList}>
            <Link href={'/blog?cat=style'} className={`${s.categoryItem} ${s.style}`}>Style</Link>
            <Link href={'/blog?cat=fashion'} className={`${s.categoryItem} ${s.fashion}`}>Fashion</Link>
            <Link href={'/blog?cat=food'} className={`${s.categoryItem} ${s.food}`}>Food</Link>
            <Link href={'/blog?cat=travel'} className={`${s.categoryItem} ${s.travel}`}>Travel</Link>
            <Link href={'/blog?cat=culture'} className={`${s.categoryItem} ${s.culture}`}>Culture</Link>
            <Link href={'/blog?cat=coding'} className={`${s.categoryItem} ${s.coding}`}>Сoding</Link>
        </div>
    );
};

export default MenuCategories;