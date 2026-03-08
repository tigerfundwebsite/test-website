"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navGroups = [
    {
        name: "Approaches",
        links: [
            { name: "Portfolio", href: "/portfolio" },
            { name: "Framework", href: "/framework" },
            { name: "Strategy", href: "/strategy" },
            { name: "Case Studies", href: "/case-studies" },
        ]
    },
    {
        name: "Intelligence",
        links: [
            { name: "Insights", href: "/insights" },
            { name: "Market", href: "/market" },
            { name: "Tools", href: "/tools" },
            { name: "Lab", href: "/lab" },
        ]
    },
    {
        name: "The Firm",
        links: [
            { name: "Manifesto", href: "/manifesto" },
            { name: "Letters", href: "/letters" },
            { name: "History", href: "/the-market-journey" },
            { name: "Careers", href: "/careers" },
        ]
    },
    {
        name: "Connect",
        links: [
            { name: "Events", href: "/events" },
            { name: "Media", href: "/media" },
            { name: "Learn", href: "/learn" },
            { name: "Resources", href: "/resources" },
            { name: "Journey", href: "/journey" },
        ]
    }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined && latest > previous && latest > 150) {
            setHidden(true);
        } else if (previous !== undefined && latest < previous) {
            setHidden(false);
        }
    });

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-150%", opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/50 rounded-full px-4 sm:px-6"
            >
                <div className="flex items-center justify-between h-20">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2 flex-1">
                        <Link href="/">
                            <Image
                                src="/Tiger Logo.svg"
                                alt="SRE Tiger PMS"
                                width={180}
                                height={50}
                                className="h-10 md:h-12 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-2 justify-center flex-none">
                        {navGroups.map((group) => (
                            <div
                                key={group.name}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(group.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-colors ${activeDropdown === group.name ? 'text-primary bg-orange-50' : 'text-slate-600 hover:text-primary'}`}>
                                    {group.name}
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === group.name ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === group.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.15, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 flex flex-col gap-1 z-50"
                                        >
                                            {/* Invisible bridge to prevent mouseleave when moving from button to dropdown */}
                                            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />

                                            {group.links.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className="px-4 py-3 rounded-xl text-slate-700 font-bold text-sm hover:bg-orange-50 hover:text-primary transition-colors flex items-center justify-between group/link"
                                                >
                                                    {link.name}
                                                    <span className="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all font-bold">arrow_forward</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
                        <button className="text-slate-600 hover:text-primary font-bold text-sm">Login</button>
                        <Link href="/portfolio-review">
                            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 transform">
                                Get Free Audit
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex border border-slate-200 rounded-full bg-slate-50 p-2">
                        <button
                            className="text-slate-700 relative flex items-center justify-center p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 top-0 left-0 w-screen h-[100dvh] bg-slate-50 z-[49] flex flex-col px-6 lg:hidden pt-36 pb-12 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-10">
                            {navGroups.map((group, i) => (
                                <motion.div
                                    key={group.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{group.name}</h3>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                        {group.links.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg font-bold text-slate-900 hover:text-primary transition-colors flex items-center justify-between border-b border-slate-200 pb-2"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex flex-col gap-4 mb-8"
                            >
                                <button className="w-full py-4 text-slate-600 bg-white border border-slate-200 rounded-2xl text-center font-bold text-lg">
                                    Client Login
                                </button>
                                <Link onClick={() => setIsOpen(false)} href="/portfolio-review" className="w-full">
                                    <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl text-center font-bold text-lg shadow-xl shadow-primary/20">
                                        Request Portfolio Audit
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
