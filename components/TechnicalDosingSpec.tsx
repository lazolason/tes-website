"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import VisualDosingUnit from "./VisualDosingUnit";
import { Button } from "./ui/Button";

// Simulation Constants
const SIMULATION_INTERVAL = 1000; // Update every 1000ms for visible "ticks"
const MAX_DATA_POINTS = 30; // Keep last 30 seconds visible
const NOISE_LEVEL = 0.05; // Random sensor noise
const DOSE_RATE = 0.2; // How fast ppm rises when pumping
const DECAY_RATE = 0.05; // How fast ppm drops when not pumping

export default function TechnicalDosingSpec() {
    // Combined simulation state to reduce re-renders
    const [simulationState, setSimulationState] = useState({
        currentPPM: 5.0,
        pumpStatus: "STANDBY" as "STANDBY" | "INJECTING",
        isSimulating: true,
        isGuided: false,
    });

    const [data, setData] = useState<{ time: string, target: number, actual: number }[]>([]);
    const [targetPPM, setTargetPPM] = useState(5.0);
    const [narrative, setNarrative] = useState<string | undefined>(undefined);

    // Destructure for easier access
    const { currentPPM, pumpStatus, isSimulating, isGuided } = simulationState;

    // Refs for mutable values in interval
    const ppmRef = useRef(5.0);
    const targetRef = useRef(5.0);

    // Guided Simulation Runner - memoized to prevent recreation
    const runGuidedDemo = useCallback(async () => {
        setSimulationState(prev => ({ ...prev, isGuided: true, isSimulating: true }));

        // Step 1: Baseline
        setNarrative("Phase 1: Baseline Monitoring. System is currently stable at 5.0ppm.");
        setTargetPPM(5.0);
        await new Promise(r => setTimeout(r, 3000));

        // Step 2: Stop Dosing
        setNarrative("Phase 2: Dosing Ceased. Biological nutrients begin to accumulate in the water column.");
        setTargetPPM(0.5);
        await new Promise(r => setTimeout(r, 6000));

        // Step 3: Fouling Detected
        setNarrative("CRITICAL: Biofouling layers detected on tube surfaces. Efficiency dropping.");
        await new Promise(r => setTimeout(r, 4000));

        // Step 4: Intervention
        setNarrative("Phase 3: Mexel®432 Intervention. High-concentration pulse dosing initiated.");
        setTargetPPM(7.5);
        await new Promise(r => setTimeout(r, 8000));

        // Step 5: Clean
        setNarrative("RESULT: Surfaces recovered. Protected film reinstated. Efficiency restored.");
        await new Promise(r => setTimeout(r, 4000));

        setNarrative(undefined);
        setSimulationState(prev => ({ ...prev, isGuided: false }));
    }, []);

    // Sync ref when state changes (for UI controls)
    useEffect(() => {
        targetRef.current = targetPPM;
    }, [targetPPM]);

    // Main Simulation Loop
    useEffect(() => {
        if (!isSimulating) return;

        // Initialize with some data if empty
        if (data.length === 0) {
            const initialData = [];
            for (let i = 0; i < MAX_DATA_POINTS; i++) {
                initialData.push({
                    time: `-${MAX_DATA_POINTS - i}s`,
                    target: 5.0,
                    actual: 5.0 + (Math.random() * NOISE_LEVEL * 2 - NOISE_LEVEL)
                });
            }
            setData(initialData);
        }

        const interval = setInterval(() => {
            const now = new Date();
            const timeLabel = now.toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });

            // PID Interaction Logic
            let newPPM = ppmRef.current;
            const error = targetRef.current - newPPM;

            let status: "STANDBY" | "INJECTING" = "STANDBY";

            if (error > 0.05) {
                // Needs dosing
                status = "INJECTING";
                newPPM += DOSE_RATE; // Pump adds chemical
            } else {
                // Above target or close enough
                status = "STANDBY";
                newPPM -= DECAY_RATE; // Natural decay in system
            }

            // Apply noise
            newPPM += (Math.random() * NOISE_LEVEL * 2 - NOISE_LEVEL);

            // Safety Clamps
            if (newPPM < 0) newPPM = 0;
            if (newPPM > 10) newPPM = 10;

            ppmRef.current = newPPM;

            // Combine state updates to reduce re-renders from 3 to 1 per interval
            setSimulationState(prev => ({
                ...prev,
                currentPPM: newPPM,
                pumpStatus: status,
            }));

            setData(prev => {
                const newData = [...prev, { time: timeLabel, target: targetRef.current, actual: newPPM }];
                // Use slice instead of spread for better performance
                return newData.length > MAX_DATA_POINTS
                    ? newData.slice(-MAX_DATA_POINTS)
                    : newData;
            });

        }, SIMULATION_INTERVAL);

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSimulating]);


    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800" id="dosing-tech">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Automated Dosing Hardware.
                    </h2>
                    <p className="text-lg text-slate-400">
                        Precision control is the difference between &quot;chemical dumping&quot; and engineering.
                        Our skid-mounted systems use logged dosing events and configurable controls,
                        reducing unnecessary chemical use while keeping performance claims tied to site data.
                    </p>
                </div>

                <div className="grid min-w-0 gap-16 lg:grid-cols-2 items-start">

                    {/* LEFT: The Hardware Visuals */}
                    <FadeIn className="min-w-0">
                        <div className="min-w-0 space-y-6">
                            {/* Primary Image: Controller Internals */}
                            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-2xl group">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src="/dosing-controller-internal.jpg"
                                        alt="Mexel IoT Controller Internals"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Technical Overlay Badges */}
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <div className="max-w-full truncate px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md rounded-full text-xs font-mono text-emerald-400">
                                            RPI_4B_CORE :: SQL_LOGGING
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-slate-700">
                                    <h3 className="text-white font-bold text-lg mb-2">Smart Controller Architecture</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Raspberry Pi 4B + Arduino MKR WiFi logic",
                                            "Local MySQL database with Cloud Replication",
                                            "Integrated GSM Router for remote telemetry",
                                            "Ultrasonic Level Sensors (Auto-cutoff protection)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <span className="text-emerald-500 mt-1">✔</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Secondary Image: Site Context */}
                            <div className="relative rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden h-48">
                                <Image
                                    src="/dosing-site-setup.jpg"
                                    alt="Site Installation with IBC Tanks"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                                    <p className="text-xs font-mono text-emerald-300">SITE_DEPLOYMENT :: DUAL_IBC_CONFIGURATION</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* RIGHT: The Live Simulator (Graph) */}
                    <FadeIn delay={0.2} className="min-w-0">
                        <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-inner ring-1 ring-slate-800 sm:p-8">


                            {/* Visual Digital Twin Container */}
                            <div className="h-[400px] w-full relative">
                                <VisualDosingUnit
                                    currentPPM={currentPPM}
                                    targetPPM={targetPPM}
                                    pumpStatus={pumpStatus}
                                    narrative={narrative}
                                />
                            </div>

                            <div className="mt-6 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        onClick={runGuidedDemo}
                                        disabled={isGuided}
                                        aria-label="Run guided dosing simulation demonstration"
                                        aria-live="polite"
                                        aria-busy={isGuided}
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white border-none shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                                    >
                                        {isGuided ? "Simulation Running..." : "Run Guided Simulation"}
                                    </Button>
                                    <div className="h-6 w-px bg-slate-800"></div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="text-xs uppercase tracking-wider text-slate-500">Pump Status:</div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-bold border ${pumpStatus === "INJECTING"
                                            ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 animate-pulse"
                                            : "bg-slate-800 border-slate-700 text-slate-500"
                                            }`}>
                                            {pumpStatus}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setSimulationState(prev => ({ ...prev, isSimulating: !prev.isSimulating }))}
                                    disabled={isGuided}
                                    aria-label={isSimulating ? "Pause real-time sensor readings" : "Resume real-time sensor readings"}
                                >
                                    {isSimulating ? "Pause Sensors" : "Resume Sensors"}
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
