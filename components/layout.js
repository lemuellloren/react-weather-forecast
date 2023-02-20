import NavBar from "./NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className="max-w-3xl mx-auto h-screen flex items-center">
                {children}
            </main>
        </>
    )
}

export default Layout
