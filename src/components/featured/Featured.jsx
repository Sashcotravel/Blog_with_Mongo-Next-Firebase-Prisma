import s from './Featured.module.css'
import Image from "next/image";

const Featured = () => {


    return (
        <div className={s.container}>
            <h1 className={s.title}>
                <b>Hey, lama dev!</b> Lorem ipsum dolor sit amet.
            </h1>
            <div className={s.post}>
                <div className={s.imgContainer}>
                    <Image src='/p1.jpeg' alt={'title'} className={s.image} fill/>
                </div>
                <div className={s.textContainer}>
                    <h2 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, harum.</h2>
                    <p className={s.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aspernatur blanditiis
                        consequatur eum exercitationem labore laudantium nostrum odio quasi qui sunt tenetur? Commodi
                        consequuntur dicta doloremque esse, ex fugiat illo iure necessitatibus nemo odit praesentium
                        quae quam, qui reprehenderit tenetur vel voluptas. Consequatur fugiat illum molestiae
                        necessitatibus, provident tempore voluptatum. A, ab aliquid aperiam aspernatur dolores eaque
                        enim expedita facere in inventore iste itaque libero, odio quos repellat reprehenderit sunt.
                        Atque blanditiis deserunt dignissimos dolor doloribus esse et, expedita fuga id illum incidunt
                        iste magnam numquam perferendis possimus quae quod repellendus reprehenderit sed similique
                        soluta totam veritatis voluptatem? Quidem, repudiandae.
                    </p>
                    <button className={s.button}>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Featured