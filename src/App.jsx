import { useEffect, useState } from "react";
import "./App.css";
import ContentView from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Hearder from "./Components/Header/Hearder";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="containerS">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hearder />
          <ContentView />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
