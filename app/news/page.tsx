import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { newsPosts } from "@/lib/news-posts"

export const metadata: Metadata = {
  title: "News — Vesti",
  description:
    "Release notes and updates from Vesti, the working-memory engine for domain-specific agents.",
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-16 md:px-8 md:py-20">
        <div className="page-shell">
          <div className="mx-auto mb-12 max-w-[680px]">
            <p className="section-kicker">News</p>
            <h1 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-text-primary">
              Releases and updates.
            </h1>
          </div>

          <div className="mx-auto max-w-[760px] space-y-6">
            {newsPosts.map((post) => (
              <article
                key={post.slug}
                id={post.slug}
                className="lovable-panel p-6 md:p-10"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                  {post.date}
                </p>
                <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-text-secondary">
                  {post.excerpt}
                </p>

                <div className="mt-6 space-y-6 border-t border-border-subtle pt-6">
                  {post.sections.map((section, index) => (
                    <section key={index}>
                      {section.heading && (
                        <h3 className="text-[1.05rem] font-medium tracking-[-0.02em] text-text-primary">
                          {section.heading}
                        </h3>
                      )}
                      {section.paragraphs?.map((paragraph, i) => (
                        <p
                          key={i}
                          className="mt-3 text-sm leading-7 text-text-secondary"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets && (
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text-secondary">
                          {section.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                {post.links && post.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-border-subtle pt-6">
                    {post.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border-default bg-[rgba(252,251,248,0.88)] px-3.5 py-2 text-[13px] font-medium text-text-primary transition-colors duration-150 hover:bg-[rgba(28,28,28,0.03)]"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-[760px]">
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
