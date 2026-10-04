'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import { ArrowRight, BookOpen } from 'lucide-react'

interface Post {
    id: number
    heading: string
    category: string
    description: string
    date: string
    image?: string
    context: Array<{ question: string; answer: string }>
    subcontents?: string[]
}

export default function FilterOut2({ posts }: { posts: Post[] }) {
    const [activeCategory, setActiveCategory] = useState('All')

    // Extract unique categories from dataset
    const categories = useMemo(() => {
        const unique = Array.from(new Set(posts.map((p) => p.category)))
        return ['All', ...unique]
    }, [posts])

    // Filter posts
    const filteredPosts = useMemo(() => {
        if (activeCategory === 'All') return posts
        return posts.filter(
            (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
        )
    }, [posts, activeCategory])

    // Top featured article (only shown when 'All' is selected)
    const featuredPost = activeCategory === 'All' && posts.length > 0 ? posts[0] : null
    const gridPosts =
        activeCategory === 'All' && posts.length > 1 ? filteredPosts.slice(1) : filteredPosts

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14">
            {/* ================= FEATURED POST HERO (IF 'ALL') ================= */}
            {featuredPost && (
                <div className="mb-14 sm:mb-16">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#0088f8]">
                            Featured Article
                        </span>
                        <span className="text-xs text-neutral-500">Editor&rsquo;s Pick</span>
                    </div>

                    <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 rounded-3xl border border-neutral-800 bg-neutral-950/50 hover:border-neutral-700 transition-all duration-300 overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 items-center">
                        {/* Featured Image */}
                        <Link
                            href={`/${slugify(featuredPost.heading, { lower: true, strict: true })}`}
                            className="relative lg:col-span-7 w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-neutral-900 block"
                        >
                            <Image
                                src={`/news/${((featuredPost.id - 1) % 6) + 1}.jpg`}
                                alt={featuredPost.heading}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>

                        {/* Featured Content */}
                        <div className="lg:col-span-5 flex flex-col justify-center py-2 lg:pr-4">
                            <div className="flex items-center gap-3 text-xs mb-3">
                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0088f8]/10 text-[#0088f8] border border-[#0088f8]/20">
                                    {featuredPost.category}
                                </span>
                                <span className="text-neutral-500 text-[11px]">
                                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>

                            <Link
                                href={`/${slugify(featuredPost.heading, { lower: true, strict: true })}`}
                                className="block mb-3"
                            >
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-[#0088f8] transition-colors leading-tight">
                                    {featuredPost.heading}
                                </h2>
                            </Link>

                            <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                                {featuredPost.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 mt-auto">
                                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                                    <BookOpen size={14} />
                                    <span>{featuredPost.context?.length || 5} Key Topics</span>
                                </span>

                                <Link
                                    href={`/${slugify(featuredPost.heading, { lower: true, strict: true })}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition"
                                >
                                    <span>Read Story</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= CATEGORY FILTER PILLS ================= */}
            <div className="mb-10 pb-6 border-b border-neutral-800/80">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {activeCategory === 'All' ? 'Latest Stories' : `${activeCategory} Articles`}
                    </h2>
                    <span className="text-xs text-neutral-400">
                        {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
                    </span>
                </div>

                {/* Horizontal Scrolling Pill Bar */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {categories.map((category) => {
                        const isCurrent =
                            activeCategory.toLowerCase() === category.toLowerCase()
                        const count =
                            category === 'All'
                                ? posts.length
                                : posts.filter(
                                      (p) => p.category.toLowerCase() === category.toLowerCase()
                                  ).length

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-xs font-medium shrink-0 transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                                    isCurrent
                                        ? 'bg-white text-neutral-900 font-semibold shadow-md'
                                        : 'bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                                }`}
                            >
                                <span>{category}</span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                                        isCurrent
                                            ? 'bg-neutral-200 text-neutral-900 font-bold'
                                            : 'bg-neutral-800 text-neutral-400'
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* ================= ARTICLES GRID ================= */}
            {gridPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {gridPosts.map((post) => {
                        const postSlug = slugify(post.heading, { lower: true, strict: true })

                        return (
                            <article
                                key={post.id}
                                className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950/40 hover:border-neutral-700 transition-all duration-300 overflow-hidden shadow-xl"
                            >
                                {/* Thumbnail */}
                                <Link
                                    href={`/${postSlug}`}
                                    className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-900 block"
                                >
                                    <Image
                                        src={`/news/${((post.id - 1) % 6) + 1}.jpg`}
                                        alt={post.heading}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-3 text-xs">
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0088f8] bg-[#0088f8]/10 px-2 py-0.5 rounded-full border border-[#0088f8]/20">
                                            {post.category}
                                        </span>
                                        <span className="text-neutral-500 text-[11px]">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>

                                    <Link href={`/${postSlug}`} className="block mb-2.5">
                                        <h3 className="font-bold text-lg text-white group-hover:text-[#0088f8] transition-colors line-clamp-2 leading-snug">
                                            {post.heading}
                                        </h3>
                                    </Link>

                                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-6 flex-1">
                                        {post.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs mt-auto">
                                        <span className="inline-flex items-center gap-1.5 text-neutral-500 text-[11px]">
                                            <BookOpen size={13} />
                                            <span>{post.context?.length || 5} Sections</span>
                                        </span>

                                        <Link
                                            href={`/${postSlug}`}
                                            className="inline-flex items-center gap-1 text-[#0088f8] group-hover:text-sky-300 font-medium transition-colors"
                                        >
                                            <span>Read Article</span>
                                            <ArrowRight
                                                size={14}
                                                className="group-hover:translate-x-1 transition-transform"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            ) : (
                <div className="text-center py-16 px-4 rounded-2xl border border-neutral-800 bg-neutral-950/30">
                    <p className="text-neutral-300 font-semibold mb-2">
                        No articles found in &ldquo;{activeCategory}&rdquo;
                    </p>
                    <p className="text-xs text-neutral-500 mb-6">
                        Try selecting another category or check back later.
                    </p>
                    <button
                        type="button"
                        onClick={() => setActiveCategory('All')}
                        className="px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition cursor-pointer"
                    >
                        View All Articles
                    </button>
                </div>
            )}
        </section>
    )
}