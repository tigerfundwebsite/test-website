"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Tiger PMS", href: "#pms" },
    { name: "Fixed Income", href: "#fip" },
    { name: "TIGER Framework", href: "#framework" },
    { name: "Team", href: "#team" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="w-full max-w-6xl flex items-center justify-between px-6 md:px-8 py-3 md:py-4 glass-nav rounded-full border border-white/10"
            >
                <div className="flex items-center gap-2">
                    <Image
                        src="/Tiger Logo.svg"
                        alt="Tiger Assets"
                        width={100}
                        height={28}
                        className="h-6 md:h-8 w-auto brightness-0 invert"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-brand-orange transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-black rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95"
                    >
                        Request Access
                        <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                        className="p-2 text-white relative z-[110]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="md:hidden">
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.div>

            {/* Premium Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[105] flex flex-col justify-center px-10 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-black text-white hover:text-brand-orange transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                onClick={() => setIsOpen(false)}
                                className="mt-8 py-6 bg-brand-orange text-black rounded-3xl text-center font-black text-2xl flex items-center justify-center gap-3"
                            >
                                Request Access
                                <ArrowUpRight className="w-6 h-6" />
                            </motion.a>
                        </div>

                        <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                            <span className="text-zinc-600 font-bold uppercase tracking-widest text-xs">Engineering Global Assets</span>
                            <span className="text-zinc-400 font-bold text-sm">© 2026 Tiger Assets</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
