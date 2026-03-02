function About(){
    const WebSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'];
    const DesignSkills = ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'];
    const Learning = ['TypeScript', 'Next.js', 'Tailwind CSS'];
    return(
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-pink-100 text-slate-800 h-screen">
                <article className="md:w-2/3">
                    <h1 className="font-bold">About Me</h1>
                    <p>I’m a frontend web developer with a background in graphic design, focused on building digital experiences that are both visually refined and technically sound. I combine creative thinking with structured problem-solving to develop interfaces that are clean, responsive, and user-centered.
                    My goal is to create products that not only look professional but also deliver clarity, performance, and usability.</p>
                    <div className="flex flex-col md:flex-row gap-6 border p-4 rounded-md">
                        <div>
                        <h2 className="font-bold m-2">WebDevelopment</h2>
                        <p>My journey into tech deepened when I started learning modern frontend development. I work with React and Vite to build responsive, user-friendly interfaces. I enjoy creating clean layouts, reusable components, and interactive features that improve user experience.
                        I’m continuously improving my skills by building personal projects and exploring best practices in frontend development.</p>
                    </div>
                    <div>
                        <h2 className="font-bold m-2">Graphic Design</h2>
                        <p>My foundation in graphic design strengthens my approach to development. With an understanding of layout systems, typography, color theory, and visual hierarchy, I build interfaces that are not only functional but aesthetically intentional.
                        I believe strong design enhances usability — and I bring that balance of creativity and logic into every project I work on.</p>
                    </div>
                    </div>
                </article>
                <aside className="flex flex-col md:w-1/3 border border-collapse border-gray-400 p-4 rounded-lg bg-slate-200 h-fit">
                    <h1 className="font-bold text-center">Skills</h1>
                <div className="flex flex-row gap-8 justify-center">
                    <div>
                        <h2 className="font-semibold">Web Development</h2>
                        <ul>
                        {WebSkills.map((web)=>
                        <li key={web}>{web}</li>
                        )}
                        </ul>
                    </div>
                   
                   <div>
                       <h2 className="font-semibold">Graphics</h2>
                     <ul>
                        {DesignSkills.map((design)=>
                      <li key={design}>{design}</li>
                     )}
                    </ul>
                     </div>
                </div>  
            <section className="text-center">
                <h1 className="font-bold">Currently Learning</h1>
                <ul>
                    {Learning.map((learn)=>
                    <li key={learn}>{learn}</li>
                    )}
                </ul>                
            </section>
            </aside>
            </div>
    );
}
export default About;