"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function CommunityEvents() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="relative pt-32 md:pt-48 pb-24 bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-wave-pattern opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-6 inline-block"
                    >
                        Community
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Investor Events & Briefings
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Join our exclusive physical meetups, digital webinars, and Q&A sessions designed to foster a community of intellectually honest investors.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12">Upcoming Briefings</h2>

                <div className="space-y-8 mb-24">
                    {/* Featured Event */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row gap-12 group hover:border-orange-200 transition-colors">
                        <div className="lg:w-1/3 flex flex-col justify-center">
                            <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-100">
                                <span className="block text-primary font-bold uppercase tracking-widest text-sm mb-2">November</span>
                                <span className="block text-5xl font-black text-slate-900 mb-2">15</span>
                                <span className="block text-slate-600 font-medium">Saturday • 10:00 AM IST</span>
                            </div>
                        </div>
                        <div className="lg:w-2/3 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> St. Regis, Mumbai</span>
                                <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">In-Person Only</span>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">The Annual Investor Summit 2026</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Raghav Chaudhary will break down the structural shifts driving the next decade of Indian equities, followed by a live AMA and networking lunch.
                            </p>
                            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold transition-colors w-fit shadow-md shadow-primary/20">
                                Request Invite
                            </button>
                        </div>
                    </div>

                    {/* Secondary Events */}
                    <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-6">
                            <div className="shrink-0 text-center">
                                <span className="block text-primary font-bold uppercase tracking-wide text-xs">Dec</span>
                                <span className="block text-3xl font-black text-slate-900">04</span>
                            </div>
                            <div className="h-12 w-px bg-slate-200"></div>
                            <div>
                                <span className="text-xs font-bold bg-orange-50 text-orange-600 px-2 py-0.5 rounded uppercase tracking-wide mb-2 inline-block">Webinar</span>
                                <h4 className="text-xl font-bold text-slate-900">Q3 Portfolio Review & Outlook</h4>
                                <p className="text-slate-500 text-sm mt-1">Digital Briefing • 16:00 IST</p>
                            </div>
                        </div>
                        <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 px-6 py-2.5 rounded-lg font-bold transition-colors w-full md:w-auto">
                            Register
                        </button>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
