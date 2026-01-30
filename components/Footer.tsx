import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-20 px-6 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Image
                        src="/Tiger Logo.svg"
                        alt="Tiger Assets"
                        width={160}
                        height={44}
                        className="h-10 w-auto brightness-0 invert"
                    />
                    <p className="text-zinc-600 font-medium text-sm">
                        © 2026 Tiger Assets Private Limited. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-12">
                    <div className="flex flex-col gap-4">
                        <div className="text-brand-orange font-black text-xs uppercase tracking-widest">Products</div>
                        <a href="#pms" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Tiger PMS</a>
                        <a href="#fip" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Fixed Income</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-brand-orange font-black text-xs uppercase tracking-widest">Company</div>
                        <a href="#framework" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">TIGER Framework</a>
                        <a href="#team" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Our Team</a>
                    </div>
                </div>

                <div className="text-zinc-600 text-xs max-w-xs text-center md:text-right font-medium">
                    Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
                </div>
            </div>
        </footer>
    );
}
