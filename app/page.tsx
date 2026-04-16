import HomescreenButtonRow from "@/components/homescreen-button-row"

export default function Page() {
  return (
    <div className="min-h-dvh w-screen flex-1 overflow-hidden overscroll-none bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-fit w-full flex-col items-center gap-4 sm:w-xl sm:items-start">
          <h1 className="text-5xl font-bold tracking-tight">
            <p>
              Hey,
              <br className="sm:hidden" /> I&apos;m Michael
            </p>
          </h1>
          <h2 className="text-2xl tracking-tight">
            <p className="text-muted-foreground">a software engineer</p>
            <p className="text-muted-foreground">based in California</p>
          </h2>
          <HomescreenButtonRow />
        </div>
      </div>
    </div>
  )
}
