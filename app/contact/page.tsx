'use client'

import { useState } from 'react'
import {
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
    MessageSquare,
    Sparkles,
    HelpCircle,
} from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Feedback',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate network dispatch
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 600)
    }

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: 'General Feedback',
            message: '',
        })
        setSubmitted(false)
    }

    const contactChannels = [
        {
            icon: Mail,
            title: 'Email Us Directly',
            detail: 'hello@freshideas.blog',
            action: 'mailto:hello@freshideas.blog',
            actionLabel: 'Write an email',
        },
        {
            icon: Clock,
            title: 'Response Time',
            detail: 'Usually within 24 to 48 hours',
            actionLabel: 'Monday – Friday',
        },
        {
            icon: MapPin,
            title: 'Headquarters',
            detail: 'San Francisco, CA & Remote Worldwide',
            actionLabel: 'Global Team',
        },
    ]

    const faqs = [
        {
            q: 'Can I pitch an idea or submit a guest article?',
            a: 'Yes! Select "Editorial Pitch" in the subject dropdown and include a brief synopsis or outline of your draft. We look for research-backed, original perspectives.',
        },
        {
            q: 'Do you accept sponsorships or brand placements?',
            a: 'We prioritize an ad-free, high-signal reading experience. Brand partnerships are strictly limited to aligned tools and products our team genuinely uses and evaluates.',
        },
        {
            q: 'How can I recommend a topic for a future deep dive?',
            a: 'We love reader suggestions. Drop us a note using this form with any question or concept you would like to see broken down in our Q&A format.',
        },
        {
            q: 'Can I translate or syndicate an article?',
            a: 'Syndication and translation are permitted with proper attribution, author credit, and a canonical link to the original article on our blog.',
        },
    ]

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
            {/* ================= HERO HEADER ================= */}
            <div className="max-w-3xl mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-4">
                    <Sparkles size={14} className="text-[#0088f8]" />
                    <span>Get In Touch</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                    Let&rsquo;s Start a <span className="text-[#0088f8]">Conversation</span>
                </h1>

                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                    Have feedback on an article, a question for our editorial team, or a collaborative
                    pitch? We read every single message and aim to reply promptly.
                </p>
            </div>

            {/* ================= MAIN CONTENT: FORM + INFO ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-24 items-start">
                {/* Contact Form (7 Cols) */}
                <div className="lg:col-span-7 rounded-3xl border border-neutral-800 bg-neutral-950/40 p-6 sm:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800/80">
                        <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[#0088f8]">
                            <MessageSquare size={20} />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg text-white">Send a Message</h2>
                            <p className="text-xs text-neutral-400">Fill out the form below</p>
                        </div>
                    </div>

                    {submitted ? (
                        <div className="py-12 px-6 text-center space-y-4">
                            <div className="w-14 h-14 mx-auto rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
                            <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                                Your message has been sent to our editorial desk. We typically review and
                                reply within 24 to 48 business hours.
                            </p>
                            <div className="pt-4">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-6 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 text-xs font-semibold transition cursor-pointer"
                                >
                                    Send Another Note
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2"
                                    >
                                        Your Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        placeholder="Alex Rivera"
                                        className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-[#0088f8] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:ring-1 focus:ring-[#0088f8]/30"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2"
                                    >
                                        Email Address <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        placeholder="alex@example.com"
                                        className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-[#0088f8] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:ring-1 focus:ring-[#0088f8]/30"
                                    />
                                </div>
                            </div>

                            {/* Subject Dropdown */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2"
                                >
                                    Topic / Inquiry Type
                                </label>
                                <select
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData({ ...formData, subject: e.target.value })
                                    }
                                    className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-[#0088f8] rounded-xl px-4 py-3 text-sm text-white outline-none transition focus:ring-1 focus:ring-[#0088f8]/30 cursor-pointer"
                                >
                                    <option value="General Feedback">General Feedback & Thoughts</option>
                                    <option value="Editorial Pitch">Editorial Pitch / Guest Story</option>
                                    <option value="Topic Suggestion">Suggest a Topic for Deep Dive</option>
                                    <option value="Partnership">Partnership & Collaboration</option>
                                    <option value="Correction or Bug">Report a Bug or Correction</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2"
                                >
                                    Message <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    placeholder="Write your note, feedback, or story pitch here..."
                                    className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-[#0088f8] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:ring-1 focus:ring-[#0088f8]/30 resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0088f8] hover:bg-sky-500 disabled:opacity-70 text-white font-semibold text-sm transition cursor-pointer shadow-lg shadow-[#0088f8]/20"
                            >
                                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                                <Send size={15} />
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Channels & Direct Info (5 Cols) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-950/40 shadow-xl space-y-6">
                        <h2 className="font-bold text-lg text-white mb-2">Direct Contact Channels</h2>

                        <div className="space-y-5">
                            {contactChannels.map((channel, idx) => {
                                const Icon = channel.icon
                                return (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#0088f8] shrink-0">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                                                {channel.title}
                                            </p>
                                            {channel.action ? (
                                                <a
                                                    href={channel.action}
                                                    className="text-sm font-medium text-white hover:text-[#0088f8] transition-colors"
                                                >
                                                    {channel.detail}
                                                </a>
                                            ) : (
                                                <p className="text-sm font-medium text-neutral-200">
                                                    {channel.detail}
                                                </p>
                                            )}
                                            <p className="text-[11px] text-neutral-500 mt-0.5">
                                                {channel.actionLabel}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Social & Community Box */}
                    <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-950/40 shadow-xl">
                        <h3 className="font-bold text-base text-white mb-2">Community & Socials</h3>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                            Connect with us for updates, upcoming publication announcements, and open discussions.
                        </p>

                        <div className="space-y-2.5">
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900 text-xs font-medium text-neutral-300 hover:text-white transition"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="font-bold font-sans">𝕏</span>
                                    <span>Follow on X</span>
                                </span>
                                <span className="text-neutral-500 text-[11px]">@freshideas</span>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900 text-xs font-medium text-neutral-300 hover:text-white transition"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="font-bold">in</span>
                                    <span>Connect on LinkedIn</span>
                                </span>
                                <span className="text-neutral-500 text-[11px]">Fresh Ideas Pub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= FAQ SECTION ================= */}
            <div className="max-w-4xl mx-auto pt-8 border-t border-neutral-800/80">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[2px] font-bold text-[#0088f8] mb-2">
                        <HelpCircle size={14} />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Quick Answers</h2>
                    <p className="text-neutral-400 text-sm">
                        Common queries regarding editorial submissions, collaborations, and content syndication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40"
                        >
                            <h3 className="font-semibold text-base text-white mb-2">
                                {faq.q}
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}