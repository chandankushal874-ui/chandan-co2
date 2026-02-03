import BlogCard from "@/components/blog/BlogCard";

// Mock data for blog posts
const blogPosts = [
    {
        id: "1",
        slug: "future-of-digital-marketing-2024",
        title: "The Future of Digital Marketing: Trends to Watch in 2024",
        excerpt: "Discover the emerging technologies and strategies that will shape the digital marketing landscape in the coming year.",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        category: "Strategy",
        imageUrl: "/blog-1.jpg"
    },
    {
        id: "2",
        slug: "seo-best-practices-guide",
        title: "Complete Guide to SEO Optimization and Ranking High",
        excerpt: "Learn the fundamental principles of SEO that will help your website climb the search engine rankings.",
        date: "Nov 05, 2023",
        readTime: "8 min read",
        category: "SEO",
        imageUrl: "/blog-2.jpg"
    },
    {
        id: "3",
        slug: "social-media-engagement-hacks",
        title: "10 Social Media Hacks to Boost Engagement Instantly",
        excerpt: "Struggling with low engagement? Try these proven tactics to get your audience interacting with your content.",
        date: "Dec 15, 2023",
        readTime: "4 min read",
        category: "Social Media",
        imageUrl: "/blog-3.jpg"
    },
    {
        id: "4",
        slug: "content-marketing-roi",
        title: "Measuring the ROI of Your Content Marketing Efforts",
        excerpt: "How to track the right metrics and prove the value of your content strategy to stakeholders.",
        date: "Jan 10, 2024",
        readTime: "6 min read",
        category: "Analytics",
        imageUrl: "/blog-4.jpg"
    },
    {
        id: "5",
        slug: "email-marketing-automation",
        title: "Mastering Email Marketing Automation for Growth",
        excerpt: "Set up powerful email workflows that nurture leads and drive sales while you sleep.",
        date: "Feb 02, 2024",
        readTime: "7 min read",
        category: "Email",
        imageUrl: "/blog-5.jpg"
    },
    {
        id: "6",
        slug: "brand-storytelling-guide",
        title: "The Art of Brand Storytelling in a Digital Age",
        excerpt: "Connect with your audience on a deeper level by crafting compelling brand narratives.",
        date: "Feb 20, 2024",
        readTime: "5 min read",
        category: "Branding",
        imageUrl: "/blog-6.jpg"
    }
];

export default function BlogListing() {
    return (
        <div className="min-h-screen pb-20">
            {/* Blog Header */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary/20 blur-[100px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Insights</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Expert advice, industry trends, and strategic tips to help your business grow.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="glass-card p-10 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-purple-600/10 -z-10" />
                    <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-muted-foreground mb-8">Get the latest marketing insights delivered directly to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-5 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-primary focus:outline-none"
                        />
                        <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
