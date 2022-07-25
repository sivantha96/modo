import React, { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        setUrl(tabs[0].url || "");
      });
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
