import React from 'react'
import ProfilePic from '../assets/KrishnaPhotoPortfolio.jpg'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white flex items-center justify-center px-10"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        
        {/* Left Side - Photo */}
        <div className="flex justify-center">
          <img
            src= {ProfilePic} // replace with your photo
            alt="Krishna Mishra"
            className=" w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full object-cover object-top shadow-lg border-2 border-black"
          />
        </div>

        {/* Right Side - About Text */}
        <div className="space-y-3 md:space-y-6">
          <h2 className="text-xl min-[428px]:text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">About Me</h2>
          <p className="max-[445px]:text-xs text-sm md:text-lg text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-white">Krishna Mishra</span>,  
            a 3rd year BTech Computer Science student and a passionate MERN
            stack developer. I enjoy building interactive and scalable web
            applications, solving real-world problems through technology, and
            continuously improving my skills in full-stack development.
          </p>
          <p className="max-[445px]:text-xs text-sm md:text-lg text-gray-300 leading-relaxed">
            I have hands-on experience with projects like a food ordering app,
            task manager, chat application, and voting system. I actively
            participate in hackathons and have also won competitions, which
            reflects my problem-solving mindset and teamwork abilities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About