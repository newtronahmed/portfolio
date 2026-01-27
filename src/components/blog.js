import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogCard = ({ blog, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card flex flex-col h-full"
        >
            <div className="flex-grow">
                <h3 className="text-xl mb-4 text-white font-semibold leading-tight">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                        {blog.title}
                    </a>
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6">
                    {blog.excerpt}
                </p>
            </div>

            <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-mono text-green uppercase tracking-widest">{blog.date}</span>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-green hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
};

const Blog = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const blogs = [
        {
            title: "Beginner’s Guide to Writing SQL Queries",
            excerpt: "Master the fundamentals of SQL queries, from basic SELECT statements to complex data retrieval.",
            link: "https://devahmed365.hashnode.dev/beginners-guide-to-writing-sql-queries",
            date: "Jan 2024"
        },
        {
            title: "SQL Joins and Subqueries: A Deeper Dive",
            excerpt: "Explaining the complexities of SQL joins and subqueries in an easy-to-understand way for beginners.",
            link: "https://devahmed365.hashnode.dev/beginners-guide-to-writing-sql-queries-sql-joins-and-subqueries",
            date: "Feb 2024"
        },
        {
            title: "Masterclass: Client-Server Architecture",
            excerpt: "An in-depth look at how client-server architecture works and why it is fundamental to the modern web.",
            link: "https://devahmed365.hashnode.dev/masterclass-client-server-architechture",
            date: "Mar 2024"
        }
    ];

    return (
        <section id="blog">
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="title"
            >
                Latest Articles
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog, i) => (
                    <BlogCard key={i} blog={blog} index={i} />
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="https://devahmed365.hashnode.dev" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View All Posts
                </a>
            </div>
        </section>
    );
};

export default Blog;
