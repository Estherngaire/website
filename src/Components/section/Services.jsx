function Services(){
    const WebService=['Responsive websites', 'React single-page applications', 'Portfolio & business websites ', 'Clean and maintainable code'];
    const DesignService=
    ['Social media graphics', 'Branding materials', 'UI mockups', 'Logo concepts']; 
    return(
        <div className="flex flex-col gap-4 bg-gradient-to-r from-emerald-900 via-green-700 to-lime-300 p-4 flex-grow">
            <h1 className="font-bold text-center text-2xl">Services i offer</h1>
            <p className="text-xl">I provide graphic design and web development services that blend creativity with functionality. From bold visual identities to responsive, interactive websites, I help transform ideas into impactful digital experiences.</p>
            <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div>
                <h2 className="text-2xl font-bold text-center">Web Services</h2>
                <ul className="flex flex-col gap-3 p-3 list-inside list-disc text-xl">
                    {WebService.map((web)=>
                    <li key={web}>{web}</li>)}
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-center ">Design Services</h2>
                <ul className="flex flex-col gap-3 p-3 list-inside list-disc text-xl">
                    {DesignService.map((design)=>
                    <li key={design}>{design}</li>)}
                </ul>
            </div>
        </div>
        </div>
 )
};
export default Services;