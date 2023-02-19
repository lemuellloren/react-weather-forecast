const Login = ({ signIn }) => {
    return (
        <div>
            <p className="text-3xl font-bold underline">
                Welcome to the weather forecast web application. Please login with your
                Github user to use the application and view the weather in your city
            </p>
            <button onClick={() => signIn()}>Login</button>
        </div>
    )
}

export default Login
