"use client";

import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { motion } from 'framer-motion';

export default function HomeSocialConnect() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Connect With Us</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">
                        Latest Insights & Updates
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* YouTube Videos Section */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-600 text-[28px]">smart_display</span>
                            Latest Videos
                        </h3>
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200"
                            >
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/RgVQaBDyLQ0" 
                                    title="Tiger Assets Video 1" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200"
                            >
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/GgBjmH9Y5NI" 
                                    title="Tiger Assets Video 2" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        </div>
                    </div>

                    {/* Twitter Feed Section */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#1DA1F2] text-[28px]">campaign</span>
                            Live Updates
                        </h3>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-4 shadow-md border border-slate-200"
                        >
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="Raghav_c98"
                                options={{ height: 600 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
