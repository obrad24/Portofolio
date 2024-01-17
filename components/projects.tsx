import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

export default function Projects() {
    return (
        <section>
            <SectionHeading>
                My projects
            </SectionHeading>
            <div className='mx-auto'>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>

                    ))
                }
            </div>
        </section>
    )
}

type ProjectProps = typeof projectsData[number]

function Project({ title, description, tags, imageUrl }) {
    return <section className='bg-gray-100 max-w-[42rem] border bordfer-black/5 overflow-hidden sm:pr-8 mx-auto'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2'>
            {tags.map((tag, index) => {
                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
            })}
        </ul>

        <Image src={imageUrl} alt="Projects" quality={95} />
    </section>
}