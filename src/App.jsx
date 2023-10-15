import { useEffect, useState } from 'react';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Loader } from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {

      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {
        loading ?
          <Loader /> : <>
            <Navbar />
            <Home />
          </>
      }</>
  )
}

export default App
