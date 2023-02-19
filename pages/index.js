import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <div>
        <h3>{session.user.name}</h3>
        <button onClick={() => signOut()}>Logout</button>

        </div>
      ) : (
        <div>
            Welcome to the weather forecast web application. Please login with your
          Github user to use the application and view the weather in your city
          <button onClick={() => signIn()}>Login</button>
        </div>
      )}
    </>
  )
}
