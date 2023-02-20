import moment from 'moment'

const WeatherCard = ({ weather, setShow, setSearch }) => {

    const tableHeaders = ['Date', 'Temp(F)', 'Description', 'Main', 'Pressure', 'Humidity']

    return (
        <div className='p-5'>
            <div className="relative bg-white overflow-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {tableHeaders && (
                                tableHeaders.map((tableHeader) => (
                                    <th className="px-6 py-3">{tableHeader}</th>
                                ))
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {moment().subtract(10, 'days').calendar()}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>{((weather.main.temp * 9 / 5) + 32).toFixed(2)}</p>
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>({weather.weather[0].description})</p>
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>{weather.weather[0].main}</p>

                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>{weather.main.pressure}</p>

                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>{weather.main.humidity}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-right mt-10">
                <button
                    className="mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => {
                        setShow(false)
                        setSearch('')
                    }}
                >
                    Back
                </button>
            </div>
        </div>
    )
}

export default WeatherCard
