import NavBar from "./NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className="container max-w-3xl mx-auto">
                {children}
            </main>
        </>
    )
}

export default Layout
