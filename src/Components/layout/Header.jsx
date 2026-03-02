import { Link } from "react-router-dom";
function Header(){
    return(
    <header className="flex flex-row justify-between items-center p-4 bg-slate-200">
         <h1 className="font-semibold">Esther</h1>
        <div >
         <ul className="flex flex-row gap-4 font-semibold">
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