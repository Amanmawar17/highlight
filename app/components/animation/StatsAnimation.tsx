"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function StatsAnimation() {
    const container = useRef(null);
    const { contextSafe } = useGSAP({ scope: container });
    contextSafe(() => {
        const context = gsap.context(() => {
            // Ensure correct selector targeting with '.box'
            gsap.from(".box", {
                textContent: 0,
                duration: 4,
                ease: 'power1.inOut',
                snap: { textContent: 1 },
                stagger: 1,
            });
        }, );
    }, );

    return (
        <div ref={container} className="flex flex-col md:flex-row justify-evenly items-center gap-5 backdrop-blur-sm backdrop-filter py-10 px-10 w-full">
            <div className="grid place-content-center gap-y-5">
                <h4 className='text-xl font-semibold place-self-center'>Bundle Size</h4>
                <p className="box text-3xl font-semibold place-self-center">7.8mb</p>
            </div>
            <div className="grid place-content-center gap-y-5">
                <h4 className='text-xl font-semibold place-self-center'>Development</h4>
                <p className="box text-3xl font-semibold place-self-center">1.5 x</p>
            </div>
            <div className="grid place-content-center gap-y-5">
                <h4 className='text-xl font-semibold place-self-center'>Productivity</h4>
                <p className="box text-3xl font-semibold place-self-center">2 x</p>
            </div>
        </div>
    );
}
