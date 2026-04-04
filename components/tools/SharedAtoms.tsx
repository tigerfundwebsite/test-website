"use client";

import React from "react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const fmt = (n: number, decimals = 2) =>
    new Intl.NumberFormat("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(n);

export const fmtCrore = (n: number) => {
    if (n >= 1e7) return `₹${fmt(n / 1e7, 2)} Cr`;
    if (n >= 1e5) return `₹${fmt(n / 1e5, 2)} L`;
    return `₹${fmt(n, 0)}`;
};

// ─── Shared UI Atoms ─────────────────────────────────────────────────────────

export function Field({ label, value, onChange, min, max, step = "1", prefix, suffix }: {
    label: string; value: string; onChange: (v: string) => void;
    min?: string; max?: string; step?: string; prefix?: string; suffix?: string;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</label>
            <div className="flex items-center rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                {prefix && <span className="px-3 text-slate-400 font-bold text-sm bg-slate-50 border-r border-slate-200 flex items-center py-3">{prefix}</span>}
                <input type="number" min={min} max={max} step={step} value={value} onChange={(e) => onChange(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm font-bold text-slate-800 outline-none bg-transparent" />
                {suffix && <span className="px-3 text-slate-400 font-bold text-sm bg-slate-50 border-l border-slate-200 flex items-center py-3">{suffix}</span>}
            </div>
        </div>
    );
}

export function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
    return (
        <div className={`rounded-2xl p-5 flex flex-col gap-1 ${highlight ? "bg-primary text-white" : "bg-slate-50 border border-slate-200"}`}>
            <span className={`text-xs font-bold uppercase tracking-widest ${highlight ? "text-orange-100" : "text-slate-500"}`}>{label}</span>
            <span className={`text-2xl font-bold font-serif ${highlight ? "text-white" : "text-slate-900"}`}>{value}</span>
        </div>
    );
}
