
"use client"

import s from './Pagination.module.css'
import {useRouter} from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {

    const router = useRouter()

    return (
        <div className={s.container}>
            <button className={s.buttonPre}
                    onClick={() => router.push(`?page=${page - 1}`)}
                    disabled={!hasPrev}
            >Previous</button>
            <button className={s.buttonNext}
                    onClick={() => router.push(`?page=${page+1}`)}
                    disabled={!hasNext}
            >Next</button>
        </div>
    )
}

export default Pagination