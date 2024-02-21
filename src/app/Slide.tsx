'use client';

import Link from "next/link";
import Image from "next/image"
import { useState } from "react"

type SlideProps = {
    prompt: string,
    img1: string,
    img1credit: string,
    img2: string,
    img2credit: string,
    descRight: string[],
    descWrong: string[],
    correct: number,
    last: string,
    next: string,
}

export default function Slide(props: SlideProps) {
    /* -1 is not answered, 0 is the first, 1 is the second */
    const onClickImg = (num: number) => {
        if (num === props.correct) {
            setIsCorrect(1);
        }
        else {
            setIsCorrect(0);
        }
    }

    const [isCorrect, setIsCorrect] = useState(-1);

    return (
        <div className="pt-40">
            <div className="flex w-3/4 m-auto mb-8 gap-4">
                <div className="text-center">
                    <Image src={props.img1} width={650} height={400} alt="Image 1" className="cursor-pointer hover:opacity-80 transition-all rounded-3xl" onClick={() => onClickImg(0)} />
                    <p className="text-gray-500">{ isCorrect !== -1 && props.img1credit }</p>
                </div>
                <div className="ml-auto text-center">
                    <Image src={props.img2} width={650} height={400} alt="Image 2" className="cursor-pointer hover:opacity-80 transition-all rounded-3xl" onClick={() => onClickImg(1)} />
                    <p className="text-gray-500">{ isCorrect !== -1 && props.img2credit }</p>
                </div>
            </div>
            <div className="w-3/4 m-auto mb-8 text-xl font-bold text-center">
                <h2>{ props.prompt }</h2>
            </div>
            { isCorrect !== -1 ? 
            <div className="w-3/4 m-auto mb-8 text-xl">
                { isCorrect === 0 ? 
                props.descWrong.map((paragraph) => {
                    return <p key={paragraph}>{ paragraph }<br/><br/></p>
                })
                : 
                props.descRight.map((paragraph) => {
                    return <p key={paragraph}>{ paragraph }<br/><br/></p>
                })
                }
            </div>
             : "" }
            <nav className="flex w-3/4 m-auto">
                <button className="p-3 bg-slate-300 hover:bg-green-200 transition-all rounded-md">
                    <Link href={`${props.last}` }>Last</Link>
                </button>
                <button className="p-3 bg-slate-300 hover:bg-green-200 transition-all rounded-md ml-auto">
                    <Link href={`${props.next}` } className="ml-auto">Next</Link>
                </button>
            </nav>
        </div>
    )
}