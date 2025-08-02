import Home1 from "./Home/page";
import Header from "./Header/page";
import About from "./About/About";
import Skills from "./Skills/page";
import Experience from "./Experience/page";
import ContactForm from "./ContactForm/page";
import GlassmorphicLogin from "./Component/Assets/LogIN-Page/LogIn";
import ProjectsSection from "./Project/page";
import About2 from "./About/page";

export default function Home() {
  return (
    <>
    <div>
      {/* <GlassmorphicLogin /> */}
      {/* <AboutSection /> */}
      <Header />
      <Home1 />
      <About2 />
      <Skills />
      <ProjectsSection />
      <Experience />
      <ContactForm />
      </div>
    </>
  );
}
