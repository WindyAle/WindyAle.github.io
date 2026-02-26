"use client";

import { useState } from 'react';
import { MarkdownItem } from '@/lib/markdown';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { List, LayoutGrid } from 'lucide-react';

interface Props {
    item: MarkdownItem;
}

export default function PortfolioSection({ item }: Props) {
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <h2 className="text-2xl font-bold tracking-tight">
                    <Link href="/portfolio" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                        {item.data.title || item.name}
                        <span className="text-sm font-normal text-neutral-400">View All &rarr;</span>
                    </Link>
                </h2>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-colors ${
                            viewMode === 'list'
                                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                                : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`}
                        title="리스트 보기"
                    >
                        <List className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md transition-colors ${
                            viewMode === 'grid'
                                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                                : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`}
                        title="그리드 보기"
                    >
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {viewMode === 'list' ? (
                <div className="flex flex-col gap-2">
                    {item.items?.map((subItem) => (
                        <ProjectCard key={subItem.slug} item={subItem} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.items?.map((subItem) => (
                        <ProjectCard key={subItem.slug} item={subItem} verticalLayout />
                    ))}
                </div>
            )}
        </div>
    );
}
