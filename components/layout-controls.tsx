"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Moon, Plus, Sun, X, Send } from "lucide-react"
import { useTheme } from "next-themes"
import { Github } from "./ui/svgs/github"
import { Linkedin } from "./ui/svgs/linkedin"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socialButtonClassName =
  "shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground border-transparent"
const socialIconClassName =
  "size-5 fill-foreground transition-colors group-hover/button:fill-accent-foreground"
const githubIconClassName = socialIconClassName

const externalLinks = [
  {
    label: "Email",
    tooltip: "michael@michaelmiller.io",
    href: "mailto:michael@michaelmiller.io",
    icon: Send,
  },
  {
    label: "LinkedIn",
    tooltip: "michaeljvmiller",
    href: "https://www.linkedin.com/in/michaeljvmiller",
    icon: () => <Linkedin className={socialIconClassName} />,
  },
  {
    label: "GitHub",
    tooltip: "mjvmiller",
    href: "https://www.github.com/mjvmiller",
    icon: () => <Github className={githubIconClassName} />,
  },
]

export function LayoutControls() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [isLinksOpen, setIsLinksOpen] = useState(false)
  const showThemeToggle = pathname !== "/"

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <TooltipProvider>
      <div className="fixed top-10 left-10 z-50">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                className="shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
                render={<Link href="/" />}
                nativeButton={false}
              />
            }
          >
            ~/michael
          </TooltipTrigger>
          <TooltipContent side="right">Michael&apos;s Homepage</TooltipContent>
        </Tooltip>
      </div>

      <div className="fixed top-10 right-10 z-50 hidden flex-col items-end gap-3 sm:flex">
        {externalLinks.map((link) => (
          <Tooltip key={link.label}>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className={socialButtonClassName}
                  render={
                    <a href={link.href} target="_blank" rel="noreferrer" />
                  }
                  nativeButton={false}
                />
              }
              aria-label={link.label}
            >
              <link.icon />
            </TooltipTrigger>
            <TooltipContent side="left">{link.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <Collapsible
        open={isLinksOpen}
        onOpenChange={setIsLinksOpen}
        className="fixed top-10 right-10 z-50 flex flex-col items-end gap-3 sm:hidden"
      >
        <CollapsibleTrigger
          render={
            <Button
              variant="outline"
              size="icon-lg"
              className={`${socialButtonClassName} active:bg-accent active:text-accent-foreground`}
              aria-label={
                isLinksOpen ? "Close external links" : "Open external links"
              }
            />
          }
        >
          {isLinksOpen ? <X className="size-5" /> : <Plus className="size-5" />}
        </CollapsibleTrigger>

        <CollapsibleContent className="flex flex-col items-end gap-3">
          {externalLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="icon-lg"
              className={socialButtonClassName}
              render={<a href={link.href} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              aria-label={link.label}
            >
              <link.icon />
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {showThemeToggle ? (
        <div className="fixed right-10 bottom-10 z-50">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className={`relative ${socialButtonClassName}`}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                />
              }
            >
              <Sun className="size-5 scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <Moon className="absolute size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
              <span className="sr-only">Toggle theme</span>
            </TooltipTrigger>
            <TooltipContent side="left">Toggle theme</TooltipContent>
          </Tooltip>
        </div>
      ) : null}
    </TooltipProvider>
  )
}
