function Contact(){
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Formdata={
          name: e.target.name.value,
         email: e.target.email.value,
         message: e.target.message.value,  
        };
        await fetch("https://esther-muthoni.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Formdata)
    });
    e.target.reset();
    };
    return(
        <div className="flex flex-col gap-4 p-4 bg-pink-100 text-slate-800 h-screen">
            <h1 className="font-bold text-center">Lets build something together</h1>
            <p className="font-medium ">I’m currently open to internship and junior frontend opportunities.If you'd like to work together or have a project in mind, feel free to reach out.</p>
               <div className="flex justify-center p-4">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-row gap-5">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" autoComplete="name" placeholder="Enter your name" required className="bg-gray-400 border border-black rounded-md" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" autoComplete="email" placeholder="Enter your email" required className="bg-gray-400 border border-black rounded-md" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" autoComplete="off" required className="bg-gray-400 border border-black rounded-md"></textarea>
                    </div>
                    <button type="submit" className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md">Send Message</button>             
                </form>
                
               </div>
            <p className="text-center font-medium">Or connect with me directly</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
            <a href="https://wa.me/254759373441" className="border border-black px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-center">Whatsapp</a>
            <a href="https://linkedin.com/in/esther-muthoni-a8582b2aa" className="border border-black px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-center">LinkedIn</a>
            </div>
        </div>
    )
};
export default Contact;