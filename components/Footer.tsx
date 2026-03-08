import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Image
                                src="/Tiger Logo.svg"
                                alt="SRE Tiger PMS"
                                width={180}
                                height={50}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm">Regulated by the Securities and Exchange Board of India (SEBI). Registration No: INP000000000</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#pms" className="hover:text-primary transition-colors">Investment Philosophy</a></li>
                            <li><a href="#framework" className="hover:text-primary transition-colors">TIGER Framework</a></li>
                            <li><a href="#performance" className="hover:text-primary transition-colors">Performance</a></li>
                            <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>invest@sretiger.com</li>
                            <li>+91 22 4000 0000</li>
                            <li>Mumbai, India</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} SRE Tiger Portfolio Management Services. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-white transition-colors">Disclosures</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
