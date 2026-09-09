import { Navbar } from "@/components/navbar"
import { NewsStrip } from "@/components/news-strip"
import { Hero } from "@/components/hero"
import { EnterpriseBand } from "@/components/enterprise-band"
import { Features } from "@/components/features"
import { DemoVideo } from "@/components/demo-video"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-5">
          <NewsStrip />
        </div>
        <Hero />
        <EnterpriseBand />
        <Features />
        <DemoVideo />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
