"use client"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, {useEffect, useState} from 'react';
import s from './write.module.css'
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {app} from "@/utils/fisebase";

const Write = () => {

    const [open, setOpen] = useState(false)
    const [media, setMedia] = useState('')
    const [value, setValue] = useState('')
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [cat, setCat] = useState('')

    const router = useRouter()

    const {status} = useSession()

    useEffect(() => {
        const storage = getStorage(app);

        const upload = () => {
            // https://firebase.google.com/docs/storage/web/upload-files?authuser=0
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                    });
                }
            );
        }

        file && upload()
    }, [file]);

    if(status === 'loading'){
        return <div className={s.loading}>Loading...</div>
    }

    if(status === 'unauthenticated'){
        router.push('/')
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        debugger
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value.slice(0, 40) + value.slice(40, value.length-6),
                img: media,
                catSlug: cat || "fashion",
                slug: slugify(title)
            })
        })

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        }
    }


    return (
        <div className={s.container}>
            <input type='text' placeholder='Title' className={s.titleInput}
            onChange={e => setTitle(e.target.value)}/>
            <select onChange={e => setCat(e.target.id)}>
                <option id='fashion'>fashion</option>
                <option id='travel'>travel</option>
                <option id='style'>style</option>
                <option id='food'>food</option>
                <option id='coding'>coding</option>
                <option id='culture'>culture</option>
            </select>
            <div className={s.editor}>
                <button className={s.button} onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' alt='plus' width={16} height={16} />
                </button>
                {
                    open && (
                        <div className={s.add}>
                            <input type='file' id='image' style={{display: 'none'}}
                                   onChange={e => setFile(e.target.files[0])} />
                            <button className={s.addButton}>
                                <label htmlFor='image'>
                                    <Image src='/image.png' alt='plus' width={16} height={16}/>
                                </label>
                            </button>
                            <button className={s.addButton}>
                                <Image src='/external.png' alt='plus' width={16} height={16} />
                            </button>
                            <button className={s.addButton}>
                                <Image src='/video.png' alt='plus' width={16} height={16} />
                            </button>
                        </div>
                    )
                }
                <ReactQuill theme='bubble' value={value} onChange={setValue}
                    placeholder='Tell your story...' className={s.textArea} />
            </div>
            <button className={s.publish} onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default Write;