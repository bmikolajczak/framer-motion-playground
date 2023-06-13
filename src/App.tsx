import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            style={{ backgroundColor: "cyan", borderRadius: 30 }}
          >
            <h4 style={{ color: "black" }}>Hello</h4>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            setIsVisible((prevVal) => !prevVal);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
