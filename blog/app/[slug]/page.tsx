'use client'

import slugify from 'slugify'
import dummy_context from '@/dummy_context.json'
import Image from 'next/image'
import Link from 'next/link'
import { useState, use } from 'react'
import { notFound } from 'next/navigation'
import { Link as LinkIcon, Check } from 'lucide-react'

// Lightweight inline brand SVGs (avoids broken lucide-react brand imports)
function XIcon() {
    return <span className="text-[18px] font-bold font-sans">𝕏</span>
}

function LinkedInIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
    )
}

export default function ArticlePage({
    params,
}: {
    params?: Promise<{ slug: string }>
}) {
    const resolvedParams = params ? use(params) : null
    const slugish = (resolvedParams?.slug ?? '').toLowerCase()

    const [copied, setCopied] = useState(false)
    const data = dummy_context.sections

    // Case-insensitive, URL-safe slug match
    const article = data.find(
        (element) =>
            slugify(element.heading, { lower: true, strict: true }) === slugish
    )

    if (!article && slugish) {
        notFound()
    }

    if (!article) return null

    const trendingArticles = data
        .filter((item) => item.id !== article.id)
        .slice(0, 4)

    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

    const copyLink = async () => {
        try {
            if (navigator?.clipboard) {
                await navigator.clipboard.writeText(shareUrl)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            }
        } catch {
            // Graceful fallback if clipboard permission is denied
        }
    }

    return (
        <main className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
                {/* ================= MAIN ARTICLE ================= */}
                <article>
                    <div className="tracking-[3px] uppercase text-[11px] text-[#c2c2c2] font-semibold mb-2">
                        {article.category} —{' '}
                        {new Date(article.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </div>

                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                        {article.heading}
                    </h1>

                    <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                        {article.description}
                    </p>

                    <div className="relative w-full h-[35vh] sm:h-[45vh] rounded-2xl overflow-hidden border border-neutral-800 mb-8">
                        <Image
                            src={`/news/${((article.id - 1) % 6) + 1}.jpg`}
                            alt={article.heading}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Q&A / CONTENT SECTIONS */}
                    <div className="space-y-8">
                        {article.context.map((qna, idx) => (
                            <section key={idx} id={`section-${idx}`} className="scroll-mt-20">
                                <div className="flex gap-3 items-center mb-3">
                                    <div className="h-6 w-1 bg-[#0088f8] rounded-full" />
                                    <h2 className="font-bold text-xl sm:text-2xl">
                                        {qna.question}
                                    </h2>
                                </div>
                                <p className="text-neutral-300 leading-relaxed pl-4">
                                    {qna.answer}
                                </p>
                            </section>
                        ))}
                    </div>
                </article>

                {/* ================= SIDEBAR ================= */}
                <aside className="space-y-6 lg:pl-6">
                    {/* TABLE OF CONTENTS */}
                    <div className="border border-neutral-800 p-5 rounded-xl bg-neutral-950/40">
                        <h2 className="font-bold text-base mb-3">Table of Contents</h2>
                        <nav className="space-y-2.5">
                            {article.context.map((qna, idx) => (
                                <a
                                    key={idx}
                                    href={`#section-${idx}`}
                                    className="block text-xs text-neutral-400 hover:text-white transition-colors pl-2 border-l-2 border-neutral-700 hover:border-sky-500"
                                >
                                    {qna.question}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* SHARE ARTICLE */}
                    <div className="border border-neutral-800 p-5 rounded-xl bg-neutral-950/40">
                        <h2 className="font-bold text-sm mb-4">Share This Article</h2>
                        <div className="flex gap-3 items-center">
                            {/* X (Twitter) */}
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition"
                                aria-label="Share on X"
                            >
                                <XIcon />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition"
                                aria-label="Share on LinkedIn"
                            >
                                <LinkedInIcon />
                            </a>

                            {/* Facebook */}
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition"
                                aria-label="Share on Facebook"
                            >
                                <FacebookIcon />
                            </a>

                            {/* Copy Link */}
                            <button
                                type="button"
                                onClick={copyLink}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition cursor-pointer"
                                aria-label="Copy article link"
                            >
                                {copied ? <Check size={18} className="text-green-400" /> : <LinkIcon size={18} />}
                            </button>
                        </div>

                        {copied && (
                            <p className="mt-3 text-xs text-green-400 font-medium">
                                Link copied to clipboard!
                            </p>
                        )}
                    </div>

                    {/* TRENDING ARTICLES */}
                    <div className="border border-neutral-800 p-5 rounded-xl bg-neutral-950/40">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-bold text-sm tracking-wide uppercase text-neutral-200">
                                Trending Articles
                            </h2>
                            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                                Popular
                            </span>
                        </div>
                        <div className="space-y-4">
                            {trendingArticles.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/${slugify(item.heading, { lower: true, strict: true })}`}
                                    className="group flex gap-3 items-center py-2 border-b border-neutral-800/60 last:border-b-0 last:pb-0 transition"
                                >
                                    <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                                        <Image
                                            src={`/news/${((item.id - 1) % 6) + 1}.jpg`}
                                            alt={item.heading}
                                            fill
                                            sizes="64px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2 text-[10px] text-neutral-400 mb-1">
                                            <span className="text-[#0088f8] font-medium uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                            <span>•</span>
                                            <span>
                                                {new Date(item.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                                            {item.heading}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}