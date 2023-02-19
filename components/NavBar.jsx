import { useSession, signOut } from "next-auth/react"
import { SiIcloud } from "react-icons/si"

const NavBar = () => {
    const { data: session } = useSession()
    return (
        <nav className="text-2xl bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 flex items-center justify-between">
            <div className="h-20 flex gap-4 items-center">
                <div>
                    <SiIcloud />
                </div>
                <div>
                    <h1>Weather Forecast</h1>
                </div>
            </div>
            <div>
                {session && (
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => signOut()}>Logout</button>
                )}
            </div>
        </nav>
    )
}

export default NavBar
