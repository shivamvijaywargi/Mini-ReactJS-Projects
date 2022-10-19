import { useState } from "react";
import "./App.css";

function App() {
  // useState for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // To set input changes in state
  const handleChange = (e) => {
    setFormData({
      ...formData, // Add previous values using spread
      [e.target.name]: e.target.value, // Assign value
    });
  };

  // OnSubmit form function
  const handleSubmit = (e) => {
    // To prevent form from submitting
    e.preventDefault();
    // Logging the formData in the console
    console.log(formData);
    // Set input values to empty string after form is submitted
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="App">
      {/* onSubmit is available on forms and we have attached handleSubmit function to it */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          autoComplete="false"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          autoComplete="false"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="Email"
          autoComplete="false"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="false"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="false"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
