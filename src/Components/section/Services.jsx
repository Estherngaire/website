function Services(){
    const WebService=['Responsive websites', 'React single-page applications', 'Portfolio & business websites ', 'Clean and maintainable code'];
    const DesignService=
    ['Social media graphics', 'Branding materials', 'UI mockups', 'Logo concepts']; 
    return(
        <div className="flex flex-col text-center gap-4 bg-pink-100 p-4 text-slate-800 h-screen">
            <h1 className="font-bold">Services i offer</h1>
            <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div>
                <h2 className="text-xl font-semibold">Web Services</h2>
                <ul className="flex flex-col gap-3 items-start p-3">
                    {WebService.map((web)=>
                    <li key={web}>{web}</li>)}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Design Services</h2>
                <ul className="flex flex-col gap-3 items-start p-3">
                    {DesignService.map((design)=>
                    <li key={design}>{design}</li>)}
                </ul>
            </div>
        </div>
        </div>
 )
};
export default Services;