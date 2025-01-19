
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto max-w-[800px] space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary">MyApp</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          A secure and beautiful application with authentication powered by Clerk
        </p>
        
      </div>
    </div>
  )
}
