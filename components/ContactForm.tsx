"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
                            Request <br className="hidden sm:block" /> <span className="text-primary">Tiger Access</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-12 font-medium">
                            We work with a select group of high-conviction investors. Submit your details to check eligibility for our upcoming fund mandates.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</div>
                                    <div className="text-lg font-bold text-slate-900">+91 90825 71009</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Inquiries</div>
                                    <div className="text-lg font-bold text-slate-900">info@tigerassets.in</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-slate-900">Andheri East, Mumbai</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 sm:p-12 rounded-[30px] sm:rounded-[50px] bg-accent-cream border border-orange-100 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white border border-orange-100 shadow-sm rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white border border-orange-100 shadow-sm rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Investment Corpus</label>
                                <select className="w-full bg-white border border-orange-100 shadow-sm rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option>₹50 Lakh - ₹1 Crore</option>
                                    <option>₹1 Crore - ₹5 Crore</option>
                                    <option>Above ₹5 Crore</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message (Optional)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your investment goals..."
                                    className="w-full bg-white border border-orange-100 shadow-sm rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                />
                            </div>

                            <button className="w-full py-4 bg-primary text-white font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 mt-4">
                                Request Confidential Callback
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-center text-slate-500 text-xs font-medium mt-4">
                                Your data is protected under our strict privacy policies for HNI clients.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
