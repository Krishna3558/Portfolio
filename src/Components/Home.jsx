import React, { useCallback, useEffect } from 'react'
import { ReactTyped }  from 'react-typed'
import profilePic from '../assets/KrishnaPhotoPortfolio.jpg'
import { FaEnvelope , FaGithub , FaLinkedin, FaPhone } from 'react-icons/fa'

function Home() {

  return (
    <div id="home" className=' relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white flex items-center justify-center px-10'>
      <div className=' grid lg:grid-cols-2 gap-10 items-center'>
        <div className=' flex flex-col space-y-6'>
            <h1 className="text-xl min-[428px]:text-3xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hi, I’m Krishna Mishra
                </span>
            </h1>
            <ReactTyped
                strings={
                    [
                        "MERN Stack Developer ",
                        "5x Hackathon Winner ",
                        "Tech Enthusiast ",
                    ]
                }
                typeSpeed={100}
                backSpeed={40}
                loop
                className="text-lg min-[428px]:text-xl sm:text-2xl lg:text-3xl text-gray-300"
            />
            <div className="flex space-x-4 sm:space-x-6 mt-4 justify-center lg:justify-start">
            <a
              href="mailto:mkittu230@gmail.com"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full hover:scale-110 transition-transform"
            >
              <FaEnvelope size={20} />
            </a>

            <a
              href="tel:+919350352733"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-red-600 text-white rounded-full hover:scale-110 transition-transform"
            >
              <FaPhone size={20} />
            </a>

            <a
              href="https://github.com/Krishna3558"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:scale-110 transition-transform"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-mishra3558/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:scale-110 transition-transform"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={profilePic}
            alt="Krishna Mishra"
            className="w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full shadow-2xl border-4 border-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

export default Home