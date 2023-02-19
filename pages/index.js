import { useSession, signIn, signOut } from "next-auth/react"
import { Inter } from '@next/font/google'
import Login from "@/components/Login"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      {session ? (
        <div>
        <h3>{session.user.name}</h3>
        <button onClick={() => signOut()}>Logout</button>

        </div>
      ) : (
      <Login signIn={signIn} />
      )}
    </>
  )
}
