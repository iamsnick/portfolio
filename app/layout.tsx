import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SN PLAYGROUND | Hardcore Engineering Portfolio',
  description: '产品经理、UI设计、程序员这3个岗位正在融合，我是那批先行者',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 保险措施：引入 Tailwind CDN 确保样式立即可见 */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Archivo:wght@800&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  terminal: '#22C55E',
                  cyber: '#3B82F6',
                  dystopian: '#F43F5E',
                },
                fontFamily: {
                  sans: ['Space Grotesk', 'sans-serif'],
                  heading: ['Archivo', 'sans-serif'],
                }
              }
            }
          }
        `}} />
      </head>
      <body className="bg-[#0b0f1a] text-slate-50 antialiased selection:bg-emerald-500/30">
        {/* 全局扫描线背景 */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
          <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
