import { useEffect, useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Loader } from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  // Set loading to false after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        // If loading is true, render the loader
        <Loader />
      ) : (
        <>
          {/* If loading is false, render the app */}
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
