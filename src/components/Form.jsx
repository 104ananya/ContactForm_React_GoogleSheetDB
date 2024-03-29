import React, { useState } from "react";

const Form = () => {
  // Initialize the state variable `data` with an object that contains 4 properties:
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Destructure the properties of the `data` object
  const { name, email, phone, message } = data;

  // An event handler function that updates the `data` state variable when the user interacts with the form fields
  const handleChange = (event) => {
    setData({
      ...data, // Spreading the previous state of `data`
      [event.target.name]: event.target.value, // Update the property that corresponds to the interacted form field
    });
  };

  const API_URL = process.env.URL;


  // An event handler function that handles the form submission
  //   * This function sends a POST request to the provided API endpoint to submit
  //   * the form data and then resets the form fields.

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify([
          [name, email, phone, message, new Date().toLocaleDateString()],
        ]),
      });

      await response.json();
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg md:mr-16">
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-pink text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:bg-light-pink"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
