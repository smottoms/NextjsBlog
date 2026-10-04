"use client";

import { useState, useRef, useEffect } from "react";
import dummy_context from "@/dummy_context.json";
import Link from "next/link";
import Image from "next/image";
import slugify from "slugify";
import { Search, X } from "lucide-react";

interface SearchBarProps {
    className?: string;
    placeholder?: string;
    onSelect?: () => void;
    autoFocus?: boolean;
}

export default function SearchBar({
    className = "",
    placeholder = "Search articles, topics, questions...",
    onSelect,
    autoFocus = false,
}: SearchBarProps) {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const query = search.toLowerCase().trim();

    // Multi-field search across heading, category, description, and Q&A context
    const results = query
        ? dummy_context.sections.filter((post) => {
              return (
                  post.heading.toLowerCase().includes(query) ||
                  post.category.toLowerCase().includes(query) ||
                  post.description?.toLowerCase().includes(query) ||
                  post.context.some(
                      (item) =>
                          item.question.toLowerCase().includes(query) ||
                          item.answer.toLowerCase().includes(query)
                  )
              );
          })
        : [];

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Dismiss on Escape key
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            setSearch("");
            setIsOpen(false);
        }
    };

    const handleClear = () => {
        setSearch("");
        setIsOpen(false);
    };

    const handleItemClick = () => {
        setSearch("");
        setIsOpen(false);
        if (onSelect) onSelect();
    };

    return (
        <div ref={containerRef} className={`relative w-full max-w-lg ${className}`}>
            {/* Search Input Container */}
            <div className="relative flex items-center">
                <Search
                    size={17}
                    className="absolute left-3.5 text-neutral-400 pointer-events-none transition-colors"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => {
                        if (search.trim()) setIsOpen(true);
                    }}
                    onKeyDown={handleKeyDown}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    className="w-full h-10 bg-neutral-900/90 hover:bg-neutral-900 focus:bg-neutral-950 border border-neutral-700/80 focus:border-[#0088f8] rounded-full pl-10 pr-9 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0088f8]/20 shadow-inner"
                />

                {search && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
                        aria-label="Clear search"
                    >
                        <X size={15} />
                    </button>
                )}
            </div>

            {/* Results Dropdown */}
            {isOpen && search.trim() !== "" && (
                <div className="absolute top-full right-0 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[92vw] sm:max-w-none mt-2 z-50 bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header bar with counter */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800/80 text-[11px] font-medium tracking-wide uppercase text-neutral-400 bg-neutral-900/50">
                        <span>
                            {results.length} {results.length === 1 ? "Result" : "Results"} Found
                        </span>
                        <span className="text-[10px] text-neutral-500 lowercase tracking-normal">
                            esc to close
                        </span>
                    </div>

                    {/* Scrollable list */}
                    <div className="max-h-[60vh] sm:max-h-[380px] overflow-y-auto divide-y divide-neutral-900 p-1.5 space-y-1">
                        {results.length > 0 ? (
                            results.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/${slugify(post.heading, { lower: true, strict: true })}`}
                                    onClick={handleItemClick}
                                    className="group flex gap-3 p-2.5 rounded-xl hover:bg-neutral-900 transition-colors duration-150 items-center"
                                >
                                    {/* Thumbnail Image */}
                                    <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                                        <Image
                                            src={`/news/${((post.id - 1) % 6) + 1}.jpg`}
                                            alt={post.heading}
                                            fill
                                            sizes="56px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Article Details */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0088f8] bg-[#0088f8]/10 px-2 py-0.5 rounded-full border border-[#0088f8]/20">
                                                {post.category}
                                            </span>
                                            {post.date && (
                                                <span className="text-[11px] text-neutral-500">
                                                    {new Date(post.date).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white line-clamp-1 leading-snug transition-colors">
                                            {post.heading}
                                        </h3>

                                        {post.description && (
                                            <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                                                {post.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-7 px-4">
                                <p className="text-sm font-medium text-neutral-300 mb-1">
                                    No results found
                                </p>
                                <p className="text-xs text-neutral-500">
                                    No articles match &ldquo;{search}&rdquo;. Try another keyword.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}