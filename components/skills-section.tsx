import { ArrowUpRight, ChevronDown, GitBranch, Layers } from "lucide-react"

const skillsRepoUrl = "https://github.com/firefly-hefeng/VESTI-SKILLS"

const skills = [
  {
    icon: Layers,
    name: "vesti-memory",
    tagline: "Memory recall for any agent session.",
    description:
      "Progressive disclosure: pull the project context pack at session start, then drill from session index to file locations to exact turns.",
    bullets: [
      "Auto-loads a context pack on session start — state card, active files, open questions.",
      "Drills down through vesti_search, vesti_search_files, vesti_timeline and vesti_get_turns.",
      "No more re-briefing a new agent, or losing decision rationale after /compact.",
    ],
    requirement: "Requires the VESTI desktop app running locally with vesti-mcp registered.",
  },
  {
    icon: GitBranch,
    name: "vesti-handoff",
    tagline: "Structured handoff between agents.",
    description:
      "Generates a schema-based handoff pack — goal, state, files, failedPaths, verification, nextSteps — so the next agent starts from proof, not trust.",
    bullets: [
      "One rule: verify before you take over — rerun verification.lastCommand first.",
      "Works standalone, no VESTI dependency.",
      "Schema-aligned with the VESTI desktop app's Relay Pack.",
    ],
    requirement: "Standalone — works without VESTI.",
  },
]

const oneCommandInstalls = [
  {
    agent: "Kimi Code",
    lines: ["/plugins install https://github.com/firefly-hefeng/VESTI-SKILLS"],
    note: "Run /reload afterwards to activate.",
  },
  {
    agent: "Claude Code",
    lines: [
      "/plugin marketplace add firefly-hefeng/VESTI-SKILLS",
      "/plugin install vesti-skills@vesti-skills",
    ],
  },
]

const manualRows = [
  {
    agent: "kimi-code",
    userLevel: "cp -r skills/<name> ~/.kimi-code/skills/",
    projectLevel: ".kimi-code/skills/",
  },
  {
    agent: "Claude Code",
    userLevel: "cp -r skills/<name> ~/.claude/skills/",
    projectLevel: ".claude/skills/",
  },
  {
    agent: "Codex / Cursor / others",
    userLevel: "Import the full SKILL.md per the tool's skills/prompt convention",
    projectLevel: "Same as user-level",
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-16 md:px-8 md:py-20"
    >
      <div className="page-shell">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <p className="section-kicker">Skills</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            Open-source skills for coding agents.
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-balance text-base leading-7 text-text-secondary">
            VESTI Skills (MIT) make your AI coding agent remember everything
            you have done — and hand the work over to the next agent, intact.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <article key={skill.name} className="lovable-card p-6 md:p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.92)]">
                  <Icon className="h-4 w-4 text-text-primary" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                  {skill.name}
                </p>
                <h3 className="mt-2 text-[1.25rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                  {skill.tagline}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {skill.description}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-text-secondary">
                  {skill.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border-subtle pt-4 text-[13px] leading-6 text-text-tertiary">
                  {skill.requirement}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-4 lovable-panel p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
            <div>
              <p className="section-kicker">Install</p>
              <h3 className="mt-3 text-[1.25rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                Add the skills to your agent.
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                One command in Kimi Code or Claude Code — or copy the skills
                manually into any agent's skills directory.
              </p>
              <a
                href={skillsRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary mt-5 gap-2 px-4 py-2.5 text-[13px]"
              >
                GitHub — VESTI-SKILLS
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="min-w-0">
              <div className="rounded-xl border border-border-default bg-[rgba(252,251,248,0.9)]">
                <div className="border-b border-border-subtle px-4 py-2.5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                    Just tell your agent
                  </p>
                </div>
                <div className="p-4">
                  <div className="rounded-lg border border-border-subtle bg-[rgba(28,28,28,0.92)] px-3.5 py-2.5">
                    <p className="whitespace-pre-wrap font-mono text-[12.5px] leading-6 text-[rgba(247,244,237,0.92)]">
                      Install the VESTI skills from GitHub: clone
                      https://github.com/firefly-hefeng/VESTI-SKILLS to a temp
                      dir, copy skills/vesti-memory and skills/vesti-handoff
                      into your user-level skills directory (~/.kimi-code/skills/
                      for Kimi Code, ~/.claude/skills/ for Claude Code, or your
                      tool&apos;s equivalent), then list what you installed and
                      tell me whether a restart or new session is needed.
                    </p>
                  </div>
                  <p className="mt-2 text-[12px] leading-5 text-text-tertiary">
                    Paste this to Kimi Code, Claude Code, Codex or any
                    shell-capable agent — it clones, copies and verifies by
                    itself. Skills activate in a new session.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-border-default bg-[rgba(252,251,248,0.9)]">
                <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2.5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                    One-command install
                  </p>
                  <span className="rounded-full border border-border-subtle bg-[rgba(28,28,28,0.03)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
                    Recommended
                  </span>
                </div>
                <div className="space-y-3 p-4">
                  {oneCommandInstalls.map((install) => (
                    <div key={install.agent}>
                      <p className="mb-1.5 text-[13px] font-medium text-text-primary">
                        {install.agent}
                      </p>
                      <div className="overflow-x-auto rounded-lg border border-border-subtle bg-[rgba(28,28,28,0.92)] px-3.5 py-2.5">
                        {install.lines.map((line) => (
                          <code
                            key={line}
                            className="block whitespace-nowrap font-mono text-[12.5px] leading-6 text-[rgba(247,244,237,0.92)]"
                          >
                            {line}
                          </code>
                        ))}
                      </div>
                      {install.note && (
                        <p className="mt-1.5 text-[12px] leading-5 text-text-tertiary">
                          {install.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <details className="group mt-4 rounded-xl border border-border-subtle">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary [&::-webkit-details-marker]:hidden">
                  Manual install
                  <ChevronDown className="h-4 w-4 transition-transform duration-150 group-open:rotate-180" />
                </summary>
                <div className="border-t border-border-subtle px-4 py-4">
                  <div className="overflow-x-auto rounded-lg border border-border-subtle bg-[rgba(28,28,28,0.92)] px-3.5 py-2.5">
                    <code className="whitespace-nowrap font-mono text-[12.5px] leading-6 text-[rgba(247,244,237,0.92)]">
                      git clone https://github.com/firefly-hefeng/VESTI-SKILLS.git
                    </code>
                  </div>
                  <div className="mt-3 overflow-x-auto rounded-lg border border-border-subtle">
                    <table className="w-full min-w-[520px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-border-subtle bg-[rgba(28,28,28,0.02)]">
                          <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                            Agent
                          </th>
                          <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                            User-level
                          </th>
                          <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                            Project-level
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {manualRows.map((row) => (
                          <tr
                            key={row.agent}
                            className="border-b border-border-subtle last:border-b-0"
                          >
                            <td className="px-4 py-3 text-sm font-medium text-text-primary">
                              {row.agent}
                            </td>
                            <td className="px-4 py-3 font-mono text-[12px] leading-5 text-text-secondary">
                              {row.userLevel}
                            </td>
                            <td className="px-4 py-3 font-mono text-[12px] leading-5 text-text-secondary">
                              {row.projectLevel}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              <p className="mt-4 text-[13px] leading-6 text-text-tertiary">
                vesti-handoff works standalone. vesti-memory needs the VESTI
                desktop app (or @vesti/mcp) providing the MCP tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
