import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
  <HomeSection/>
  <AboutSection/>
  <ProjectSection/>  
   <Contact/> 
  </main>
  )
}
  