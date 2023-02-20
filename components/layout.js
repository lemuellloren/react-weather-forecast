import NavBar from "./NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className="max-w-3xl mx-auto h-96 flex items-center">
                {children}
            </main>
        </>
    )
}

export default Layout
