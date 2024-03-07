import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Details = () => {
  return (
    <div className="p-6 px-24 flex flex-col justify-evenly ">
      {/* Heading */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-4">
          Let’s discuss something <span className="text-pink">cool</span>{" "}
          together
        </h1>
        <p className="text-lg font-medium">We are excited to hear from you!</p>
      </div>
      {/* Contact details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
        <p className="mb-2 flex">Address: Patna, Bihar, India</p>
        <p className="mb-2">Phone: +91 8XXXXXXX15</p>
        <p className="mb-2">Email: contactananya21@gmail.com</p>
      </div>
      {/* Social media icons/links */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Connect with Me</h3>
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/104ananya/"
            className="text-light-pink hover:text-pink"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/104ananya"
            className="text-light-pink hover:text-pink"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ANANYA1004"
            className="text-light-pink hover:text-pink"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
