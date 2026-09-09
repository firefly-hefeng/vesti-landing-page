import { ArrowUpRight } from "lucide-react"

export function EnterpriseBand() {
  return (
    <section className="px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="lovable-panel grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8">
          <div className="max-w-[560px]">
            <p className="section-kicker">Enterprise</p>
            <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-text-primary">
              Memory infrastructure for your agents.
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary md:text-base md:leading-7">
              License the memory core, unify recall over MCP, deploy inside
              your perimeter, and co-develop RL data pipelines — delivered by
              forward deployed engineers.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href="/enterprise" className="lovable-button-secondary gap-2">
              Explore Enterprise
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
