"use client";

import { motion } from "framer-motion";

const sectors = [
    { icon: "solar_power", name: "Energy Transition", desc: "Targeting 500 GW non-fossil capacity by 2030, backed by ₹20 lakh crore in Green Hydrogen and offshore wind initiatives." },
    { icon: "precision_manufacturing", name: "Manufacturing Renaissance", desc: "Benefiting from China+1 strategy and PLI schemes driving multi-year capex visibility." },
    { icon: "security", name: "Defense Modernization", desc: "Driven by 'Atmanirbhar Bharat' with a ₹2,00,000 crore procurement pipeline and rising indigenous exports." },
    { icon: "train", name: "Railway Expansion", desc: "A record ₹2.4 lakh crore capex target to electrify the broad gauge network and transform freight capacity by 2030." },
    { icon: "local_gas_station", name: "Biofuel Industry", desc: "Targeting 25% ethanol blending by 2030 with massive INR 35,000 crore investments in biorefineries." },
    { icon: "directions_boat", name: "Shipbuilding Industry", desc: "Supported by Maritime India Vision 2030, aiming to triple ship repair and build green shipping infrastructure." }
];

export default function SectorOpportunities() {
    return (
        <section className="py-20 bg-accent-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Themes Focus</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">
                        Megatrends We Are Betting On
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-hidden w-full select-none max-w-[100vw]">
                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-accent-cream to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-accent-cream to-transparent z-10 pointer-events-none"></div>

                {/* First Track */}
                <motion.div
                    className="flex shrink-0 gap-6 pr-6 py-4"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {sectors.map((s) => (
                        <div
                            key={`t1-${s.name}`}
                            className="group w-[320px] md:w-[380px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 cursor-default shrink-0 flex flex-col justify-center"
                        >
                            <div className="size-14 bg-orange-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[28px]">{s.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                            <p className="text-slate-600 text-base font-medium leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Second Track for seamless loop */}
                <motion.div
                    className="flex shrink-0 gap-6 pr-6 py-4"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    aria-hidden="true"
                >
                    {sectors.map((s) => (
                        <div
                            key={`t2-${s.name}`}
                            className="group w-[320px] md:w-[380px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 cursor-default shrink-0 flex flex-col justify-center"
                        >
                            <div className="size-14 bg-orange-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[28px]">{s.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                            <p className="text-slate-600 text-base font-medium leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
