import { MyContextProvider } from './myContext';
import { Weather } from './page/weather';
import './App.css';

function App() {
  return (
    <MyContextProvider>
      <Weather/>
    </MyContextProvider>
  );
}

export default App;
