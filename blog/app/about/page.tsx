import Link from 'next/link'
import { Sparkles, Compass, Lightbulb, Users, ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react'

export const metadata = {
    title: 'About Us | Fresh Ideas for a Better Tomorrow',
    description: 'Learn about our mission, editorial vision, and core values.',
}

export default function About() {
    const pillars = [
        {
            icon: Lightbulb,
            title: 'High-Signal Depth',
            description:
                'We cut through the hype to deliver structured, high-value perspectives on emerging technology, intelligent systems, and modern software craft.',
            badge: 'Signal Over Noise',
        },
        {
            icon: Users,
            title: 'Human-Centered Tech',
            description:
                'Automation and AI should empower people. We champion collaborative partnerships where human judgment, ethics, and creativity remain paramount.',
            badge: 'People First',
        },
        {
            icon: Layers,
            title: 'Practical Execution',
            description:
                'Clear breakdowns, real-world case studies, and Q&A formats that translate complex concepts into immediately applicable insights.',
            badge: 'Actionable',
        },
        {
            icon: Compass,
            title: 'Curiosity & Growth',
            description:
                'Technology moves quickly. We foster continuous exploration, intellectual honesty, and a mindset of lifelong learning for every reader.',
            badge: 'Always Learning',
        },
    ]

    const stats = [
        { label: 'Knowledge Topics', value: '6+' },
        { label: 'In-Depth Q&As', value: '30+' },
        { label: 'Reading Experience', value: '100% Ad-Free' },
        { label: 'Editorial Cadence', value: 'Weekly' },
    ]

    const coveredTopics = [
        'Artificial Intelligence',
        'Generative Systems',
        'Product Design',
        'Developer Productivity',
        'System Architecture',
        'Career Resilience',
        'Mindful Tech Living',
    ]

    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
            {/* ================= HERO SECTION ================= */}
            <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-5">
                    <Sparkles size={14} className="text-[#0088f8]" />
                    <span>Our Mission & Editorial Story</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                    Illuminating Ideas for a{' '}
                    <span className="text-[#0088f8]">Better Tomorrow</span>
                </h1>

                <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light mb-4">
                    We believe the best way to navigate rapid technological transformation is through
                    curiosity, critical thinking, and human-centered design.
                </p>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                    Founded as a home for thinkers, makers, and innovators, our publication provides
                    lucid analysis at the intersection of intelligent software, modern work culture,
                    and personal growth.
                </p>
            </div>

            {/* ================= STATS BAR ================= */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-950/40 mb-20 shadow-xl">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="text-center md:text-left md:border-r border-neutral-800/80 last:border-r-0 md:pr-6"
                    >
                        <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                            {stat.value}
                        </p>
                        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* ================= EDITORIAL STORY ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
                <div className="space-y-5 text-neutral-300 leading-relaxed text-sm sm:text-base">
                    <div className="inline-block text-xs uppercase tracking-[2px] font-bold text-[#0088f8]">
                        The Story
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                        Why We Focus on Clarity in an Age of Information Overload
                    </h2>

                    <p className="text-neutral-400">
                        Every day, thousands of articles, buzzwords, and product announcements compete
                        for attention. Most summarize the obvious without probing beneath the surface.
                    </p>

                    <p className="text-neutral-400">
                        We take a different approach. Every piece we publish is organized with clear
                        questions and answers, structured breakdowns, and actionable takeaways. We explore
                        not just <em>what</em> is changing, but <em>why</em> it matters and <em>how</em>{' '}
                        you can adapt.
                    </p>

                    <div className="pt-2 flex items-center gap-6 text-neutral-400 text-xs font-medium">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck size={16} className="text-green-400" />
                            Research-Backed
                        </span>
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={16} className="text-sky-400" />
                            Structured Q&A
                        </span>
                    </div>
                </div>

                {/* Pull Quote Card */}
                <div className="relative p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 shadow-2xl">
                    <div className="absolute top-6 left-6 text-5xl text-neutral-700 font-serif select-none pointer-events-none">
                        &ldquo;
                    </div>

                    <blockquote className="relative z-10 text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed italic mb-6 pt-4">
                        The future doesn&rsquo;t belong to algorithms alone—it belongs to people who learn
                        relentlessly, adapt thoughtfully, and build with human purpose.
                    </blockquote>

                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-white">Editorial Team</p>
                            <p className="text-xs text-neutral-500">Fresh Ideas Publication</p>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0088f8]/10 text-[#0088f8] border border-[#0088f8]/20">
                            Our Motto
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= CORE VALUES ================= */}
            <div className="mb-24">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-block text-xs uppercase tracking-[2px] font-bold text-[#0088f8] mb-2">
                        Guiding Principles
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        What Drives Every Article We Write
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base">
                        Our content philosophy is anchored in four uncompromising standards of quality,
                        integrity, and readability.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon
                        return (
                            <div
                                key={idx}
                                className="p-7 rounded-2xl border border-neutral-800 bg-neutral-950/40 hover:border-neutral-700 transition duration-200 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#0088f8] group-hover:scale-110 transition-transform">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800">
                                            {pillar.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0088f8] transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* ================= TOPICS COVERED ================= */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-950/40 mb-20 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    What We Write About
                </h3>
                <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
                    From deep neural network evolution to minimalist work habits, our content spans a wide
                    variety of interconnected disciplines.
                </p>

                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8">
                    {coveredTopics.map((topic, idx) => (
                        <span
                            key={idx}
                            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-800"
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                <Link
                    href="/topic"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-200 transition"
                >
                    <span>Browse All Topics</span>
                    <ArrowRight size={15} />
                </Link>
            </div>

            {/* ================= CTA BANNER ================= */}
            <div className="text-center max-w-2xl mx-auto py-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Have a Question or an Idea?
                </h2>
                <p className="text-neutral-400 text-sm mb-6">
                    We welcome feedback, collaboration ideas, topic suggestions, and thoughtful conversations.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-6 py-3 rounded-full bg-[#0088f8] hover:bg-sky-500 text-white font-semibold text-sm transition"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-full border border-neutral-700 hover:bg-neutral-900 text-neutral-300 font-semibold text-sm transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    )
}