import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogPost({ params }: { params: { slug: string } }) {
    // In a real app, we would fetch data based on params.slug
    const slug = params.slug;

    return (
        <div className="min-h-screen pt-24 pb-20">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                            Strategy
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center">
                            <Calendar size={14} className="mr-2" /> Oct 12, 2023
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center">
                            <Clock size={14} className="mr-2" /> 5 min read
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        The Future of Digital Marketing: Trends to Watch in 2024
                    </h1>

                    <div className="flex items-center justify-between border-y border-white/10 py-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                C
                            </div>
                            <div>
                                <div className="font-medium">Chandan Admin</div>
                                <div className="text-xs text-muted-foreground">Marketing Strategist</div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <button className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></button>
                            <button className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></button>
                            <button className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></button>
                            <button className="text-muted-foreground hover:text-primary transition-colors"><Share2 size={20} /></button>
                        </div>
                    </div>
                </header>

                {/* Featured Image Placeholder */}
                <div className="w-full h-[400px] bg-white/5 rounded-2xl mb-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        Featured Image
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-white mb-6">
                        As we move further into the digital age, the landscape of marketing continues to evolve at a breakneck pace. What worked yesterday might be obsolete tomorrow.
                    </p>

                    <h2>1. AI-Driven Personalization</h2>
                    <p>
                        Artificial Intelligence is no longer just a buzzword. It's becoming the backbone of effective marketing strategies. From chatbots that provide instant customer service to algorithms that predict user behavior, AI allows for a level of personalization previously impossible.
                    </p>
                    <p>
                        Brands that leverage AI to deliver tailored content and recommendations will see significantly higher engagement rates.
                    </p>

                    <h2>2. Video Content Dominance</h2>
                    <p>
                        Short-form video content (TikTok, Reels, YouTube Shorts) continues to dominate social media. It's engaging, shareable, and effectively conveys brand personality.
                    </p>
                    <ul>
                        <li>Focus on storytelling</li>
                        <li>Keep it authentic</li>
                        <li>Optimize for mobile viewing</li>
                    </ul>

                    <h2>3. Voice Search Optimization</h2>
                    <p>
                        With the rise of smart speakers and voice assistants, optimizing for voice search is becoming crucial. This means focusing on natural language processing and long-tail keywords that mimic how people actually speak.
                    </p>

                    <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                        <strong>Pro Tip:</strong> Focus on creating content that answers specific questions directly. Structure your data so search engines can easily parse it for featured snippets.
                    </div>

                    <h2>Conclusion</h2>
                    <p>
                        The future of digital marketing is exciting and full of opportunities for those willing to adapt. By staying ahead of these trends, your brand can not only survive but thrive in the competitive digital landscape.
                    </p>
                </div>
            </article>
        </div>
    );
}
