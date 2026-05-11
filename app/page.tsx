'use client'

import { projects } from '@/lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Database, Activity, ArrowUpRight, Github, Hexagon } from 'lucide-react'

// Icon mapping based on UI/UX Pro Max best practices (No Emojis)
const icons: Record<string, any> = {
  "boss-cli": <Terminal className="w-6 h-6" />,
  "comic-crawl": <Cpu className="w-6 h-6" />,
  "feishu-doc": <Database className="w-6 h-6" />,
  "xhs2feishu": <Activity className="w-6 h-6" />,
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-24">
      {/* HUD Header Decor */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between terminal-text text-[10px] text-emerald-500/40 pointer-events-none">
        <div>[ GEEK_SUITE_PORTFOLIO_V2.0.1 ]</div>
        <div>COORD_AZ_392.01 // 2026.04.16</div>
      </div>

      {/* Hero Section */}
      <header className="mb-24 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase">
            <Hexagon className="w-4 h-4" />
            System Status: Optimized
          </div>
          <h1 className="text-4xl sm:text-8xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none break-words">
            SN <span className="text-emerald-500">PLAYGROUND</span>
          </h1>
          <p className="max-w-xl text-slate-400 font-light text-lg md:text-xl tracking-wide border-l-2 border-emerald-500/20 pl-6 py-2">
            欢迎来到SNICK的游乐场
          </p>
        </motion.div>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              href={`/projects/${project.id}`}
              className="group relative block bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-emerald-500/60 p-10 transition-all duration-500"
            >
              {/* Card Hud Accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-emerald-500" />
              <div className="absolute top-0 left-0 w-px h-8 bg-emerald-500" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-emerald-500" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-emerald-500" />

              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                  {icons[project.id] || <Terminal className="w-6 h-6" />}
                </div>
                <div className="font-mono text-[10px] text-slate-600 group-hover:text-emerald-500 tracking-widest">
                  [{project.tag.toUpperCase()}]
                </div>
              </div>

              <h2 className="text-5xl font-extrabold mb-6 group-hover:translate-x-3 transition-transform duration-300">
                {project.title}
              </h2>

              <p className="text-slate-400 mb-12 font-light leading-relaxed h-20 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                <div className="flex gap-4">
                  {project.techStack.map(s => (
                    <span key={s} className="text-[10px] uppercase font-bold text-slate-600">_{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  DECRYPT_DETAIL <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <footer className="mt-40 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between text-[10px] font-mono text-slate-600 tracking-widest gap-6">
        <div>DESIGNED BY ANTIGRAVITY // NO_EMOJI_PROTOCOL_ACTIVE</div>
        <div>STABLE_DISTRIBUTION: V2.1.0_LATEST</div>
      </footer>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </main>
  )
}
