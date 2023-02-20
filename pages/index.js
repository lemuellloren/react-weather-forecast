import { useSession, signIn, signOut } from "next-auth/react"
import { Inter } from '@next/font/google'

import Login from "@/components/Login"
import DisplayWeather from "@/components/weather/DisplayWeather"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  console.log('data:',session)
  if (session) {
    return (
      <DisplayWeather session={session} />
    )
  }

  return (
    <Login signIn={signIn} />
  )
}
