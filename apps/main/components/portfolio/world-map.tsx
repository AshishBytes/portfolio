export function WorldMap() {
    return (
        <section className="relative mt-6 mb-6">
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                {/* World Map SVG Background - More accurate world outline */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                        viewBox="0 0 1000 500"
                        className="h-full w-full opacity-[0.15]"
                        fill="none"
                        stroke="#999999"
                        strokeWidth="1"
                    >
                        {/* More detailed world map paths */}
                        {/* North America */}
                        <path d="M100 150 Q150 120 200 140 Q250 130 300 150 L320 180 Q280 200 240 190 Q180 210 120 190 Z" fill="none" stroke="#cccccc" strokeWidth="1" />

                        {/* South America */}
                        <path d="M200 250 Q220 240 240 260 Q250 300 230 340 Q210 360 190 340 Q180 300 200 250 Z" fill="none" stroke="#cccccc" strokeWidth="1" />

                        {/* Europe */}
                        <path d="M450 120 Q480 110 510 130 Q520 150 500 170 Q470 160 450 120 Z" fill="none" stroke="#cccccc" strokeWidth="1" />

                        {/* Africa */}
                        <path d="M450 180 Q480 170 510 200 Q520 250 500 300 Q480 320 460 300 Q440 250 450 180 Z" fill="none" stroke="#cccccc" strokeWidth="1" />

                        {/* Asia */}
                        <path d="M520 120 Q600 100 700 130 Q750 150 720 200 Q650 220 580 200 Q540 180 520 120 Z" fill="none" stroke="#cccccc" strokeWidth="1" />

                        {/* Australia */}
                        <path d="M650 300 Q700 290 750 310 Q760 330 730 340 Q680 350 650 300 Z" fill="none" stroke="#cccccc" strokeWidth="1" />

                        {/* Grid lines */}
                        <defs>
                            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f0f0f0" strokeWidth="0.5" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Location Markers with more accurate positioning */}
                <div className="absolute inset-0">
                    {/* India marker */}
                    <div className="absolute" style={{ left: '62%', top: '48%' }}>
                        <div className="relative">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                            <div className="absolute -top-1 -left-1 h-4.5 w-4.5 rounded-full border-2 border-orange-500/30 animate-ping"></div>
                        </div>
                    </div>

                    {/* USA marker */}
                    <div className="absolute" style={{ left: '22%', top: '38%' }}>
                        <div className="relative">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                            <div className="absolute -top-1 -left-1 h-4.5 w-4.5 rounded-full border-2 border-orange-500/30 animate-ping"></div>
                        </div>
                    </div>

                    {/* Europe marker */}
                    <div className="absolute" style={{ left: '48%', top: '32%' }}>
                        <div className="relative">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                            <div className="absolute -top-1 -left-1 h-4.5 w-4.5 rounded-full border-2 border-orange-500/30 animate-ping"></div>
                        </div>
                    </div>

                    {/* Australia marker */}
                    <div className="absolute" style={{ left: '72%', top: '68%' }}>
                        <div className="relative">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                            <div className="absolute -top-1 -left-1 h-4.5 w-4.5 rounded-full border-2 border-orange-500/30 animate-ping"></div>
                        </div>
                    </div>

                    {/* Connection lines - curved paths between locations */}
                    <svg className="absolute inset-0 h-full w-full pointer-events-none">
                        <defs>
                            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#f97316" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>

                        {/* Curved connection lines between major locations */}
                        <path
                            d="M 220 190 Q 350 120 480 160"
                            stroke="url(#connectionGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="3,3"
                            opacity="0.7"
                        />
                        <path
                            d="M 480 160 Q 550 140 620 240"
                            stroke="url(#connectionGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="3,3"
                            opacity="0.7"
                        />
                        <path
                            d="M 620 240 Q 680 280 720 340"
                            stroke="url(#connectionGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="3,3"
                            opacity="0.7"
                        />
                    </svg>
                </div>

                {/* Bottom overlay with text */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        Ping to any world city
                    </div>
                </div>

                {/* Top right info */}
                <div className="absolute top-4 right-4">
                    <div className="rounded-lg bg-white/95 px-3 py-2 text-xs font-medium text-[#666666] backdrop-blur-sm border border-black/[0.08]">
                        Available worldwide
                    </div>
                </div>
            </div>
        </section>
    )
}