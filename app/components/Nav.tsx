'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";

export default function Nav() {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery("(min-width: 1280px)");

    const navMotion = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    const itemMotion = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: -100,
        },
    };

    return (
        <nav className="relative mx-auto mb-8 flex justify-between items-center pt-12 pb-6 px-5 font-medium container z-50">
            {/* Title */}
            <h1 className="text-lg font-bold">
                <a className="flex items-center justify-center" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
                        <path d="M16 8 2 22" />
                        <path d="M17.5 15H9" />
                    </svg>
                    <span className="font-bold text-xl ml-2 text-[#003C43]">TechB</span>
                </a>
                <svg
                    className="absolute bottom-0"
                    width={250}
                    height={4}
                    viewBox="0 0 250 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 2L248 2"
                        strokeWidth={2}
                        stroke="#135D66"
                        strokeLinecap="round"
                    />
                </svg>
            </h1>

            {matches && (
                <div className="flex gap-12">
                    <a href="/" className="text-sm font-medium hover:underline underline-offset-4">Home</a>
                    <a href="/blog" className="text-sm font-medium hover:underline underline-offset-4">Blog</a>
                    <a href="/about" className="text-sm font-medium hover:underline underline-offset-4">About</a>
                    <a href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</a>
                </div>
            )}

            {!matches && (
                <div
                    onClick={() => setToggled((prevToggle) => !prevToggle)}
                    className="space-y-1.5 cursor-pointer z-50"
                >
                    <motion.span
                        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                        className="block h-0.5 w-8 bg-black"
                    ></motion.span>
                    <motion.span
                        animate={{ width: toggled ? 0 : 24 }}
                        className="block h-0.5 w-6 bg-white"
                    ></motion.span>
                    <motion.span
                        animate={{
                            rotateZ: toggled ? -45 : 0,
                            y: toggled ? -8 : 0,
                            width: toggled ? 32 : 16,
                        }}
                        className="block h-0.5 w-4 bg-black"
                    ></motion.span>
                </div>
            )}

            {toggled && !matches && (
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    className="fixed flex gap-12 bg-white bottom-0 left-0 w-full h-screen items-center justify-center"
                >
                    <motion.div
                        variants={navMotion}
                        animate="visible"
                        initial="hidden"
                        className="flex flex-col gap-24 text-lg"
                    >
                        <motion.a variants={itemMotion} href="/">Home</motion.a>
                        <motion.a variants={itemMotion} href="/blog">Blog</motion.a>
                        <motion.a variants={itemMotion} href="/about">About</motion.a>
                        <motion.a variants={itemMotion} href="/contact">Contact</motion.a>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
}