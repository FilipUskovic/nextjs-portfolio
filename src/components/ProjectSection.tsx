import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
 


const projects = [
     {
       name: "Simple movie page (Fmoves clone) P.S. click on the screen when on open site to who movies ",
       description:
         "This is simple fully responsive full stack app (Java 17, SpringBoot, React Bootsrap and MongoDb Atlas), you can watch trailer and post comments",
       image: "/Reactfullstak.png",
       github_backend: "https://github.com/FilipUskovic/movie-api-java",
       github_frontend: "https://github.com/FilipUskovic/movie-clinet-react",
       link: "https://movies-client-react.web.app/",
     },
    {
      name: "ShowTime netflix movie clone",
      description: "This is fully responsive Angular 14 netflix clone web app (Only Front-End).",
      image: "/angular.png",
      github_frontend: "https://github.com/FilipUskovic/netflix-clone-showtime",
      github_backend: "",
      link: "https://seismic-sunbeam-239720.web.app/",
    },
    {
      name: "To-do-list",
      description:
        "This is modern fully responsive to-do-list build using react and typescript.",
      image: "/reacttscript.png",
      github_frontend: "https://github.com/FilipUskovic/react-todo/tree/main",
      github_backend: "",
      link: " https://64ce6d64842a6d501997c3fe--transcendent-clafoutis-2196a9.netlify.app/",
    },
    {
        name: "Tic-tac-toe",
        description:
          "This is simple tic-tac-toe Next.js app.",
        image: "/Nextjs.png",
        github_frontend: "https://github.com/FilipUskovic/tactactoe-react-Next.Js-13",
        github_backend: "",
        link: " https://amazing-croquembouche-74db14.netlify.app/",
      },
     
  ]

const ProjectSection = () => {
    return(
        <section id="projects"> <h1 className="text-center font-bold text-4xl">Projects</h1>
       
       <br />
       <span><h3>("Just some of my projects")  </h3></span>
       <br />
        <b></b>
        
        <div className="flex flex-col space-y-28">
        <b></b>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github_frontend} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.github_backend} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
        
        
        </section>
        
    )
}



export default ProjectSection;
