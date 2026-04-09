function Contact(){
    return(
        <div className="flex flex-col gap-4 p-4 bg-gradient-to-r from-emerald-900 via-green-700 to-lime-300 flex-grow">
            <h1 className="font-bold text-center text-2xl">Lets build something together</h1>
            <p className="text-xl">I’m currently open to internship and junior frontend opportunities.If you'd like to work together or have a project in mind, feel free to reach out.</p>
               <div className="flex justify-center p-4">
                <form className="flex flex-col gap-4" method="POST" action="https://formsubmit.co/95a3225b3170e154ee6af17e830e1bae">
                    <div className="flex flex-row gap-5">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" autoComplete="name" placeholder="Enter your name" required className="bg-gray-400 border border-black rounded-md hover:scale-105" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" autoComplete="email" placeholder="Enter your email" required className="bg-gray-400 border border-black rounded-md hover:scale-105" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" autoComplete="off" required className="bg-gray-400 border border-black rounded-md hover:scale-105"></textarea>
                    </div>
                    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
                    <input type="hidden" name="_captcha" value="true" />
                    <input type="hidden" name="_subject" value="New message from my portfolio" />

                    <button type="submit" className="bg-lime-300 hover:bg-lime-400 px-4 py-2 rounded-md text-2xl font-semibold hover:scale-105">Send Message</button>             
                </form>
                
               </div>
            <p className="text-center text-xl">Or connect with me directly</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
            <a href="https://wa.me/254759373441" className="border border-black px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-center text-2xl font-semibold hover:scale-105">Whatsapp</a>
            <a href="https://linkedin.com/in/esther-muthoni-a8582b2aa" className="border border-black px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-center text-xl font-semibold hover:scale-105">LinkedIn</a>
            <a href="https://github.com/Estherngaire" className="border border-black px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-center text-xl font-semibold hover:scale-105">Github</a>
            </div>
        </div>
    )
};
export default Contact;