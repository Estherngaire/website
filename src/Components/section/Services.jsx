function Services(){
    const WebService=['Responsive websites', 'React single-page applications', 'Portfolio & business websites ', 'Clean and maintainable code'];
    const DesignService=
    ['Social media graphics', 'Branding materials', 'UI mockups', 'Logo concepts']; 
    return(
        <div className="flex flex-col text-center gap-4 bg-pink-100 p-4 text-slate-700 flex-grow">
            <h1 className="font-bold">Services i offer</h1>
            <p>I provide graphic design and web development services that blend creativity with functionality. From bold visual identities to responsive, interactive websites, I help transform ideas into impactful digital experiences.</p>
            <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div>
                <h2 className="text-xl font-bold text-slate-900">Web Services</h2>
                <ul className="flex flex-col gap-3 items-start p-3 list-inside list-disc">
                    {WebService.map((web)=>
                    <li key={web}>{web}</li>)}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-900">Design Services</h2>
                <ul className="flex flex-col gap-3 items-start p-3 list-inside list-disc">
                    {DesignService.map((design)=>
                    <li key={design}>{design}</li>)}
                </ul>
            </div>
        </div>
        </div>
 )
};
export default Services;