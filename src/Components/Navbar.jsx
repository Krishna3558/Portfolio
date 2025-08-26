import React , {useState} from 'react'
import { Link } from 'react-scroll';
import { Menu , XIcon } from 'lucide-react';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const sections = ["home", "about", "skills", "achievements" , "projects", "contact"];
  return (
    <nav className=' fixed top-0 left-0 w-full bg-gradient-to-r from-slate-950 to-black text-white px-6 md:px-20 py-4  flex items-center justify-between z-50 shadow-md'>
        <h1 className=' uppercase text-2xl font-bold bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 bg-clip-text text-transparent'>Portfolio</h1>
        <ul className="hidden md:flex space-x-8">
            {
                sections.map((section) => (
                    <li key={section} className="cursor-pointer font-medium">
                        <Link
                        to={section}
                        smooth={true}
                        duration={600}
                        offset={-70}
                        onClick={() => setActive(section)} // set active on click
                        className={`cursor-pointer px-2 py-1 font-medium transition 
                          ${active === section 
                            ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md" 
                            : "hover:bg-blue-800 hover:text-white hover:rounded-md"
                          }`}
                        >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <button className="md:hidden text-white"
        onClick={() => setOpen(!open)}>
            {open ? <XIcon size={28} /> : <Menu size={28} />}
        </button>
        {open && (
        <ul className="absolute top-16 left-0 w-full bg-gradient-to-r from-slate-950 to-black text-white flex flex-col items-center space-y-6 py-6 md:hidden">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer hover:text-cyan-400 transition text-xl"
                onClick={() => setOpen(false)} // close menu on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>)}
    </nav>
  )
}

export default Navbar