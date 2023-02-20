import { useSession, signIn, signOut } from "next-auth/react"
import { Inter } from '@next/font/google'
import Login from "@/components/Login"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <div className="text-center w-full">
          <h3 className="text-2xl">{session.user.name}</h3>
        </div>
      </>
    )
  }

  return (
    <Login signIn={signIn} />
  )
}
