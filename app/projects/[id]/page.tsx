'use client'

export const runtime = 'edge';

import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Terminal, Cpu, Zap, Box, StepForward, ChevronRight, Activity, Calendar } from 'lucide-react'

export default function ProjectDetail({ params }: { params: { id: string } }) {
   const project = projects.find(p => p.id === params.id)
   if (!project) return notFound()

   return (
      <main className="min-h-screen bg-[#030712] text-slate-100 pb-32 relative overflow-x-hidden">
         {/* Background Decor */}
         <div className="fixed inset-0 scanline-overlay opacity-30 pointer-events-none" />
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

         {/* Persistent Nav */}
         <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center backdrop-blur-md">
            <Link href="/" className="group flex items-center gap-3">
               <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-emerald-500 transition-all rounded-full">
                  <ArrowLeft className="w-4 h-4 text-emerald-500" />
               </div>
               <span className="font-mono text-[10px] tracking-widest text-slate-500 group-hover:text-emerald-500 uppercase">Return_to_Deck</span>
            </Link>
            <div className="flex gap-4">
               {project.techStack.map(s => (
                  <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-slate-500">{s}</span>
               ))}
            </div>
         </nav>

         <div className="max-w-6xl mx-auto px-6 pt-32">
            {/* Title Header */}
            <header className="mb-20">
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-5xl sm:text-8xl md:text-8xl heading-archivo mb-6 break-words">{project.title}</h1>
                  <p className="text-4xl text-slate-400 font-light max-w-4xl leading-relaxed italic">{project.description}</p>
               </motion.div>
            </header>

            {/* Hero Terminal */}
            <section className="mb-24">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="terminal-window"
               >
                  <div className="terminal-header">
                     <div className="flex gap-2">
                        <div className="terminal-dot bg-rose-500" />
                        <div className="terminal-dot bg-amber-500" />
                        <div className="terminal-dot bg-emerald-500" />
                     </div>
                     <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Execute: {project.id}_core</div>
                  </div>
                  <div className="p-10 font-mono text-xl md:text-2xl leading-relaxed">
                     <div className="flex flex-wrap items-center gap-4">
                        <span className="text-emerald-500 font-bold">$</span>
                        <span className="text-slate-100">{project.heroCommand}</span>
                        <span className="w-3 h-8 bg-emerald-500/80 animate-pulse inline-block" />
                     </div>
                     <div className="mt-8 text-sm text-slate-500 space-y-2 overflow-hidden">
                        <div>{`>>`} Initializing secure environment... OK</div>
                        <div>{`>>`} Bypassing bot detection... [SUCCESS]</div>
                        <div>{`>>`} Target data stream active.</div>
                     </div>
                  </div>
               </motion.div>
            </section>

            {/* Highlights */}
            <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
               {project.highlights.map((item, i) => (
                  <div key={i} className="glass-accent-card group">
                     <Box className="w-8 h-8 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                     <h3 className="text-xl font-bold mb-4 text-slate-100">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </section>

            {/* Process Roadmap */}
            <section className="mb-32">
               <div className="flex items-center gap-4 mb-16">
                  <h2 className="text-3xl heading-archivo text-emerald-400">Operation Process</h2>
                  <div className="h-px flex-grow bg-white/10" />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  {project.process.map((p, i) => (
                     <div key={i} className="relative group">
                        <div className="text-7xl font-black text-white/5 absolute -top-8 -left-4 group-hover:text-emerald-500/10 transition-colors uppercase">{p.step}</div>
                        <div className="relative z-10">
                           <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-500 font-bold group-hover:bg-emerald-500 group-hover:text-black transition-all">
                              <StepForward className="w-5 h-5" />
                           </div>
                           <h4 className="text-lg font-bold mb-3 text-slate-200">{p.title}</h4>
                           <p className="text-xs text-slate-500 leading-relaxed font-light">{p.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            {/* Battle Analysis */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch border-y border-white/5 py-24 px-8 bg-white/[0.01]">
               <div className="space-y-10">
                  <div className="space-y-4">
                     <div className="text-xs font-mono text-rose-500 uppercase tracking-[0.3em] font-bold">The Challenge</div>
                     <p className="text-3xl font-light text-slate-300 leading-snug">"{project.challenge}"</p>
                  </div>
                  <div className="space-y-4">
                     <div className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold">The Breakthrough</div>
                     <p className="text-2xl font-bold text-slate-100 leading-relaxed italic">{project.solution}</p>
                  </div>
               </div>

               {/* Mini Timeline */}
               <div className="space-y-8">
                  <div className="text-xs font-mono text-slate-600 uppercase tracking-widest border-b border-white/5 pb-4">Iteration Milestones</div>
                  {project.iterations.map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="text-xs font-mono text-slate-700 mt-1 whitespace-nowrap">{item.date}</div>
                        <div>
                           <div className="font-bold text-slate-200 group-hover:text-emerald-500 transition-colors uppercase text-sm mb-1">{item.action}</div>
                           <div className="text-[11px] text-slate-600 font-mono tracking-tighter">[RESULT] {item.impact}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </main>
   )
}
