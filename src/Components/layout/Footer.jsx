function Footer(){
    return(
        <div className="flex items-center justify-center p-6 bg-gradient-to-r from-emerald-950 via-green-800 to-lime-400 text-white border border-green-600">
         <p className="font-bold">©{new Date().getFullYear()} Esther Muthoni</p>
        </div>
    )
};
export default Footer;