import { useState } from "react"

export const SearchBar = ({fetchWeather}) => {

    const [location, setLocation] = useState('')
    const [error, setError] = useState(false)

    const handleSearch = (ev) => {
        ev.preventDefault();
        if (location.trim().length === 0) {
            console.log('erreur champs vide !');
            displayError()
        } else {
            fetchWeather(location)
        }
    }   

    const displayError = () => {
        setError(true);
        setTimeout(() => {
            setError(false)
          }, "2000");
    }

  return (
    <div className="flex px-5 relative">
        {error && (
            <div className="text-red-600 font-xl font-bold absolute left-[30%] top-[-115%] text-center">
                Please insert a city
            </div>
        )}
        <div className="flex gap-5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            <form className="flex gap-5" onSubmit={handleSearch}>
                <input
                type="text"
                name="location"
                className="text-lg placeholder-gray-600 rounded-md px-5 py-2"
                placeholder="Choose your location.."
                value={location}
                onChange={ev => setLocation(ev.target.value)}
                />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
        </div>
    </div>
  )
}
