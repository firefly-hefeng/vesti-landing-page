interface MarketingLinks {
  chromeStoreUrl: string
  githubRepoUrl: string
  manualZipUrl: string
  manualZipFilename: string
  manualZipVersion: string
  manualZipSha256: string
  demoVideoUrl: string
  libraryScreenshotUrl: string
}

export const marketingLinks: MarketingLinks = {
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb",
  githubRepoUrl: "https://github.com/aurora1112-j/vesti",
  manualZipUrl:
    "https://github.com/aurora1112-j/vesti/releases/download/v1.2.0-rc.9/Vesti_MVP_v1.2.0-rc.9.zip",
  manualZipFilename: "Vesti_MVP_v1.2.0-rc.9.zip",
  manualZipVersion: "v1.2.0-rc.9",
  manualZipSha256:
    "f8c869e42b8070008c7723104eea8b62d29b31f7c4f6c11579f2d53be0a652b9",
  demoVideoUrl:
    "https://vesti-landing-page0211.vercel.app/demo-vesti-0319.mp4",
  libraryScreenshotUrl: "/library.png",
}

export function getPrimaryInstallHref(fallback = "#download"): string {
  return marketingLinks.chromeStoreUrl === "#" ? fallback : marketingLinks.chromeStoreUrl
}

export function isExternalPrimaryInstall(): boolean {
  return marketingLinks.chromeStoreUrl !== "#"
}
