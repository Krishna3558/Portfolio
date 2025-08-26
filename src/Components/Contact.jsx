import React from 'react'
import { FaEnvelope , FaLinkedin , FaGithub , FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
          Contact Me
        </span>
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8 md:space-y-12">
        <p className=" lg:whitespace-nowrap text-center text-sm sm:text-lg font-semibold bg-gradient-to-br lg:bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          I’m open to internships, projects, freelance work, and collaborations. Feel free to reach out through the links below.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:mkittu230@gmail.com"
            className="flex items-center gap-2 bg-red-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition"
          >
            <FaEnvelope /> Email Me
          </a>

          {/* Phone */}
          <a
            href="tel:+919350352733"
            className="flex items-center gap-2 bg-yellow-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-yellow-700 transition"
          >
            <FaPhone /> Call Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Krishna3558"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 px-6 py-3 rounded-lg text-white font-medium hover:bg-gray-800 transition"
          >
            <FaGithub /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/krishna-mishra3558/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-700 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact