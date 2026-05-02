import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptDiff — Git-style diffs for AI prompt iterations',
  description: 'Track prompt changes, A/B test results, and version control for AI prompts. Built for AI engineers at startups using GPT and Claude heavily.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="73cf6d90-5e44-48ad-9a37-f5a9b0268938"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
