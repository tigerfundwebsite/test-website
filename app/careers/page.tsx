"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const STAGGER = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
            <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="rgb(234,88,12)"
                        strokeWidth={path.width}
                        strokeOpacity={0.03 + path.id * 0.006}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3], pathOffset: [0, 1, 0] }}
                        transition={{ duration: 20 + (path.id % 5) * 4, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </svg>
        </div>
    );
}


export default function Careers() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500/20 overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-50 via-white to-white blur-3xl opacity-80"></div>
            </div>

            <section className="relative pt-32 md:pt-48 pb-24 overflow-hidden z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50/80 shadow-sm mb-6 md:mb-8"
                    >
                        <span className="material-symbols-outlined text-primary text-sm">groups</span>
                        <span className="text-orange-900 text-sm font-medium">Join the Team</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl"
                    >
                        Build the Future of <br className="hidden md:block" />
                        <span className="text-primary italic">Wealth Creation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        We are looking for independent thinkers, rigorous analysts, and individuals obsessed with uncovering market inefficiencies.
                    </motion.p>
                </div>
            </section>

            <section className="py-12 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900">Our Culture</h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8 font-medium">
                            Tiger Assets is a meritocracy. We don&apos;t care where you went to school; we care about your intellectual honesty and your ability to construct an airtight thesis.
                        </p>
                        <ul className="space-y-5 text-slate-700 font-bold">
                            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
                                Ground-up fundamental research
                            </li>
                            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
                                Radical transparency in debate
                            </li>
                            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
                                Entrepreneurial autonomy
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group hover:border-orange-200 transition-colors duration-500"
                    >
                        {/* Background abstract shape */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                                <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary border border-orange-100">
                                    <span className="material-symbols-outlined text-[20px]">school</span>
                                </div>
                                Internship Program
                            </h3>
                            <p className="text-slate-600 mb-10 font-medium leading-relaxed">
                                Our 6-month intensive analyst program is designed to break academic habits and instil institutional-grade investing frameworks.
                            </p>
                        </div>

                        <button className="relative z-10 w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
                            Apply for Spring 2027
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </motion.div>
                </div>

                <div className="border-t border-slate-200 pt-16 md:pt-24 mt-12 md:mt-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="flex items-center justify-between mb-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Open Roles</h2>
                        <span className="hidden md:flex items-center gap-2 text-primary font-bold bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                            3 Positions Active
                        </span>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={STAGGER}
                        className="space-y-4 md:space-y-6"
                    >
                        {[
                            { role: "Equity Research Analyst", exp: "2-4 Years", type: "Full-Time", location: "Mumbai", icon: "monitoring", desc: "Conduct deep-dive fundamental research on mid and small cap equities to construct alpha-generating models and thesis.", applyLink: "mailto:careers@tigerassets.in?subject=Application%20for%20Equity%20Research%20Analyst" },
                            { role: "Quantitative Strategist", exp: "3+ Years", type: "Full-Time", location: "Mumbai", icon: "functions", desc: "Design and implement robust risk-adjusted compounding strategies using advanced data-driven insights and quantitative metrics.", applyLink: "mailto:careers@tigerassets.in?subject=Application%20for%20Quantitative%20Strategist" },
                            { role: "Investor Relations Manager", exp: "5+ Years", type: "Full-Time", location: "Mumbai / Remote", icon: "handshake", desc: "Manage high-trust relationships with UHNI clients while effectively communicating disciplined capital allocation strategies.", applyLink: "mailto:careers@tigerassets.in?subject=Application%20for%20Investor%20Relations%20Manager" },
                        ].map((job, i) => (
                            <motion.div
                                key={i}
                                variants={FADE_UP}
                                onClick={() => window.location.href = job.applyLink}
                                className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md rounded-2xl transition-all duration-300 cursor-pointer group hover:border-primary/30"
                            >
                                <div className="flex items-start md:items-center gap-4 md:gap-6">
                                    <div className="hidden sm:flex size-14 rounded-2xl border border-slate-100 bg-slate-50 items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors shrink-0">
                                        <span className="material-symbols-outlined text-[24px]">{job.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{job.role}</h4>
                                        <p className="text-slate-600 font-medium text-sm md:text-base mb-4 max-w-2xl leading-relaxed">{job.desc}</p>
                                        <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm font-bold text-slate-500">
                                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">work</span> {job.exp}</span>
                                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">schedule</span> {job.type}</span>
                                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">location_on</span> {job.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 flex shrink-0 items-center justify-between w-full md:w-auto gap-4">
                                    <div className="md:hidden flex flex-wrap items-center gap-3 md:gap-5 text-xs sm:text-sm font-bold text-slate-500">
                                        <a href={job.applyLink} onClick={(e) => e.stopPropagation()} className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">Apply Here</a>
                                    </div>
                                    <div className="hidden md:flex items-center gap-4">
                                        <a href={job.applyLink} onClick={(e) => e.stopPropagation()} className="bg-primary opacity-0 group-hover:opacity-100 group-hover:block hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all shadow-primary/20 -translate-x-2 group-hover:translate-x-0">Apply Now</a>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all md:text-[32px] bg-slate-50 group-hover:bg-orange-50 p-2 md:p-3 rounded-full">arrow_forward</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
