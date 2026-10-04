'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import slugify from 'slugify'
import dummy_context from '@/dummy_context.json'

const topicDescriptions: Record<string, string> = {
    Technology:
        'Intelligent systems, generative AI, automation, and emerging digital frontiers.',
    Design:
        'Transforming traditional workflows with modern aesthetic and interface thinking.',
    Productivity:
        'Collaborative human-AI partnerships, efficiency systems, and peak performance.',
    Development:
        'Navigating information overload and building resilient software systems.',
    Career:
        'Communication strategies, organizational resilience, and leading through change.',
    Lifestyle:
        'The human element, overcoming adoption hurdles, and mindful digital living.',
}

function TopicContent() {
    const searchParams = useSearchParams()
    const queryTopic = searchParams.get('topic') || searchParams.get('category')

    const [selectedTopic, setSelectedTopic] = useState<string | null>(
        queryTopic && queryTopic.toLowerCase() !== 'all' ? queryTopic : null
    )

    const posts = dummy_context.sections

    // List of unique topics in the dataset
    const topics = useMemo(() => {
        return Array.from(new Set(posts.map((p) => p.category)))
    }, [posts])

    // Articles belonging to the selected topic
    const topicArticles = useMemo(() => {
        if (!selectedTopic) return []
        return posts.filter(
            (p) => p.category.toLowerCase() === selectedTopic.toLowerCase()
        )
    }, [posts, selectedTopic])

    // -------------------------------------------------------------
    // VIEW 1: INSIDE A SELECTED TOPIC
    // -------------------------------------------------------------
    if (selectedTopic) {
        const topicDesc =
            topicDescriptions[selectedTopic] ||
            'Explore the key articles, core concepts, and headings within this topic.'

        return (
            <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
                {/* Back Navigation */}
                <div className="mb-8">
                    <button
                        type="button"
                        onClick={() => setSelectedTopic(null)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition cursor-pointer"
                    >
                        <span>&larr;</span>
                        <span>Back to All Topics</span>
                    </button>
                </div>

                {/* Topic Header */}
                <div className="pb-8 mb-10 border-b border-neutral-800">
                    <div className="text-[11px] font-bold uppercase tracking-[2px] text-[#0088f8] mb-2">
                        Topic Detail
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
                        {selectedTopic}
                    </h1>
                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
                        {topicDesc}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-neutral-500">
                        <span>
                            {topicArticles.length}{' '}
                            {topicArticles.length === 1 ? 'Article' : 'Articles'}
                        </span>
                        <span>&bull;</span>
                        <span>
                            {topicArticles.reduce(
                                (acc, item) => acc + (item.subcontents?.length || 0),
                                0
                            )}{' '}
                            Subtopics Covered
                        </span>
                    </div>
                </div>

                {/* Articles & Headings List */}
                <div className="space-y-12">
                    {topicArticles.map((article) => {
                        const articleSlug = slugify(article.heading, {
                            lower: true,
                            strict: true,
                        })

                        return (
                            <div
                                key={article.id}
                                className="rounded-3xl border border-neutral-800 bg-neutral-950/40 p-6 sm:p-8 shadow-xl"
                            >
                                {/* Article Main Header */}
                                <div className="mb-6">
                                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                                        Published on{' '}
                                        {new Date(article.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </div>

                                    <Link href={`/${articleSlug}`} className="group block mb-3">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#0088f8] transition-colors leading-tight">
                                            {article.heading}
                                        </h2>
                                    </Link>

                                    <p className="text-sm text-neutral-400 leading-relaxed max-w-3xl">
                                        {article.description}
                                    </p>
                                </div>

                                {/* Thumbnail Preview */}
                                <div className="relative w-full h-44 sm:h-64 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-8">
                                    <Image
                                        src={`/news/${((article.id - 1) % 6) + 1}.jpg`}
                                        alt={article.heading}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 800px"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Core Themes / Subtopics */}
                                {article.subcontents && article.subcontents.length > 0 && (
                                    <div className="mb-8 p-5 sm:p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/40">
                                        <h3 className="text-xs font-bold uppercase tracking-[2px] text-neutral-300 mb-3.5">
                                            Core Subtopics & Themes
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {article.subcontents.map((sub, sIdx) => (
                                                <div
                                                    key={sIdx}
                                                    className="flex items-start gap-2.5 text-xs text-neutral-300 leading-snug"
                                                >
                                                    <span className="text-[#0088f8] font-bold text-sm leading-none mt-0.5">
                                                        &bull;
                                                    </span>
                                                    <span>{sub}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Q&A Section Headings */}
                                {article.context && article.context.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-xs font-bold uppercase tracking-[2px] text-neutral-300 mb-3.5">
                                            Key Headings & Discussions
                                        </h3>
                                        <div className="space-y-2.5">
                                            {article.context.map((qna, qIdx) => (
                                                <Link
                                                    key={qIdx}
                                                    href={`/${articleSlug}#section-${qIdx}`}
                                                    className="group flex items-start gap-3 p-3.5 rounded-xl border border-neutral-800/60 bg-neutral-900/30 hover:bg-neutral-900/80 hover:border-neutral-700 transition"
                                                >
                                                    <span className="text-[11px] font-mono text-neutral-500 pt-0.5">
                                                        0{qIdx + 1}
                                                    </span>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                                                            {qna.question}
                                                        </h4>
                                                        <p className="text-xs text-neutral-500 line-clamp-1 mt-1">
                                                            {qna.answer}
                                                        </p>
                                                    </div>
                                                    <span className="text-xs text-neutral-500 group-hover:text-[#0088f8] transition-colors">
                                                        &rarr;
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Card Footer CTA */}
                                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                                    <span className="text-xs text-neutral-500">
                                        Full In-Depth Article
                                    </span>
                                    <Link
                                        href={`/${articleSlug}`}
                                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition"
                                    >
                                        <span>Read Complete Article</span>
                                        <span>&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Switch Topic Bar */}
                <div className="mt-16 pt-8 border-t border-neutral-800">
                    <p className="text-xs uppercase tracking-[2px] font-semibold text-neutral-500 mb-3">
                        Other Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {topics
                            .filter((t) => t.toLowerCase() !== selectedTopic.toLowerCase())
                            .map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => setSelectedTopic(t)}
                                    className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-300 hover:text-white hover:border-neutral-700 transition cursor-pointer"
                                >
                                    {t}
                                </button>
                            ))}
                    </div>
                </div>
            </main>
        )
    }

    // -------------------------------------------------------------
    // VIEW 2: TOPIC DIRECTORY (NO ICONS, SELECT A TOPIC)
    // -------------------------------------------------------------
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
            {/* Page Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
                <div className="text-[11px] font-bold uppercase tracking-[2px] text-[#0088f8] mb-3">
                    Curated Directory
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                    Topics
                </h1>
                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                    Select a topic below to explore its articles, key themes, and structured headings.
                </p>
            </div>

            {/* Topics Grid (Without Icons) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {topics.map((topicName) => {
                    const count = posts.filter((p) => p.category === topicName).length
                    const desc =
                        topicDescriptions[topicName] ||
                        'Browse articles and structured breakdowns under this topic.'

                    return (
                        <button
                            key={topicName}
                            type="button"
                            onClick={() => setSelectedTopic(topicName)}
                            className="group text-left p-6 sm:p-7 rounded-2xl border border-neutral-800 bg-neutral-950/40 hover:bg-neutral-900/60 hover:border-neutral-700 transition duration-200 cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                                        {count} {count === 1 ? 'Article' : 'Articles'}
                                    </span>
                                    <span className="text-xs text-neutral-600 group-hover:text-[#0088f8] transition-colors">
                                        &rarr;
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-2.5 group-hover:text-[#0088f8] transition-colors">
                                    {topicName}
                                </h2>

                                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                                    {desc}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                <span>View Headings & Content</span>
                                <span className="font-semibold text-[#0088f8]">&rarr;</span>
                            </div>
                        </button>
                    )
                })}
            </div>
        </main>
    )
}

export default function Topic() {
    return (
        <Suspense
            fallback={
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-neutral-700 border-t-white rounded-full animate-spin" />
                </div>
            }
        >
            <TopicContent />
        </Suspense>
    )
}