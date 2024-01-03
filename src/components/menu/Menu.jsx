import s from './Menu.module.css'
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "@/components/menuPosts/MenuPosts";
import MenuCategories from "@/components/menuCategories/MenuCategories";

const Menu = () => {


    return (
        <div className={s.container}>
            <h2 className={s.subtitle}>{"What's hot"}</h2>
            <h3 className={s.title}>Most Popular</h3>
            <MenuPosts widthImage={false} />
            <h2 className={s.subtitle}>Discover by topic</h2>
            <h3 className={s.title}>Categories</h3>
            <MenuCategories />
            <h2 className={s.subtitle}>Chosen by the editor</h2>
            <h3 className={s.title}>Editors Pick</h3>
            <MenuPosts widthImage={true} />
        </div>
    )
}

export default Menu