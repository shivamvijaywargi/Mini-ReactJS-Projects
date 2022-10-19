import { useState } from "react";
import "./App.css";

function App() {
  // To get the user input and store it in state
  const [userName, setUserName] = useState("");
  // To get the name from localstorage if saved
  const [localName, setLocalName] = useState(localStorage.getItem("username"));

  // Function to set the user entered name to localstorage
  const handleSubmit = () => {
    localStorage.setItem("username", userName);
  };

  return (
    <div className="App">
      Welcome,{" "}
      {/* A ternary: If there is name is localstorage display it otherwise display a form with input field so that user can enter the name which in turn is stored in the localstorage */}
      {localName ? (
        localName
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />
        </form>
      )}
    </div>
  );
}

export default App;
