import Image from "next/image"
import Link from "next/link"

import {
  getPrimaryInstallHref,
  isExternalPrimaryInstall,
  marketingLinks,
} from "@/lib/marketing-config"

const navLinkClass =
  "text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"

export function Navbar() {
  const installHref = getPrimaryInstallHref()
  const isExternal = isExternalPrimaryInstall()

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle/80 bg-[rgba(247,244,237,0.82)] backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Vesti logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-text-primary">
            Vesti
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/#features" className={navLinkClass}>
            Features
          </Link>
          <Link href="/#demo" className={navLinkClass}>
            Demo
          </Link>
          <Link href="/#skills" className={navLinkClass}>
            Skills
          </Link>
          <Link href="/enterprise" className={navLinkClass}>
            Enterprise
          </Link>
          <Link href="/news" className={navLinkClass}>
            News
          </Link>
          <a
            href={marketingLinks.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            GitHub
          </a>
        </div>

        <a
          href={installHref}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="lovable-button-secondary px-4 py-2.5 text-[13px]"
        >
          Install
        </a>
      </div>
    </nav>
  )
}
