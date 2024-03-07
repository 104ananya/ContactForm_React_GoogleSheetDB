import React from "react";
import Form from "./Form";
import Details from "./Details";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-yellow h-full md:h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-12 mx-10">

        {/* Details section */}
        <Details/>

        {/* Form section */}
        <Form/>
      </div>
    </div>
  );
};

export default Contact;
