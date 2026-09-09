interface MarketingLinks {
  chromeStoreUrl: string
  githubRepoUrl: string
  manualZipUrl: string
  manualZipFilename: string
  manualZipVersion: string
  manualZipSha256: string
  desktopExeUrl: string
  desktopExeFilename: string
  desktopVersion: string
  desktopFileSize: string
  demoVideoUrl: string
  libraryScreenshotUrl: string
}

export const marketingLinks: MarketingLinks = {
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb",
  githubRepoUrl: "https://github.com/firefly-hefeng/VESTI",
  manualZipUrl:
    "https://box.nju.edu.cn/d/26117d5792674f9782fc/files/?p=/Vesti_MVP_v1.2.0-rc.9.zip&dl=1",
  manualZipFilename: "Vesti_MVP_v1.2.0-rc.9.zip",
  manualZipVersion: "v1.2.0-rc.9",
  manualZipSha256:
    "f8c869e42b8070008c7723104eea8b62d29b31f7c4f6c11579f2d53be0a652b9",
  desktopExeUrl:
    "https://box.nju.edu.cn/d/26117d5792674f9782fc/files/?p=/Vesti-0.3.1-Setup.exe&dl=1",
  desktopExeFilename: "Vesti-0.3.1-Setup.exe",
  desktopVersion: "v0.3.1",
  desktopFileSize: "160.4 MB",
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
