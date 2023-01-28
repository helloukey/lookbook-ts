import Background from "./components/Background";
import Header from "./components/Header";
import Single from "./components/Single";
import Social from "./components/Social";
import Loading from "./loader/Loading";
import Opening from "./loader/Opening";

import { useEffect, useState } from "react";
import usePageLoad from "./hooks/usePageLoad";
import { AnimatePresence } from "framer-motion";

// type
type Colors = string[];
const colors: Colors = ["blue", "purple", "crimson", "whitesmoke", "deeppink"];

function App(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const { isLoaded } = usePageLoad({});

  // Changing Background randomly every 30s
  useEffect(() => {
    setInterval(() => {
      setCurrent(Math.floor(Math.random() * colors.length));
    }, 30000);
  }, []);

  return (
    <div className="app">
      {/* Show main content only when DOM is loaded */}
      {isLoaded && (
        <>
          {/* <Background color={colors[current]} /> */}
          <Header />
          <Social />
          <Single />
        </>
      )}
      {/* Show loading screen when not loaded */}
      {!isLoaded && <Loading />}
      <AnimatePresence>{!isLoaded && <Opening />}</AnimatePresence>
    </div>
  );
}

export default App;
