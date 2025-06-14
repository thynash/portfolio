import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const FooterSection = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10 px-6 md:px-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Nityansh Pant. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/thynash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/thynash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://twitter.com/thynash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

