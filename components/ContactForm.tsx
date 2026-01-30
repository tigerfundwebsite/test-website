"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-brand-dark">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8">
                            Request <br className="hidden sm:block" /> <span className="text-brand-orange text-gradient">Tiger Access</span>
                        </h2>
                        <p className="text-xl text-zinc-500 mb-12 font-medium">
                            We work with a select group of high-conviction investors. Submit your details to check eligibility for our upcoming fund mandates.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Direct Line</div>
                                    <div className="text-lg font-bold text-white">+91 Mumbai Office</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Inquiries</div>
                                    <div className="text-lg font-bold text-white">info@tigerassets.in</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Presence</div>
                                    <div className="text-lg font-bold text-white">Borivali (East), Mumbai</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 sm:p-12 rounded-[30px] sm:rounded-[50px] bg-zinc-900 border border-white/10 shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Investment Corpus</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                                    <option>₹50 Lakh - ₹1 Crore</option>
                                    <option>₹1 Crore - ₹5 Crore</option>
                                    <option>Above ₹5 Crore</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Message (Optional)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your investment goals..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full py-6 bg-brand-orange text-black font-black text-lg rounded-3xl flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                Request Confidential Callback
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-center text-zinc-600 text-xs font-medium">
                                Your data is protected under our strict privacy policies for HNI clients.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
