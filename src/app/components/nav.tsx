import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Nav() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-4">
        <Link href="/" className="font-semibold text-xl">
          MyApp
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  )
}

