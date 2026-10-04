import Link from 'next/link'
import FilterOut2 from '@/component/header/filter2/filter'
import dummy_content from '@/dummy_context.json'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata = {
    title: 'Fresh Ideas for a Better Tomorrow | Technology & Productivity Blog',
    description:
        'Insights, tutorials, and structured breakdowns on artificial intelligence, design, development, and productivity.',
}

export default function Home() {
    return (
        <>
            {/* ================= HERO BANNER ================= */}
            <section
                className="relative flex min-h-[50vh] sm:min-h-[55vh] items-center border-b border-neutral-800/80 bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.72) 55%, rgba(10,10,10,0.85) 100%), url('/home/hero.png')",
                }}
            >
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 py-12 sm:py-16 flex justify-between items-center">
                    {/* Left Hero Content */}
                    <div className="space-y-5 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800 bg-neutral-950/70 backdrop-blur-md text-xs text-neutral-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0088f8] animate-pulse" />
                            <span className="font-semibold tracking-wider text-[11px] uppercase">
                                Ideas That Matter
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-white tracking-tight">
                            Fresh Ideas <br />
                            for a <span className="text-[#0088f8]">Better Tomorrow</span>
                        </h1>

                        <p className="leading-relaxed text-neutral-300 text-base sm:text-lg max-w-xl font-light">
                            Insights, tutorials, and structured breakdowns on intelligent technology,
                            human productivity, and the ideas driving meaningful progress.
                        </p>

                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <Link
                                href="/topic"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-neutral-900 hover:bg-neutral-200 transition-colors cursor-pointer text-sm shadow-xl"
                            >
                                <span>Explore Topics</span>
                                <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 px-6 py-3.5 font-semibold text-neutral-200 transition-colors text-sm"
                            >
                                <span>Our Mission</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Decorative Pillar */}
                    <div className="hidden md:block text-right pr-4">
                        <div className="border-r-2 border-neutral-700 pr-6 py-4 space-y-3">
                            <p className="text-xs uppercase font-extrabold tracking-[6px] text-neutral-500">
                                READ
                            </p>
                            <p className="text-xs uppercase font-extrabold tracking-[6px] text-neutral-400">
                                LEARN
                            </p>
                            <p className="text-xs uppercase font-extrabold tracking-[6px] text-[#0088f8]">
                                GROW
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ARTICLES FEED & FILTER ================= */}
            <main>
                <FilterOut2 posts={dummy_content.sections} />
            </main>

            {/* ================= NEWSLETTER SECTION ================= */}
            <section className="border-t border-neutral-800/80 py-16 px-4 sm:px-6 md:px-10 bg-neutral-950/40">
                <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-950 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-neutral-400 mb-4">
                        <Sparkles size={14} className="text-[#0088f8]" />
                        <span>Weekly Digest</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                        Stay Ahead of the Curve
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
                        Join our community of forward thinkers. Get curated summaries, technical breakdowns,
                        and new perspectives delivered directly to your inbox.
                    </p>

                    <form
                        action="#"
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-neutral-900 border border-neutral-700 focus:border-[#0088f8] rounded-full px-5 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:ring-1 focus:ring-[#0088f8]/30"
                            required
                        />
                        <button
                            type="submit"
                            className="px-7 py-3 rounded-full bg-[#0088f8] hover:bg-sky-500 text-white font-semibold text-sm transition cursor-pointer shrink-0 shadow-lg shadow-[#0088f8]/20"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="text-[11px] text-neutral-500 mt-4">
                        Zero spam. Unsubscribe at any time with one click.
                    </p>
                </div>
            </section>
        </>
    )
}