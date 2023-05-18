import Copyright from "@/components/Copyright"
import EmptyMemories from "@/components/EmptyMemories"
import Hero from "@/components/Hero"
import Profile from "@/components/Profile"
import SignInButton from "@/components/SignInButton"
import { cookies } from "next/headers"



export default function Home() {

  const isAuthenticated = cookies().has('token')



  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col intems-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
        {/*  Blur */}
        <div className="absolute right-0 top-1/2 h-[128px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full"/>

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <SignInButton />}
        <Hero />
        <Copyright />

      </div>

      {/* Right */}
      <div className="flex flex-col p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
