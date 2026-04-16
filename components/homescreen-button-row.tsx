"use client"

import { Button } from "@/components/ui/button"

const ABOUT_ME_URL = "https://www.linkedin.com/in/michaeljvmiller/"
const PHOTOGRAPHY_URL = "https://www.instagram.com/millerm.photography/"

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function HomescreenButtonRow() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={() => openInNewTab(ABOUT_ME_URL)}
        variant="outline"
        className="border-transparent shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground"
      >
        About Me
      </Button>
      <Button
        onClick={() => openInNewTab(PHOTOGRAPHY_URL)}
        variant="outline"
        className="border-transparent shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground"
      >
        Photography
      </Button>
    </div>
  )
}
