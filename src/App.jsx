import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
function App() {
  const [isDark, setIsDark] = useState(false);

  fetch('https://restcountries.com/v3.1/all')
    .then((data) => data.json())
    .then((res) => console.log(res));
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
    </>
  );
}

export default App;
