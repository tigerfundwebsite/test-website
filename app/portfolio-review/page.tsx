import { Metadata } from 'next';
import PortfolioReviewForm from '../../components/PortfolioReviewForm';

export const metadata: Metadata = {
    title: 'Free Portfolio Audit | Tiger Fund',
    description: 'Get a comprehensive, completely free audit of your current equity portfolio from the expert analysts at Tiger Fund.',
};

export default function PortfolioReviewPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50/80 px-4 py-1.5 rounded-full border border-orange-100/50 shadow-sm inline-block mb-4">
                        Exclusive Offer
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                        Get a <span className="text-primary relative inline-block">
                            Free Portfolio Audit
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Are your investments truly working for you? Upload your current demat holdings or Excel trackers, and our top-tier analysts will break down your hidden fees, risk exposure, and missed alphacompletely free, with zero obligation.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                    <PortfolioReviewForm />
                </div>

                {/* Trust Signals */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-500">enhanced_encryption</span>
                        <span>Bank-grade 256-bit encryption</span>
                    </div>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-500">verified_user</span>
                        <span>100% Data Privacy Guarantee</span>
                    </div>
                </div>

            </div>
        </main>
    );
}
