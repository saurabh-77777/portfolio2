import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-200 dark:bg-black shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-indigo-600">MyPortfolio</h1>
        <div className="space-x-6 flex items-center">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <Link to="/login"><CgProfile className="text-xl hover:text-indigo-600"/></Link>
        </div>
      </div>
    </nav>
  );
}
