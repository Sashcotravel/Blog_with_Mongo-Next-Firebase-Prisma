

import s from './CardList.module.css'
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";


const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store"
    })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json()
}


const CardList = async ({page, cat}) => {

    const {posts, count} = await getData(page, cat)

    const POST_PER_PAGE = 2

    const hasPrev = POST_PER_PAGE * (page-1) > 0

    const hasNext = POST_PER_PAGE * (page -1) + POST_PER_PAGE < count

    return (
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.posts}>
                {
                    posts?.map(item => <Card key={item._id} item={item} />)
                }
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList