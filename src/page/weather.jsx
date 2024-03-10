import "./weather.css";
import {SearchBar} from '../components/search-bar'

export const Weather = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="flex items-center w-[25rem] h-[5rem] bg-white rounded-xl">
        <SearchBar/>
      </div>
    </div>
  );
};
