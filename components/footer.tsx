"use client"

import Image from "next/image"
import Link from "next/link"

import { marketingLinks } from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function Footer() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.footer : en.footer

  return (
    <footer className="px-6 pb-10 pt-2 md:px-8 md:pb-12">
      <div className="page-shell">
        <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Vesti logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-sm font-medium text-text-primary">Vesti</span>
            <span className="text-[13px] text-text-tertiary">
              {d.copyright}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <Link
              href="/#skills"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.skills}
            </Link>
            <Link
              href="/enterprise"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.enterprise}
            </Link>
            <Link
              href="/news"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.news}
            </Link>
            <Link
              href="/about"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.about}
            </Link>
            <a
              href={marketingLinks.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.github}
            </a>
            <a
              href="/#download"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.install}
            </a>
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-text-tertiary transition-colors duration-150 hover:text-text-secondary"
            >
              苏ICP备2026054650号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
