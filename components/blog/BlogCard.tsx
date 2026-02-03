import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    imageUrl?: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="glass-card rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 flex flex-col h-full group">
            <div className="h-48 bg-white/5 relative overflow-hidden">
                {/* Placeholder for real image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                    {post.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {post.date}
                    </div>
                    <div className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        {post.readTime}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        Read Article <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
