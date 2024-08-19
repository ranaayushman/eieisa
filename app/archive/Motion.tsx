"use client"

import React from 'react'
import { motion } from "framer-motion";
import { display } from '../components/constanst'
import Image from 'next/image'

export const Motion = () => {
    return (
        <section>
            <div className='pt-10 flex overflow-x-hidden relative'>
                {display.map((item, index) => (
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="flex flex-nowrap"

                    >
                        <div className="w-full h-[286px] flex items-center justify-center overflow-hidden"
                            key={index}
                        >
                            <Image
                                src={item.imgSrc}
                                alt="Analytics 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
            
        </section>
    )
}
