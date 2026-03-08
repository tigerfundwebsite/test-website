"use client";

import { useState, useRef, ChangeEvent, DragEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioReviewForm() {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        portfolioSize: "Under ₹50L"
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    // --- Form Handling ---
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        // Mock API Call delay
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    // --- Drag & Drop Handling ---
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const uploadedFiles = Array.from(e.dataTransfer.files);
            setFiles(prev => [...prev, ...uploadedFiles]);
            e.dataTransfer.clearData();
        }
    };

    // --- File Input Click Handling ---
    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const uploadedFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...uploadedFiles]);
        }
    };

    const removeFile = (indexToRemove: number) => {
        setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6"
            >
                <div className="w-20 h-20 bg-orange-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[40px]">check_circle</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Audit Request Received</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Thank you for trusting Tiger Fund. Our expert analysts will securely audit your uploaded documents and contact you at <strong className="text-slate-800">{formData.email}</strong> within 24 hours.
                </p>
                <button
                    onClick={() => {
                        setSubmitted(false);
                        setFiles([]);
                        setFormData({ name: "", email: "", phone: "", portfolioSize: "Under ₹50L" });
                    }}
                    className="text-primary font-bold hover:text-orange-600 transition-colors"
                >
                    Submit another request
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">

                {/* Personal Details */}
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">1. Personal Details</h3>

                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 shadow-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 shadow-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number *</label>
                        <div className="flex shadow-sm rounded-xl">
                            <span className="flex items-center justify-center px-4 bg-slate-50 border border-slate-300 border-r-0 rounded-l-xl text-slate-500 font-medium font-mono text-sm shadow-sm opacity-90">+91</span>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="98765 43210"
                                className="w-full px-5 py-3 rounded-r-xl border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 shadow-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="portfolioSize" className="block text-sm font-bold text-slate-700 mb-1.5">Current Estimated Portfolio Size</label>
                        <div className="relative">
                            <select
                                id="portfolioSize"
                                name="portfolioSize"
                                value={formData.portfolioSize}
                                onChange={handleInputChange}
                                className="w-full px-5 py-3 appearance-none rounded-xl border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white shadow-sm"
                            >
                                <option value="Under ₹50L">Under ₹50L</option>
                                <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                                <option value="₹1Cr - ₹5Cr">₹1Cr - ₹5Cr</option>
                                <option value="₹5Cr+">₹5Cr+</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 pointer-events-none">expand_more</span>
                        </div>
                    </div>
                </div>

                {/* Secure File Upload */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">2. Secure Document Upload</h3>
                    <p className="text-xs text-slate-500 mb-3">
                        Upload screenshots, PDFs, or Excel files of your current holdings.
                    </p>

                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group
                            ${isDragging ? 'border-primary bg-orange-50/50 scale-[1.02]' : 'border-slate-300 hover:border-primary hover:bg-slate-50'}
                        `}
                    >
                        <input
                            type="file"
                            multiple
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            className="hidden"
                            accept=".pdf, .xlsx, .xls, .csv, image/*"
                        />

                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${isDragging ? 'bg-orange-100 text-primary' : 'bg-slate-100 text-slate-400 group-hover:text-primary group-hover:bg-orange-100'}`}>
                            <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
                        </div>

                        <p className="text-sm font-bold text-slate-700 mb-1 text-center">
                            {isDragging ? 'Drop files here!' : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-slate-400 text-center max-w-[200px]">
                            PDF, Excel, CSV, or Image files (Max 10MB each)
                        </p>
                    </div>

                    {/* File List */}
                    <AnimatePresence>
                        {files.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-2 mt-4"
                            >
                                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Attached Files ({files.length})</p>
                                <div className="max-h-[160px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                                    {files.map((file, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded group">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <span className="material-symbols-outlined text-slate-400 text-[20px] flex-shrink-0">
                                                    {file.type.includes('image') ? 'image' :
                                                        file.type.includes('pdf') ? 'picture_as_pdf' :
                                                            file.type.includes('spreadsheet') || file.type.includes('excel') || file.name.endsWith('.csv') ? 'table_view' :
                                                                'draft'}
                                                </span>
                                                <div className="flex flex-col truncate">
                                                    <span className="text-xs font-bold text-slate-700 truncate">{file.name}</span>
                                                    <span className="text-[10px] text-slate-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                                                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[18px] block">close</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Submission Area */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 max-w-sm">
                    By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a>. Your data is never shared with third parties.
                </p>
                <button
                    type="submit"
                    disabled={submitting}
                    className={`px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all flex items-center gap-2 justify-center w-full sm:w-auto min-w-[200px] text-lg
                        ${submitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark hover:-translate-y-0.5 shadow-primary/30 hover:shadow-primary/50'}
                    `}
                >
                    {submitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Securely Uploading...
                        </>
                    ) : (
                        <>
                            Secure Submit Request
                            <span className="material-symbols-outlined text-[18px]">lock</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
