import { FiSearch } from "react-icons/fi"

const DisplayWeather = ({ session }) => {
    return (
        <div className="text-center w-full">
            <h3 className="text-2xl">{session.user.name}</h3>
            <div className="my-10">
                <form onsubmit="validateFormWithJS()">
                    <div className="relative w-2/4 mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="text" name="city" id="city" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" />
                    </div>
                    <button className="mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="submit">Display Weather</button>
                </form>
            </div>
        </div>
    )
}

export default DisplayWeather
