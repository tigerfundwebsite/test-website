"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const totalMiliseconds = duration * 1000;
            const incrementTime = totalMiliseconds / end;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { label: "Top Performer", value: 560, suffix: "%", sub: "Shakti Pumps" },
    { label: "Investors Served", value: 1500, suffix: "+", sub: "Global Trust" },
    { label: "Assets Scaling", value: 800, suffix: "cr+", sub: "Managed AUM" },
    { label: "Team Experience", value: 20, suffix: "y+", sub: "Market Experts" },
];

export default function InvestmentStats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto py-20 px-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-8 rounded-[40px] bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all group"
                >
                    <div className="text-4xl md:text-5xl font-display font-bold text-brand-gold mb-2">
                        <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-bold text-white uppercase tracking-widest mb-1">
                        {stat.label}
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                        {stat.sub}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
