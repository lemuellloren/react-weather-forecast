import moment from 'moment'

const WeatherCard = ({ weather, setShow, setSearch }) => {

    const tableHeaders = ['Date', 'Temp(F)', 'Description', 'Main', 'Pressure', 'Humidity']
    const weatherData = [
        {
            title: 'Date',
            data: moment().subtract(10, 'days').calendar(),
        },
        {
            title: 'Temp(F)',
            data: weather.main.temp,
        },
        {
            title: 'Description',
            data: weather.weather[0].description,
        },
        {
            title: 'Main',
            data: weather.weather[0].main,
        },
        {
            title: 'Pressure',
            data: weather.main.pressure,
        },
        {
            title: 'Humidity',
            data: weather.main.humidity,
        },
    ]

    const { title, data } = weatherData

    return (
        <div>
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
                    <tbody className='bg-white dark:bg-slate-800'>
                        <tr>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                {moment().subtract(10, 'days').calendar()}
                            </td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                <p>{weather.main.temp}°C</p>
                            </td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                <p>({weather.weather[0].description})</p>
                            </td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                <p>{weather.weather[0].main}</p>

                            </td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                <p>{weather.main.pressure}</p>

                            </td>
                            <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
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
