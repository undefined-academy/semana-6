import { useState } from 'react';

import Header from './components/Header';
import MainPage from './components/MainPage';

const navBarOptions = ['One', 'Two', 'Three', 'Four', 'Five'];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header 
        data={navBarOptions}
      />
      <MainPage />
    </>
  )
}

export default App
