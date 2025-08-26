import React from 'react'
import { FaLink , FaGithub } from 'react-icons/fa';

function Project() {
    const projects = [
    {
        name: "Food Ordering App",
        stack: "MERN Stack",
        description: [
        "Full-stack web application for ordering food online.",
        "Users can browse food categories, view items, add to cart, and place orders.",
        "Cart is user-specific, saved in MongoDB, and persists across sessions.",
        "Implemented authentication and authorization for users and admin.",
        "Integrated features like search, filters, and sorting of items.",
        ],
        github: "https://github.com/Krishna3558/FoodApp",
        deployed: "https://foodapp-frontend-d1hv.onrender.com",
    },
    {
        name: "Task Manager App",
        stack: "MERN Stack",
        description: [
        "Manage tasks with create, update, delete, and mark complete functionalities.",
        "User authentication with login/signup, accessible on any device.",
        "Tasks include deadline, date, time, and description.",
        "Persistent storage in MongoDB to access tasks from any device.",
        "Built with React for frontend and Node.js/Express for backend.",
        ],
        github: "https://github.com/Krishna3558/TaskManagerApp",
        deployed: "https://taskmanagerappfrontend.onrender.com",
    },
    {
        name: "Hand Cricket Game",
        stack: "React",
        description: [
        "Interactive hand cricket game with multiple playing options.",
        "Uses React Router for navigating between different game types.",
        "Props and state management for dynamic game play.",
        "Fetches data and images of cricket-playing countries from API.",
        "Fun UI with responsive design for both mobile and desktop.",
        ],
        github: "https://github.com/Krishna3558/HandCricket",
        deployed: "https://Krishna3558.github.io/HandCricket",
    },
    ];
  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer hover:scale-105 transition-transform flex flex-col"
          >
            <h3 className="text-2xl bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold mb-2">{project.name}</h3>
            <p className="text-yellow-300 font-semibold mb-2">{project.stack}</p>
            <ul className="list-none mb-4 text-yellow-200 space-y-1">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex justify-between mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs min-[330px]:text-sm sm:text-lg gap-2 bg-gray-900 hover:bg-gray-800 px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition text-white font-medium"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs min-[330px]:text-sm sm:text-lg gap-2 bg-cyan-600 hover:bg-cyan-700 px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition text-white font-medium"
              >
                <FaLink /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project