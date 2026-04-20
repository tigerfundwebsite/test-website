"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        // Only show if no consent decision has been made yet
        const consent = getCookieConsentValue("sre_tiger_cookie_consent");
        if (!consent) {
            // Small delay for a smooth entry after page load
            const timer = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => setVisible(false);
    const handleDecline = () => setVisible(false);

    return (
        <>
            {/* Hidden CookieConsent to handle the actual cookie storage */}
            <CookieConsent
                cookieName="sre_tiger_cookie_consent"
                visible="hidden"
                onAccept={handleAccept}
                onDecline={handleDecline}
                enableDeclineButton
            >
                {/* intentionally empty  UI is custom below */}
            </CookieConsent>

            <AnimatePresence mode="wait">
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                        className="fixed bottom-0 left-0 right-0 sm:bottom-8 sm:left-8 sm:right-auto z-[9999] w-full sm:max-w-md pointer-events-none"
                    >
                        <div className="bg-white/95 backdrop-blur-xl sm:rounded-[2.5rem] rounded-t-[2.5rem] shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.15)] sm:shadow-2xl sm:shadow-slate-900/30 border-x border-t sm:border border-slate-200 pointer-events-auto overflow-hidden">
                            {/* Accent bar */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 sm:rounded-t-[2rem]" />

                            <div className="p-6 sm:p-8 max-h-[85vh] sm:max-h-[600px] overflow-y-auto scrollbar-hide">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-12 bg-orange-50 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-100">
                                        <span className="material-symbols-outlined text-[24px]">cookie</span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-slate-900 leading-tight">
                                            Manage Cookies
                                        </h2>
                                        <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                                            We use cookies to personalise content, analyse traffic and improve your browsing experience.{" "}
                                            <Link href="/privacy" className="text-primary font-bold hover:underline">
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                {/* Expandable category details */}
                                <AnimatePresence>
                                    {showDetails && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden mb-6"
                                        >
                                            <div className="grid grid-cols-1 gap-3">
                                                {[
                                                    { icon: "lock", label: "Strictly Necessary", desc: "Required for basic site functionality and security.", always: true },
                                                    { icon: "bar_chart", label: "Analytics & Stats", desc: "Helps us improve our services by monitoring usage patterns.", always: false },
                                                    { icon: "ads_click", label: "Marketing", desc: "Delivers tailored advertising and helps measure campaign success.", always: false },
                                                ].map((cat) => (
                                                    <div key={cat.label} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col gap-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <span className="material-symbols-outlined text-[18px] text-slate-400">{cat.icon}</span>
                                                                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{cat.label}</span>
                                                            </div>
                                                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cat.always ? "bg-green-100 text-green-700" : "bg-white text-slate-400 border border-slate-200"}`}>
                                                                {cat.always ? "ACTIVE" : "OPTIONAL"}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{cat.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Action row */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={handleAccept}
                                            id="cookie-accept-btn"
                                            className="grow bg-primary hover:bg-orange-600 text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98]"
                                        >
                                            Accept All
                                        </button>
                                        <button
                                            onClick={handleDecline}
                                            id="cookie-decline-btn"
                                            className="grow bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-6 py-4 rounded-2xl transition-all active:scale-[0.98]"
                                        >
                                            Decline
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setShowDetails((p) => !p)}
                                        id="cookie-details-btn"
                                        className="w-full text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center justify-center gap-1.5 py-1"
                                    >
                                        {showDetails ? "Hide Preferences" : "Customize Preferences"}
                                        <span className="material-symbols-outlined text-[18px]">
                                            {showDetails ? "expand_less" : "expand_more"}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
