function About(){
    const WebSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'];
    const DesignSkills = ['Canva', 'Adobe Illustrator', 'Figma'];
    const Learning = ['TypeScript', 'Next.js', 'Tailwind CSS'];
    return(
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-emerald-900 via-green-700 to-lime-300 flex-grow">
                <article className="md:w-2/3">
                    <h1 className="text-2xl font-bold text-slate-900 p-1">About Me</h1>
                    <p className="text-xl">I’m a Frontend developer with a graphic design background, so I naturally focus on both design and functionality. I enjoy creating clean, responsive interfaces that are easy to use.</p>
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                        <div className="p-3">
                        <h2 className="text-2xl font-bold p-1">Web Development</h2>
                        <p className="text-xl">I got into web development and just kept learning from there—HTML, CSS, Tailwind, JavaScript, and more. I’ve also been getting into backend with Node and Express while building projects along the way.</p>
                    </div>
                    <div className="p-3">
                        <h2 className="text-2xl font-bold p-1">Graphic Design</h2>
                        <p className="text-xl">Coming from a graphic design background, I naturally pay attention to layout, spacing, and overall feel. It helps me build interfaces that not only work well but also look right. Alongside development, I still enjoy working on design projects like posters, logos, and social media graphics.</p>
                    </div>
                    </div>
                </article>
                <aside className="flex flex-col md:w-1/3 border border-collapse border-gray-400 p-4 rounded-lg bg-lime-600 h-fit hover:scale-105">
                    <h1 className="font-bold text-center text-2xl text-black">Skills</h1>
                <div className="flex flex-row gap-14 justify-center">
                    <div className="mt-3">
                        <h2 className="font-bold text-black p-1 text-xl">Web Development</h2>
                        <ul className="list-inside list-disc space-y-1 text-lg">
                        {WebSkills.map((web)=>
                        <li key={web}>{web}</li>
                        )}
                        </ul>
                    </div>
                   
                   <div className="mt-3">
                       <h2 className="font-bold text-black p-1 text-xl">Graphics</h2>
                     <ul className="list-inside list-disc space-y-1 text-lg">
                        {DesignSkills.map((design)=>
                      <li key={design}>{design}</li>
                     )}
                    </ul>
                     </div>
                </div>  
            <section className="flex flex-col items-center p-4 border-t border-gray-400">
                <h1 className="font-bold text-black mb-1 text-xl">Currently Learning</h1>
                <ul className="list-inside list-disc space-y-1 text-lg">
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