import {useState} from 'react'

import Header from './components/Header.jsx';
import CalculatorInput from './components/CalculatorInput.jsx';
import CalculatorOutput from './components/CalculatorOutput.jsx';

const INITIAL_PARAMS = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 10,
}

function App() {
  const [params, setParams] = useState(INITIAL_PARAMS);

  function handleChangeParams(field, newValue) {
    setParams(prevParams => {
      return {
        ...prevParams,
        // [field]: Number(newValue)
        [field]: +newValue
      }
    })
  };

  return (
    <>
      <Header/>
      <CalculatorInput params={params} onChangeParam={handleChangeParams}/>
      <CalculatorOutput params={params}/>
    </>
  )
}

export default App
