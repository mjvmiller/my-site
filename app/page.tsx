import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex h-svh w-screen flex-col items-center justify-center">
      <div className="flex h-fit w-xl flex-col items-start gap-4">
        <h1 className="text-5xl font-bold tracking-tight">
          <p>Hey, I&apos;m Michael</p>
        </h1>
        <h2 className="text-2xl tracking-tight">
          <p className="text-muted-foreground">a software engineer</p>
          <p className="text-muted-foreground">based in California</p>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button variant="outline" className="shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground">
            About Me
          </Button>
          <Button variant="outline" className="shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground">
            Photography
          </Button>
        </div>
      </div>
    </div>
  )
}
