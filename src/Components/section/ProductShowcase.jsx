import { useState } from 'react'
import projects from '../Reusable/project.jsx'
function ProductShowcase(){
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const filteredProjects=selectedCategory==="all" ? projects :projects.filter((projects)=>projects.category===selectedCategory)
 return(
    <div className="p-6 text-slate-800 bg-gradient-to-r from-emerald-900 via-green-700 to-lime-300 flex-grow">
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <button onClick={()=>setSelectedCategory('all')} className="px-4 py-2 bg-lime-500 rounded-lg">All</button>
        <button onClick={()=>setSelectedCategory('web')} className="px-4 py-2 bg-lime-500 rounded-lg">Web</button>
        <button onClick={()=>setSelectedCategory('graphic')} className="px-4 py-2 bg-lime-500 rounded-lg">Design</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index)=>
          <div key={index} className="border border-gray-300 p-4 rounded-lg">
            {project.category === "web" ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                />
              </a>
            ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                  onClick={() => setSelectedImage(project.image)}
                />
            )}
            <h3 className="font-bold text-2xl">{project.title}</h3>
            <p className="text-xl">{project.description}</p>
            <p className="text-lg mt-1">Tech: {project.tech}</p>
          <div className="mt-2">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" className="text-blue-600 underline mr-2">View Live</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" className="text-gray-600 underline">GitHub</a>}
          </div>
          </div>
        )}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <img 
              src={selectedImage} 
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
            />
        </div>
)}
    </div>
    
 )
}

export default ProductShowcase;