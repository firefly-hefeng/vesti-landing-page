import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { marketingLinks } from "@/lib/marketing-config"

export const metadata: Metadata = {
  title: "About — Vesti",
  description:
    "The team behind Vesti: local-first AI memory infrastructure, built in Nanjing by an interdisciplinary team from NJU, Fudan and SJTU.",
}

const companyFacts = [
  { label: "Company", value: "Xinji Qundao (Nanjing) Intelligence Technology Co., Ltd." },
  { label: "Founded", value: "April 28, 2026 · Jianye District tech incubator, Nanjing" },
  { label: "Focus", value: "Local-first AI memory infrastructure and downstream agent services" },
  { label: "Open source", value: "Core code under MIT · 388 GitHub stars" },
  { label: "IP", value: "2 software copyrights pending · 1 patent" },
  { label: "Business", value: "Freemium since 2026-07 — 100+ paying users in month one, 52% retention" },
]

const team = [
  {
    name: "He Feng · 何锋",
    role: "Founder & CEO",
    school: "Computational Biology, Nanjing University",
    highlight:
      "iGEM gold medalist and Best in AI track as student team captain. Leads system architecture and the agent pipeline. Holds one patent.",
    photo: "/about/hefeng.jpg",
  },
  {
    name: "Cao Zheng · 曹政",
    role: "CTO · Systems Architecture",
    school: "Software Engineering, Nanjing University",
    highlight:
      "Cross-platform framework engineering intern at Meituan, shipping across iOS, Android and HarmonyOS. President of NJU's OpenHarmony club.",
  },
  {
    name: "Su Yicheng · 苏祎成",
    role: "Product Architecture · Agent",
    school: "Philosophy & Statistics, Fudan University",
    highlight:
      "Designed the agent decision chain and the classification confidence system. Built the Prompt-as-Code version management workflow.",
  },
  {
    name: "Gong Zihan · 龚子涵",
    role: "AI Engineering · RAG",
    school: "Finance & AI, Fudan University",
    highlight:
      "Owns the local RAG retrieval pipeline — Recall@5 of 1.000, with 10k-vector scans in under 40 ms.",
  },
  {
    name: "Huang Chenxi · 黄晨熙",
    role: "Design · UX",
    school: "Sociology, Nanjing University",
    highlight:
      "Leads user research and product visuals. Built the feedback loop across 800+ seed users.",
  },
  {
    name: "Fan Sizhe · 范思哲",
    role: "Operations · Growth",
    school: "Information Technology, Nanjing University",
    highlight:
      "iFlytek campus ambassador and Tencent youth sci-tech product manager trainee. Team captain at the AI Hackathon Tour national league.",
  },
  {
    name: "Wang Xinyu · 王馨雨",
    role: "R&D",
    school: "Direct PhD track, Computational Biology, SJTU",
    highlight:
      "Two national bronze awards at the China International College Students' Innovation Competition and two national second prizes at the National Undergraduate Life Science Competition.",
  },
]

const milestones = [
  {
    date: "2026.02",
    title: "Project kickoff",
    description:
      "An interdisciplinary team comes together — core development done in 63 days.",
  },
  {
    date: "2026.04",
    title: "Launch and gold",
    description:
      "Live on the Chrome Web Store. Gold Medal, best in track, at the AI Hackathon Tour national finals — with Academician Zhou Zhihua among the presenters. The company incorporates in the Jianye incubator.",
  },
  {
    date: "2026.05",
    title: "GOSIM Paris",
    description:
      "Selected for the GOSIM Paris 2026 Frontier Creators Spotlight; exhibits at Station F and wins the Audience Favorite Award.",
  },
  {
    date: "2026.06",
    title: "Awards and seed funding",
    description:
      "Gold Medal (StepFun special gold) at Nankesong S2. First prize — top of all entries — at the Jianye Entrepreneurship Competition. Delta X seed funding secured.",
  },
  {
    date: "2026.07",
    title: "Product matrix and paid plans",
    description:
      "Extension, desktop app, Skills and MCP ship as one matrix. Paid plans go live: 100+ paying users in the first month, 52% retention.",
  },
]

const mediaNotes = [
  "Covered by People's Daily and Nanjing Release.",
  "Featured talk at the CAS Tashan Youth series.",
  "Invited into Nanjing University's sci-tech innovation lab.",
]

const gallery = [
  {
    src: "/about/team.jpg",
    caption: "The Vesti team in Nanjing.",
  },
  {
    src: "/about/hackathon-award.jpg",
    caption: "Gold Medal ceremony, AI Hackathon Tour national finals.",
  },
  {
    src: "/about/hackathon-group.jpg",
    caption: "With fellow finalists at the AI Hackathon Tour.",
  },
  {
    src: "/about/gosim-booth.jpg",
    caption: "The Vesti booth at Station F, Paris — GOSIM 2026.",
  },
  {
    src: "/about/gosim-cert.jpg",
    caption: "Frontier Creators Spotlight certificate, GOSIM Paris 2026.",
  },
  {
    src: "/about/gosim-award.jpg",
    caption: "Audience Favorite Award, GOSIM Paris 2026.",
  },
  {
    src: "/about/nks-award.jpg",
    caption: "Gold Medal, Nankesong S2.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-16 md:px-8 md:py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="section-kicker">About</p>
            <h1 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-text-primary">
              Built by a team that ships.
            </h1>
            <p className="mx-auto mt-5 max-w-[52ch] text-balance text-[1.05rem] leading-7 text-text-secondary">
              Vesti is local-first AI memory infrastructure, built in Nanjing
              by an interdisciplinary team from Nanjing University, Fudan
              University and Shanghai Jiao Tong University.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <div className="lovable-media-frame overflow-hidden p-0">
              <Image
                src="/about/team.jpg"
                alt="The Vesti team in Nanjing."
                width={1200}
                height={800}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <p className="section-kicker">The team</p>
              <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
                Seven disciplines, one memory stack.
              </h2>
              <p className="mt-4 text-base leading-7 text-text-secondary">
                Seven core members, six full-time — spanning computational
                biology, software engineering, AI, finance, sociology,
                philosophy and information technology. The team has worked
                together for two to three years, and went from zero to launch
                in 63 days and 463 commits.
              </p>
            </div>
          </div>

          <div className="mt-14 lovable-panel p-6 md:p-8">
            <p className="section-kicker">Company</p>
            <dl className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
              {companyFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-6 text-text-primary">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14">
            <p className="section-kicker">Core members</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {team.map((member) => (
                <article key={member.name} className="lovable-card p-6">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      width={128}
                      height={128}
                      className="mb-5 h-16 w-16 rounded-full border border-border-subtle object-cover"
                    />
                  ) : (
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-border-subtle bg-[rgba(252,251,248,0.92)] font-mono text-sm text-text-tertiary">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-[1.1rem] font-medium leading-7 tracking-[-0.02em] text-text-primary">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-6 text-text-secondary">
                    {member.school}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {member.highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="section-kicker">Milestones</p>
            <div className="mt-6 lovable-panel p-6 md:p-8">
              <ol className="relative space-y-8 border-l border-border-subtle pl-6">
                {milestones.map((milestone) => (
                  <li key={milestone.date} className="relative">
                    <span className="absolute -left-[27.5px] top-1.5 h-2.5 w-2.5 rounded-full border border-border-default bg-[rgba(252,251,248,1)]" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                      {milestone.date}
                    </p>
                    <h3 className="mt-1.5 text-[1.05rem] font-medium tracking-[-0.02em] text-text-primary">
                      {milestone.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                      {milestone.description}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-border-subtle pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                  Media & community
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-text-secondary">
                  {mediaNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <p className="section-kicker">Moments</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gallery.map((item) => (
                <figure key={item.src} className="lovable-card overflow-hidden p-0">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-[13px] leading-5 text-text-secondary">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-14 lovable-panel p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <p className="section-kicker">Contact</p>
                <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-text-primary">
                  Work with us.
                </h2>
                <div className="mt-4 space-y-2 text-sm leading-6 text-text-secondary">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-text-tertiary" />
                    He Feng, Founder & CEO ·{" "}
                    <a
                      href="mailto:221505011@smail.nju.edu.cn"
                      className="text-text-primary underline decoration-border-default underline-offset-4 transition-colors duration-150 hover:decoration-text-primary"
                    >
                      221505011@smail.nju.edu.cn
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-text-tertiary" />
                    +86 137-7868-0901
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-text-tertiary" />
                    Room 1205-78, T4-12F, 8 Yongchu Rd, Jianye District,
                    Nanjing
                  </p>
                </div>
              </div>
              <div className="flex md:justify-end">
                <a
                  href={marketingLinks.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lovable-button-secondary gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
