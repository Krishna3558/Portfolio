import React from 'react'
import { FaReact , FaNodeJs , FaGitAlt , FaPython } from 'react-icons/fa'
import { SiExpress , SiJavascript , SiTailwindcss , SiGithub , SiMongodb , SiMysql , SiHtml5 , SiCss3 } from 'react-icons/si'

function Skills() {
    const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-5xl" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-cyan-400 text-5xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-cyan-400 text-5xl" /> }
  ];

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col items-center justify-center px-10 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
          >
            {skill.icon}
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills