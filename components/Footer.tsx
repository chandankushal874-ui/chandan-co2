import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4 block">
                            Chandan & Co
                        </Link>
                        <p className="text-muted-foreground mb-6">
                            Elevating brands through strategic digital marketing and creative innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Content Strategy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">PPC Advertising</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Our Blog</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start">
                                <MapPin className="mr-3 mt-1 flex-shrink-0 text-primary" size={18} />
                                <span>123 Market Street, Suite 500<br />New Delhi, India 110001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 flex-shrink-0 text-primary" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 flex-shrink-0 text-primary" size={18} />
                                <span>hello@chandanandco.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Chandan & Co. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with ❤️ for Digital Excellence</p>
                </div>
            </div>
        </footer>
    );
}
