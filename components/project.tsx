"use client";

import { Temp } from "@/app/types/temp"
import { projectsData } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"


type ProjectProps = typeof projectsData[number]

export default function Project({ title, description, tags, imageUrl }: Temp) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0,1],[0.5,1]);
    const opacityProgres = useTransform(scrollYProgress, [0,1],[0.6,1])

    return <motion.div
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgres,
        }}
        className="group mb-3 sm:mb-8 last:mb-0">
        <section
            className='bg-gray-100 hover:bg-gray-200 transition max-w-[50rem] rounded-lg border border-black/5 overflow-hidden sm:pr-8 mx-auto relative sm:h-[28rem]'>
            <div className='flex flex-col py-4 px-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 group-even:ml-[26rem] grouo-even:pl-8'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2'>
                    {tags.map((tag, index) => {
                        return <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                    })}
                </ul>
                <Image className='absolute top-8 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[iniital] group-even:-left-20 group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2' src={imageUrl} alt="Projects" quality={95} />
            </div>
        </section>
    </motion.div>
}