import { useState } from 'react'
import projects from '../Reusable/project.jsx'
function ProductShowcase(){
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProjects=selectedCategory==="all" ? projects :projects.filter((projects)=>projects.category===selectedCategory)
 return(
    <div className="p-6 text-slate-800 bg-pink-100 flex-grow">
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <button onClick={()=>setSelectedCategory('all')} className="px-4 py-2 bg-amber-500 rounded-lg">All</button>
        <button onClick={()=>setSelectedCategory('web')} className="px-4 py-2 bg-amber-500 rounded-lg">Web</button>
        <button onClick={()=>setSelectedCategory('graphic')} className="px-4 py-2 bg-amber-500 rounded-lg">Design</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project)=>
          <div key={project.id} className="border border-gray-300 p-4 rounded-lg">
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        )}
      </div>
    </div>
 )
}
export default ProductShowcase;