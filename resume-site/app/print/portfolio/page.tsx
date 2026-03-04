import { getAllPortfolioItems } from '@/lib/markdown';
import PrintButton from '../PrintButton';

export default async function PortfolioPrintPage() {
    const portfolioItems = await getAllPortfolioItems();

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <style>{`
                @page {
                    size: A4 landscape;
                    margin: 14mm 18mm;
                }
                @media print {
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .no-print { display: none !important; }
                    button[aria-label="Toggle theme"] { display: none !important; }
                    .page-break { break-after: page; }
                }
                button[aria-label="Toggle theme"] { display: none !important; }
                /* 프로젝트 회고 섹션 숨기기 (마지막 h2 + p 패턴) */
                .markdown-content h2:last-of-type:has(+ p) { display: none !important; }
                .markdown-content h2:last-of-type + p { display: none !important; }
                .markdown-content h2:last-of-type + p + p { display: none !important; }
                .markdown-content h2:last-of-type + p + p + p { display: none !important; }
            `}</style>

            <PrintButton />

            {/* 브라우저 미리보기: A4 landscape 컨테이너 목록 */}
            <div className="flex flex-col gap-12 py-8">
                {portfolioItems.map((item, idx) => (
                    <div
                        key={item.slug}
                        className={`w-[297mm] mx-auto bg-white shadow-xl print:shadow-none print:w-full print:mx-0 px-[18mm] py-[14mm] ${idx < portfolioItems.length - 1 ? 'page-break print:px-0 print:py-0' : ''}`}
                    >
                        {/* 프로젝트 번호 + 제목 */}
                        <div className="mb-5">
                            <p className="text-[10px] font-mono text-slate-400 mb-1">
                                PROJECT {String(idx + 1).padStart(2, '0')} / {portfolioItems.length}
                            </p>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                                {item.data.title}
                            </h2>
                            {item.data.slogan && (
                                <p className="mt-1 text-sm text-slate-500 italic">&ldquo;{item.data.slogan}&rdquo;</p>
                            )}
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                {item.data.period && (
                                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                        {item.data.period}
                                    </span>
                                )}
                                {(item.data.badges as string[] | undefined)?.map((badge: string) => (
                                    <span key={badge} className="text-[10px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 본문: 이미지 갤러리(왼쪽) + 내용(오른쪽) — landscape 공간 활용 */}
                        <div className="flex gap-6">
                            {/* 이미지 갤러리 */}
                            {(item.data.image || item.data.gallery) && (
                                <div className="shrink-0 w-56 flex flex-col gap-2">
                                    {/* 메인 이미지 */}
                                    {item.data.image && (
                                        <img
                                            src={item.data.image}
                                            alt={`${item.data.title} - main`}
                                            className="w-full h-28 object-cover rounded border border-slate-200"
                                        />
                                    )}
                                    {/* 갤러리 이미지들 (2열 그리드) */}
                                    {item.data.gallery && (item.data.gallery as string[]).length > 0 && (
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {(item.data.gallery as string[]).slice(0, 6).map((img, imgIdx) => (
                                                <img
                                                    key={imgIdx}
                                                    src={img}
                                                    alt={`${item.data.title} - ${imgIdx + 1}`}
                                                    className="w-full h-16 object-cover rounded border border-slate-200"
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {/* Links */}
                                    <div className="mt-1 flex flex-col gap-0.5">
                                        {item.data.github && (
                                            <p className="text-[8px] text-slate-400 font-mono break-all leading-tight">
                                                🔗 {item.data.github.replace('https://', '')}
                                            </p>
                                        )}
                                        {item.data.youtube && (
                                            <p className="text-[8px] text-slate-400 font-mono break-all leading-tight">
                                                🎬 {item.data.youtube.replace('https://', '')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* 마크다운 내용 */}
                            <div
                                className="markdown-content flex-1 text-[11px] leading-relaxed text-slate-700 overflow-hidden
                                    [&_h2]:text-sm [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-4 [&_h2]:mb-1.5 [&_h2]:first:mt-0
                                    [&_h1]:hidden
                                    [&_h2:has(+ul>li>a[href*='youtube'])]:hidden
                                    [&_ul:has(li>a[href*='youtube'])]:hidden
                                    [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-0.5
                                    [&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-0.5
                                    [&_li]:text-[10.5px] [&_li]:text-slate-600 [&_li]:leading-snug
                                    [&_blockquote]:hidden
                                    [&_p]:text-[10.5px] [&_p]:text-slate-600 [&_p]:mb-1
                                    [&_strong]:text-slate-900 [&_strong]:font-semibold
                                    [&_table]:w-full [&_table]:text-[10px] [&_table]:border-collapse [&_table]:mt-2
                                    [&_th]:bg-slate-100 [&_th]:text-left [&_th]:px-2 [&_th]:py-1 [&_th]:border [&_th]:border-slate-200
                                    [&_td]:px-2 [&_td]:py-1 [&_td]:border [&_td]:border-slate-200"
                                dangerouslySetInnerHTML={{ __html: item.contentHtml || '' }}
                            />

                            {/* 이미지 없는 경우 Links */}
                            {!item.data.image && !item.data.gallery && (item.data.github || item.data.youtube) && (
                                <div className="shrink-0 text-[9px] text-slate-400 font-mono mt-auto flex flex-col gap-1">
                                    {item.data.github && (
                                        <span>🔗 {item.data.github.replace('https://', '')}</span>
                                    )}
                                    {item.data.youtube && (
                                        <span>🎬 {item.data.youtube.replace('https://', '')}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
