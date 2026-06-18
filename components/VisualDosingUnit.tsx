"use client";

import React from "react";
import Image from "next/image";

interface VisualDosingUnitProps {
    currentPPM: number;
    targetPPM: number;
    pumpStatus: "STANDBY" | "INJECTING";
    narrative?: string;
}

export default function VisualDosingUnit({
    currentPPM,
    targetPPM,
    pumpStatus,
    narrative,
}: VisualDosingUnitProps) {
    // 1. Calculate Biofilm Opacity
    // Logic: 0 PPM = 100% Dirty (0.8 opacity)
    //        5 PPM = Target/Clean (0.05 opacity - barely visible residue)
    //        >6 PPM = Super Clean (0 opacity)
    // We clamp values to be safe.
    const calculateBiofilmOpacity = (ppm: number) => {
        // Inverse relationship: Lower PPM = Higher Opacity
        // Linear map: 0 -> 0.9, 6 -> 0.0
        const maxPPM = 6.0;
        const maxOpacity = 0.9;

        // Safety clamp
        if (ppm >= maxPPM) return 0;
        if (ppm <= 0) return maxOpacity;

        // (6 - ppm) / 6 * 0.9
        return ((maxPPM - ppm) / maxPPM) * maxOpacity;
    };

    const biofilmOpacity = calculateBiofilmOpacity(currentPPM);

    return (
        <div
            className="relative w-full h-full min-h-[400px] rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl group"
            role="img"
            aria-label={`Dosing system visualization showing ${currentPPM.toFixed(2)} ppm current reading, target ${targetPPM.toFixed(1)} ppm, pump status ${pumpStatus.toLowerCase()}`}
        >

            {/* LAYER 1: Base Schematic */}
            {/* We use object-contain to ensure the whole loops is visible, or cover for immersion. Cover is better for 'Digital Twin' feel. */}
            {/* We add a gentle 'breathing' animation to the machine to make it feel alive */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/cooling-loop-schematic.webp"
                    alt="Digital Twin Cooling Circuit"
                    fill
                    className="object-cover opacity-90 transition-transform duration-[10s] ease-in-out group-hover:scale-110"
                    priority
                />
            </div>

            {/* LAYER 2: Biofilm Overlay */}
            {/* This layer sits on top and uses the bio-texture. Its opacity is controlled by the simulation. */}
            <div
                className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-1000 ease-in-out"
                style={{ opacity: biofilmOpacity }}
            >
                <Image
                    src="/biofilm-texture.webp"
                    alt="Biofouling Layer"
                    fill
                    className="object-cover"
                />
                {/* Add a green tint reinforcement for visibility against dark backgrounds */}
                <div className="absolute inset-0 bg-emerald-900/40 mix-blend-overlay"></div>
            </div>

            {/* LAYER 3: Active Dosing Indicators */}
            {/* When INJECTING, we show a pulsating visual effect */}
            {pumpStatus === "INJECTING" && (
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* 1. Global Blue Pulse indicating chemical dispersion */}
                    <div className="absolute inset-0 bg-blue-500/10 animate-pulse mix-blend-overlay"></div>

                    {/* 2. Particle injection effect (CSS gradient animation simulated) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-50 animate-bounce-slow"></div>
                </div>
            )}

            {/* LAYER 4: Heads-Up Display (HUD) Labels */}
            {/* These look like AR markers floating in the 3D space */}

            {/* Reading Marker */}
            <div className="absolute top-8 right-8 z-30 flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${pumpStatus === 'INJECTING' ? 'bg-emerald-400 animate-ping' : 'bg-emerald-500'}`}></div>
                    <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Real-Time Reading</span>
                </div>
                <div className="text-5xl font-bold text-white tracking-tighter backdrop-blur-sm bg-slate-900/30 px-4 py-2 rounded-xl border border-white/10 shadow-xl">
                    {currentPPM.toFixed(2)}
                    <span className="text-lg font-normal text-slate-400 ml-2">ppm</span>
                </div>
            </div>

            {/* Target Marker */}
            <div className="absolute bottom-8 left-8 z-30">
                <div className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-1">Target Setpoint</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">{targetPPM.toFixed(1)}</span>
                    <span className="text-sm text-slate-500">ppm</span>
                </div>
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-8 right-8 z-30">
                <div className={`
            px-4 py-2 rounded-full border backdrop-blur-md flex items-center gap-3 transition-all duration-300
            ${pumpStatus === 'INJECTING'
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                        : 'bg-slate-900/60 border-slate-700 text-slate-400'
                    }
        `}>
                    <div className={`w-2 h-2 rounded-full ${pumpStatus === 'INJECTING' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`}></div>
                    <span className="font-mono font-bold text-sm tracking-widest uppercase">
                        {pumpStatus}
                    </span>
                </div>
            </div>


            {/* INSTRUCTIONS OVERLAY (Persistent but subtle) */}
            <div className="absolute top-8 left-8 z-30 max-w-[200px]">
                <div className="bg-slate-900/80 backdrop-blur-md rounded-lg p-3 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs font-bold uppercase tracking-wider">How it works</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        <strong>Drag the slider</strong> below to change the chemical target.
                    </p>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            Low Dose (&lt;3ppm) = Biofouling grows
                        </li>
                        <li className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            High Dose (&gt;4ppm) = System cleans
                        </li>
                    </ul>
                </div>
            </div>

            {/* NARRATIVE CAPTION (Guided Mode) */}
            {narrative && (
                <div
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 transition-all duration-500"
                    role="status"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="bg-emerald-600/90 text-white text-center font-medium px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-md border border-emerald-400/30 animate-in fade-in slide-in-from-bottom-4">
                        <p className="text-sm md:text-base">{narrative}</p>
                    </div>
                </div>
            )}

            {/* Fouling Alert (Only visible when dirty) */}
            {currentPPM < 2.0 && (
                <div
                    className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
                    role="alert"
                    aria-live="assertive"
                >
                    <div className="bg-red-500/90 text-white font-bold px-6 py-3 rounded-xl shadow-2xl animate-bounce backdrop-blur-sm border border-red-400">
                        ⚠ CRITICAL BIOFOULING DETECTED
                    </div>
                </div>
            )}


        </div>
    );
}
