import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/">
                            <Image
                                src="/Tiger Logo.svg"
                                alt="Tiger Assets"
                                width={180}
                                height={50}
                                className="h-10 w-auto brightness-0 invert mb-6"
                            />
                        </Link>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                            Tiger Assets is an exclusive portfolio management and advisory firm. We implement diligently researched, customized investment strategies to help you meet your long-term financial goals in a risk-appropriate manner.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Products Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Offerings</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/products/sre-tiger-pms" className="hover:text-primary transition-colors">SRE Tiger PMS</Link></li>
                            <li><Link href="/products/sme-advisory" className="hover:text-primary transition-colors">SME Advisory</Link></li>
                            <li><Link href="/products/hni-model" className="hover:text-primary transition-colors">HNI Model</Link></li>
                            <li><Link href="/products/fixed-income" className="hover:text-primary transition-colors">Fixed Income</Link></li>
                        </ul>
                    </div>

                    {/* Disclosures & Legal */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Disclosures</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/disclosures/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
                            <li><Link href="/disclosures/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/disclosures/investor-charter-ia" className="hover:text-primary transition-colors">Investor Charter (IA)</Link></li>
                            <li><Link href="/disclosures/investor-charter-pms" className="hover:text-primary transition-colors">Investor Charter (PMS)</Link></li>
                            <li><Link href="/disclosures/complaint-data-ia" className="hover:text-primary transition-colors">Complaint Data</Link></li>
                            <li><Link href="/disclosures/escalation-matrix" className="hover:text-primary transition-colors">Escalation Matrix</Link></li>
                            <li><Link href="/disclosures/pms-disclosure" className="hover:text-primary transition-colors">PMS Disclosure</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>invest@tigerassets.in</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>+91 22 6193 7300</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>2nd Floor, Cama Building, Dalal Street, Fort, Mumbai 400 001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs mt-12">
                    <p>
                        Regulated by the Securities and Exchange Board of India (SEBI). Registration No: INP000005795
                    </p>
                    <p>&copy; {new Date().getFullYear()} Tiger Assets Advisory Private Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
