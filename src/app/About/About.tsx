import Linkedin from "./assets/icons8-linkedin-94.png"
import GitHub from "./assets/icons8-github-94.png"
import Discord from "./assets/icons8-discord-94.png"
import Whatsapp from "./assets/icons8-whatsapp-94.png"
import About2 from "./page";


const About = ()=> {
    return(
        <>
        <div className="w-full h-screen flex justify-evenly items-center bg-[#3a3a3a92]">
            <div className="About-Text-Container w-[35vw] text-xl">
                <p>Hi, I’m <b><i className="text-3xl">Arman Malik</i></b><br /><br /> — a passionate and self-taught web developer 
                    who enjoys creating clean, responsive, and user-friendly websites.
                   Let’s create something awesome together!</p>
                   
                   <a className="text-yellow-300 cursor-pointer" href="#footer"> Download My Resume</a>
            </div>
            <div>
            <div>
                {/* <img src={Linkedin}/>
                <img src={GitHub}/>
                <img src={Discord}/>
                <img src={Whatsapp}/> */}
                <p className="text2 w-[50vw]">I focus on writing clean, efficient code. I'm constantly learning,
                 experimenting, and pushing my limits to become a better developer every day. I specialize in front-end development using modern technologies 
                like <span>React, JavaScript, and CSS</span>, but I’m always exploring new tools </p>
            </div>
            </div>
        </div>
        </>
    );
};

export default About;