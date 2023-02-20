import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import WeatherCard from "components/weather/WeatherCard"

const DisplayWeather = ({ session }) => {
    const [search, setSearch] = useState('')
    const [weather, setWeather] = useState({})
    const [show, setShow] = useState(false)

    // Search button is pressed. Make a fetch call to the Open Weather Map API. 
    const handleSearch = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}weather?q=${search}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
        setShow(true)
    };

    return (
        <div className="text-center w-full">
            {!show && (
                <>
                    <div className="mb-5">
                        <img className="mx-auto w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={session.user.image} alt={session.user.name} />
                    </div>
                    <h3 className="text-2xl">{session.user.name}</h3>
                    <div className="my-10">
                        {/* search bar and search button  */}
                        <div className="relative w-2/4 mx-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="City"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <button
                            className="mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            onClick={handleSearch}
                        >
                            Display Weather
                        </button>
                    </div>
                </>
            )}
            {show && typeof weather.main !== "undefined" ? (
                <WeatherCard weather={weather} setShow={setShow} setSearch={setSearch} />
            ) : (
                ""
            )}
        </div>
    )
}

export default DisplayWeather
