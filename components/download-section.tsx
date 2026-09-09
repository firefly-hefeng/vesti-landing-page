"use client"

import { useState } from "react"
import { ChevronDown, Download, ExternalLink } from "lucide-react"

import {
  getPrimaryInstallHref,
  isExternalPrimaryInstall,
  marketingLinks,
} from "@/lib/marketing-config"

export function DownloadSection() {
  const [isOpen, setIsOpen] = useState(false)
  const primaryHref = getPrimaryInstallHref()
  const isExternal = isExternalPrimaryInstall()

  return (
    <section
      id="download"
      className="scroll-mt-24 px-6 py-16 md:px-8 md:py-20"
    >
      <div className="page-shell">
        <div className="mx-auto mb-10 max-w-[620px] text-center">
          <p className="section-kicker">Download</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            Two products, one memory loop.
          </h2>
          <p className="mx-auto mt-4 max-w-[38ch] text-balance text-base leading-7 text-text-secondary">
            Capture agent work where it happens — in the browser, and in your
            local CLI coding agents.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="lovable-panel flex flex-col p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
              Browser extension · {marketingLinks.manualZipVersion}
            </p>
            <h3 className="mt-3 text-[1.35rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
              心迹 Vesti for the browser
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Auto-capture conversations across ChatGPT, Claude, Gemini,
              DeepSeek, Tongyi, Doubao, Kimi and Yuanbao — structured,
              searchable, local-first.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={primaryHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="lovable-button-primary gap-2"
              >
                {isExternal ? "Chrome Web Store" : "Install now"}
                {isExternal ? (
                  <ExternalLink className="h-4 w-4" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
              </a>
              <a
                href={marketingLinks.manualZipUrl}
                className="lovable-button-secondary gap-2"
              >
                <Download className="h-4 w-4" />
                Manual ZIP
              </a>
            </div>

            <div className="mt-auto pt-6">
              <div className="border-t border-border-subtle pt-5">
                <p className="mb-4 break-all font-mono text-[11px] leading-5 text-text-secondary">
                  SHA-256: {marketingLinks.manualZipSha256}
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen((value) => !value)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  Manual install steps
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-150 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <ol className="mt-4 space-y-2 text-sm leading-7 text-text-secondary">
                    <li>Download and unzip the package.</li>
                    <li>
                      Open{" "}
                      <code className="rounded bg-[rgba(252,251,248,0.92)] px-1.5 py-0.5 font-mono text-xs text-text-primary">
                        chrome://extensions
                      </code>
                      .
                    </li>
                    <li>Enable Developer mode.</li>
                    <li>Choose Load unpacked and select the folder.</li>
                  </ol>
                )}
              </div>
            </div>
          </article>

          <article className="lovable-panel flex flex-col p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
              Desktop app · {marketingLinks.desktopVersion} · Windows
            </p>
            <h3 className="mt-3 text-[1.35rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
              Vesti for coding agents
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Capture Claude Code, Cursor, Kimi Code and Codex sessions into an
              L0–L3 layered memory system, with a built-in MCP server any agent
              can mount.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={marketingLinks.desktopExeUrl}
                className="lovable-button-primary gap-2"
              >
                <Download className="h-4 w-4" />
                Download for Windows
              </a>
              <a
                href={marketingLinks.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary gap-2"
              >
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-auto pt-6">
              <div className="border-t border-border-subtle pt-5">
                <p className="font-mono text-[11px] leading-5 text-text-secondary">
                  {marketingLinks.desktopExeFilename} ·{" "}
                  {marketingLinks.desktopFileSize}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
