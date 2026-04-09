import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpeg"
function Home(){
    return(
        <div className="flex flex-col flex-grow md:flex-row md:items-center gap-6 p-4 bg-gradient-to-r from-emerald-900 via-green-700 to-lime-300 justify-start">
            <div className="flex justify-center md:w-1/3">
                <img src={profile} alt="Esther Muthoni, Web Developer" className="w-64 md:w-72 lg:w-80 h-auto object-cover rounded-full shadow-lg hover:scale-105 transition-transform"/>
            </div>
            <div className="max-w-xl md:w-2/3 flex flex-col gap-3"> 
                <h1 className="text-4xl font-bold">Hello! I'm Esther Muthoni</h1>
                <h3 className="text-2xl font-semibold">I design it. I build it. I make it interactive</h3>
                <p className="text-xl leading-relaxed">I transform ideas into responsive, interactive web applications that feel smooth, modern and alive. I love combining clean code with thoughtful design to create meaningful digital experiences.</p>
              <div className="flex gap-8 mt-3 justify-center md:justify-start">
                <Link to="/projects" className="text-2xl font-semibold border border-black px-6 py-2 rounded-lg bg-lime-300 hover:bg-lime-400 hover:scale-105 transition-all">View Work</Link>
                <Link to="/contact" className="text-2xl font-semibold border border-black px-6 py-2 rounded-lg bg-lime-300 hover:bg-lime-400 hover:scale-105 transition-all">Hire Me </Link>
              </div>  
            </div>
        </div>
    )
};
 export default Home;