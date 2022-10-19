import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Using useState to store api result, by default it is null
  const [randomUser, setRandomUser] = useState(null);

  // Creating an async function to call it within useEffect()
  const fetchData = async () => {
    const { data } = await axios.get("https://randomuser.me/api");

    setRandomUser(data);
  };

  useEffect(() => {
    // Calling the function which makes asynchronous request to API
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Displaying the gender on the screen */}
      {/* Here '?.' means optional chaining. Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      {randomUser?.results[0]?.gender}
    </div>
  );
}

export default App;
