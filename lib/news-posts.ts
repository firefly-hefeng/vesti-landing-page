export interface NewsPostSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface NewsPostLink {
  label: string
  href: string
}

export interface NewsPost {
  slug: string
  date: string
  title: string
  excerpt: string
  sections: NewsPostSection[]
  links?: NewsPostLink[]
}

// Newest first. To publish a new post, add an entry at the top of this array.
export const newsPosts: NewsPost[] = [
  {
    slug: "vesti-skills-open-sourced",
    date: "2026-09-09",
    title: "VESTI Skills: open-source memory and handoff skills for coding agents",
    excerpt:
      "Two MIT-licensed skills — vesti-memory for memory recall and vesti-handoff for structured handoff — now documented on this site, with setup instructions for kimi-code, Claude Code, Codex and Cursor.",
    sections: [
      {
        paragraphs: [
          "VESTI Skills make your AI coding agent remember everything you have done, and hand the work over to the next agent intact. vesti-memory recalls past work through progressive disclosure on top of the VESTI desktop app; vesti-handoff generates a schema-based handoff pack and works standalone.",
        ],
      },
    ],
    links: [
      {
        label: "GitHub — VESTI-SKILLS",
        href: "https://github.com/firefly-hefeng/VESTI-SKILLS",
      },
    ],
  },
  {
    slug: "vesti-desktop-0-3-1-and-extension-1-2-0-rc-9",
    date: "2026-09-09",
    title:
      "Double release: Vesti desktop v0.3.1 and browser extension v1.2.0-rc.9",
    excerpt:
      "Vesti now captures agent work on both surfaces where it happens: AI conversations in the browser, and CLI coding-agent sessions on your machine.",
    sections: [
      {
        paragraphs: [
          "Vesti is the working-memory engine for domain-specific agents. Today we are shipping both halves of the capture loop: the 心迹 Vesti browser extension at v1.2.0-rc.9 (released 2026-08-16) and the Vesti desktop app at v0.3.1 (released 2026-09-09).",
        ],
      },
      {
        heading: "Vesti desktop app v0.3.1",
        bullets: [
          "Captures local CLI coding-agent sessions — Claude Code, Cursor, Kimi Code and Codex.",
          "L0–L3 layered memory: deterministic layers at the bottom, LLM layers on top, and the original transcript always rebuildable.",
          "Built-in MCP server with 9 read-only tools, so any coding agent can mount your memory.",
          "Beta membership with a points system, and an opt-in data-contribution program (rewarded with points, used as RL training data, PII filtered on both ends).",
          "Bring your own key via a generic OpenAI-compatible interface.",
        ],
      },
      {
        heading: "心迹 Vesti browser extension v1.2.0-rc.9",
        bullets: [
          "Auto-captures web conversations across 8 AI platforms: ChatGPT, Claude, Gemini, DeepSeek, Tongyi, Doubao, Kimi and Yuanbao.",
          "Structured AST capture — code, tables and formulas stay intact instead of collapsing into plain text.",
          "Local-first storage in IndexedDB, with FTS5-grade search, vector recall and a knowledge graph.",
          "A Gardener agent organizes your library automatically.",
          "Gold medal, national finals, 2026 AI Hackathon Tour.",
        ],
      },
      {
        heading: "Download",
        paragraphs: [
          "The browser extension is available on the Chrome Web Store or as a verified manual package. The desktop app ships as a Windows installer. Source and documentation live on GitHub.",
        ],
      },
    ],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo",
      },
      {
        label: "Desktop installer (Windows, v0.3.1)",
        href: "https://box.nju.edu.cn/d/26117d5792674f9782fc/files/?p=/Vesti-0.3.1-Setup.exe&dl=1",
      },
      {
        label: "Extension manual package (v1.2.0-rc.9)",
        href: "https://box.nju.edu.cn/d/26117d5792674f9782fc/files/?p=/Vesti_MVP_v1.2.0-rc.9.zip&dl=1",
      },
      {
        label: "GitHub",
        href: "https://github.com/firefly-hefeng/VESTI",
      },
    ],
  },
]
