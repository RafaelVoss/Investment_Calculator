import {useState} from 'react'

import Header from './components/Header.jsx';
import CalculatorInput from './components/CalculatorInput.jsx';
import CalculatorOutput from './components/CalculatorOutput.jsx';

const INITIAL_PARAMS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1,
}

function App() {
  const [params, setParams] = useState(INITIAL_PARAMS);

  function handleChangeParams(field, newValue) {
    setParams(prevParams => {
      return {
        ...prevParams,
        [field]: newValue
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
