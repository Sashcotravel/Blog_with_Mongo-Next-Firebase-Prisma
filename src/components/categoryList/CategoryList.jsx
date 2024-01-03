
import s from './CategoryList.module.css'
import Link from "next/link";
import Image from "next/image";


const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: "no-store"
    })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json()
}

const CategoryList = async () => {


    const data = await getData()

    return (
        <div className={s.container}>
            <h1 className={s.title}>Popular Categories</h1>
            <div className={s.categories}>
                {
                    data?.map((item, index) => {
                        return (
                            <Link href={`/blog?cat=` + item.slug} className={`${s.category} ${s[item.slug]}`} key={item._id}>
                                {item.img && <Image src={item.img} alt={'category'} width={32} height={32}
                                        className={s.image}/>}
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList