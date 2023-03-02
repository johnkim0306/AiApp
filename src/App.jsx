import './App.css';
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './AIOption';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);
  console.log(arrayItems);
  const selectOption = (option) => {
    console.log(option);
  };
  return (
    <div className='App'>
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
    </div>
  );  
}

export default App;