import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, Database, KeyRound, Network, Package } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { marketingLinks } from "@/lib/marketing-config"

export const metadata: Metadata = {
  title: "Enterprise — Vesti",
  description:
    "Memory infrastructure for your agents: an embeddable memory core, a unified MCP memory layer, private deployment, and RL data partnerships.",
}

const capabilities = [
  {
    icon: Package,
    name: "@vesti/memory-core",
    title: "Memory core licensing",
    description:
      "The Vesti memory kernel as an embeddable package — no Electron, no network dependency. LLM and embedding interfaces are injected, so it runs inside any enterprise agent system on your own models.",
  },
  {
    icon: Network,
    name: "vesti-mcp",
    title: "MCP integration",
    description:
      "A production MCP server that gives every agent in your organization one unified memory layer. Mount it from any MCP-compatible agent and share recall across tools and teams.",
  },
  {
    icon: KeyRound,
    name: "vesti-gate + auth server",
    title: "Private deployment",
    description:
      "vesti-gate is a streaming LLM gateway that keeps keys server-side, meters per request, rate-limits per IP, and fails over across upstreams — running in production today. Paired with our membership/auth service spec: PostgreSQL 16, Ed25519 JWT, WeChat/QQ OAuth, fully deployable on your own infrastructure.",
  },
  {
    icon: Database,
    name: "RL data pipeline",
    title: "Data partnership",
    description:
      "A session-data collection pipeline built on explicit user consent, with PII filtering on both ends and storage on servers in mainland China — structured for RL training workloads.",
  },
]

const fdeSteps = [
  {
    title: "Custom capture adapters",
    description:
      "We build capture adapters for your proprietary agent workflows, so sessions are recorded at the source with structure intact.",
  },
  {
    title: "On-premise deployment",
    description:
      "The full Vesti memory stack deployed inside your environment — gateway, memory core, and auth — with no data leaving your perimeter.",
  },
  {
    title: "Memory quality evaluation",
    description:
      "A bench system that measures recall quality on your real workloads, so memory improvements are verified, not assumed.",
  },
]

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-16 md:px-8 md:py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="section-kicker">Enterprise</p>
            <h1 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-text-primary">
              Memory infrastructure for your agents.
            </h1>
            <p className="mx-auto mt-5 max-w-[52ch] text-balance text-[1.05rem] leading-7 text-text-secondary">
              Vesti runs the working-memory layer for domain-specific agents.
              We license the core, integrate over MCP, deploy inside your
              perimeter, and co-develop RL data pipelines.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={marketingLinks.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-primary min-w-[148px] gap-2"
              >
                Talk to us on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#fde"
                className="lovable-button-secondary min-w-[148px] gap-2"
              >
                How we deliver
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon

              return (
                <article key={capability.name} className="lovable-card p-6 md:p-7">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.92)]">
                    <Icon className="h-4 w-4 text-text-primary" />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {capability.name}
                  </p>
                  <h2 className="mt-2 text-[1.25rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                    {capability.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {capability.description}
                  </p>
                </article>
              )
            })}
          </div>

          <section id="fde" className="mt-16 scroll-mt-24">
            <div className="lovable-panel p-6 md:p-10">
              <div className="max-w-[620px]">
                <p className="section-kicker">Delivery model</p>
                <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
                  Forward Deployed Engineers, not slide decks.
                </h2>
                <p className="mt-4 text-base leading-7 text-text-secondary">
                  Our engineers embed with your team and wire the Vesti memory
                  stack into your proprietary agent workflows — end to end,
                  until recall quality is measured and holds up in production.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {fdeSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.72)] p-5"
                  >
                    <p className="font-mono text-[11px] tracking-[0.14em] text-text-tertiary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-[1.05rem] font-medium tracking-[-0.02em] text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
              Building agents that need to remember?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-balance text-base leading-7 text-text-secondary">
              Reach us through GitHub — open an issue or start a discussion and
              we will respond.
            </p>
            <p className="mx-auto mt-3 max-w-[52ch] text-balance text-[13px] leading-6 text-text-tertiary">
              Built by a team from Nanjing University, Fudan and SJTU — gold
              medalists at the AI Hackathon Tour national finals and GOSIM
              Paris 2026 Frontier Creators.{" "}
              <a
                href="/about"
                className="underline decoration-border-default underline-offset-4 transition-colors duration-150 hover:text-text-secondary"
              >
                Meet the team
              </a>
              .
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={marketingLinks.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-primary min-w-[148px] gap-2"
              >
                Contact via GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
