import { Link } from "react-router-dom";
function Header(){
    return(
    <header className="flex flex-row justify-between items-center p-4 bg-gradient-to-r from-emerald-950 via-green-800 to-lime-400 text-white hover:scale-105">
         <h1 className="font-semibold text-2xl">Esther</h1>
        <div >
         <ul className="flex flex-row gap-4 font-semibold text-xl">
           <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
         </ul>
       </div>   
    </header>
    
)};
export default Header;