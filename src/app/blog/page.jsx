import React from 'react';
import s from './blogPage.module.css'
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";


const BlogPage = ({searchParams}) => {

    const page = parseInt(searchParams.page) || 1

    const { cat } = searchParams

    return (
        <div className={s.container}>
            <h1 className={s.title}>{cat} Blog</h1>
            <div className={s.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    );
};

export default BlogPage;