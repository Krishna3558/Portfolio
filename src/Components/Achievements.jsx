import React from 'react'

function Achievements() {
    const hackathons = [
        {
        title: "SRM Builds 6.0 Hackathon",
        position: "1st Place",
        role: "Frontend Developer",
        description:
            "Built a scalable web platform with a strong focus on UI/UX, responsive design, and smooth backend integration.",
        },
        {
        title: "DTU Code with DCG Hackathon",
        position: "1st Place",
        role: "Frontend Developer & Chrome Extension Developer",
        description:
            "Developed a Chrome Extension solving real-world usability challenges with a seamless and interactive UI.",
        },
        {
        title: "IIIT Delhi E-Summit Hackathon",
        position: "1st Place",
        role: "Frontend Developer",
        description:
            "Designed a modern and user-friendly web application, recognized for clean UI and rapid prototyping.",
        },
        {
        title: "Amity University Hackathon",
        position: "3rd Place",
        role: "Frontend Developer",
        description:
            "Built a feature-rich frontend with responsive design, delivering value even under resource constraints.",
        },
        {
        title: "Cluster Innovation Center Hackathon",
        position: "1st Prize",
        role: "Frontend Developer",
        description:
            "Delivered the entire frontend system with smooth navigation, recognized for innovation and strong presentation.",
        },
    ];
  return (
    <section className='py-16 px-6 md:px-12 bg-gradient-to-br from-slate-900 to-slate-950 text-white' id="achievements">
        <h2 className=" w-full bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 bg-clip-text text-transparent text-4xl font-bold text-center mb-12 relative inline-block">
        Achievements
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hackathons.map((hack, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-800 to-blue-950 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 cursor-pointer transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">{hack.title}</h3>
            <p className="text-sm text-yellow-300 font-medium mb-2">
              {hack.position} — {hack.role}
            </p>
            <p className="text-yellow-200">{hack.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements