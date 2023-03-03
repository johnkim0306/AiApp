import './App.css';
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './AIOption';
import Translation from './components/Translation';
import { useState } from 'react';

function App() {
  //apiKey: process.env.OPENAI_API_KEY,
  const configuration = new Configuration({
    apiKey: "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"
  });

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({}); 
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  console.log(arrayItems);
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };
  console.log(input);

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );  
}

export default App;