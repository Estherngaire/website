import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-pink-100 text-slate-700 h-screen">
            <div className="md:w-1/3">
                <img src="/assets/profile.jpg" alt="Profile Picture" className="w-80 h-80 object-cover rounded-full shadow-lg"/>
            </div>
            <div className="md:w-2/3 flex flex-col gap-3"> 
                <h1 className="text-4xl font-bold text-slate-900">Hello! I,m Esther Muthoni</h1>
                <h3 className="text-2xl font-semibold text-slate-800">I design it. I build it. I make it interactive</h3>
                <p className="text-md text-xl">I transform ideas into responsive, interactive web applications that feel smooth, modern and alive. I love combining clean code with thoughtful design to create meaningful digital experiences.</p>
              <div className="flex gap-8 mt-3">
                <Link to="/projects" className="border border-black px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-700">View Work</Link>
                <Link to="/contact" className="border border-black px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-700">Hire Me </Link>
              </div>  
            </div>
            
                
        </div>
    )
};
 export default Home;