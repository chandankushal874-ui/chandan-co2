import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Megaphone, Users, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300">
                        Award-Winning Digital Agency
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Elevate Your Brand with <br />
                        <span className="text-gradient">Data-Driven Strategy</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        We transform businesses through innovative digital marketing, stunning web design, and strategic content creation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/#services"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Comprehensive digital solutions tailored to scale your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Globe className="w-10 h-10 text-blue-400" />}
                            title="Web Development"
                            description="Custom, high-performance websites built with Next.js and modern technologies that convert visitors into customers."
                        />
                        <ServiceCard
                            icon={<Megaphone className="w-10 h-10 text-pink-400" />}
                            title="Social Media Marketing"
                            description="Strategic campaigns that build community, increase engagement, and drive brand awareness across all platforms."
                        />
                        <ServiceCard
                            icon={<BarChart3 className="w-10 h-10 text-green-400" />}
                            title="SEO & Analytics"
                            description="Data-driven SEO strategies to boost your organic ranking and detailed analytics to track real growth."
                        />
                    </div>
                </div>
            </section>

            {/* Social Proof / Stats */}
            <section className="py-20 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                            <div className="text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                            <div className="text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">150%</div>
                            <div className="text-muted-foreground">Avg ROI Increase</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Book a free consultation today and let's discuss how we can take your brand to the next level.
                    </p>
                    <form className="max-w-md mx-auto space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                        />
                        <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all">
                            Schedule Consultation
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
            <div className="mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
            <div className="mt-6 flex items-center text-primary font-medium cursor-pointer group-hover:translate-x-2 transition-transform">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </div>
        </div>
    );
}
