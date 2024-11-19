import { AnimatedProjects } from "@/components/ui/animated-projects";
import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio v3",
      quote:
        "Thoughtful design and seamless flow have revolutionized our ui process. Dynamic control ensure greater workflow efficiency—exactly what we needed!",
      src: "/portfoliov3.png",
      link: "https://naman-doshi.vercel.app",
      stack: ["React.js", "Shadcn/UI", "Aceternity/UI", "Tailwind CSS"],
      createdDate: "Nov 2024",
    },
    {
      name: "Attribute Based Access Control System",
      quote:
        "Seamless design and dynamic role management have improved access control, enhancing security and workflow efficiency for better permission handling.",
      src: "/abacProject.png",
      link: "https://abac-demo.vercel.app/",
      stack: ["React.js", "TypeScript", "Clerk Authentication"],
      createdDate: "Nov 2024",
    },
    {
      name: "Notes App - MERN",
      quote:
        "The thoughtful design and seamless functionality of this app have greatly enhanced our productivity. It’s exactly what we needed to stay organized and efficient.",
      src: "/notesappProject.png",
      link: "https://mern-notes-naman.vercel.app/",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      createdDate: "Oct 2024",
    },
    {
      name: "A Collaborative SyncDocs",
      quote:
        "Seamless design and real-time collaboration in SyncDocs have transformed teamwork, setting a new standard for efficiency and meeting all our needs.",
      src: "/syncDocsProject.png",
      link: "https://sync-docs-naman.vercel.app/",
      stack: ["Next.js", "Tailwind CSS", "LiveBlocks", "Clerk Authentication"],
      createdDate: "Mar 2024",
    },
    {
      name: "Brainwave - Landing Page",
      quote:
        "The exceptional design and intuitive features of Brainwave have elevated our standards for user experience. It’s the perfect embodiment of what we’ve envisioned for modern applications.",
      src: "/brainwaveProject.png",
      link: "https://brainwave-ui-ux-naman.vercel.app",
      stack: ["React.js", "Tailwind CSS", "3d Parallax"],
      createdDate: "Feb 2024",
    },
    {
      name: "Portfolio v2",
      quote:
        "The polished design and creative features have elevated how we present our work. This perfectly captures the essence of what we needed to stand out.",
      src: "/portfoliov2.png",
      link: "https://naman-doshi-v2.vercel.app/",
      stack: ["Next.js", "Three.js", "Tailwind CSS"],
      createdDate: "Jan 2024",
    },
    {
      name: "Academic Performance Index",
      quote:
        "Thoughtful design have transformed faculty activity tracking, efficiently addressing challenges in evaluating and streamlining faculty contributions.",
      src: "/gold.png",
      link: "https://github.com/DoshiNaman/Application-Performance-Index",
      stack: ["PhP", "Bootstrap", "Html", "CSS", "JavaScript", "jQuery"],
      createdDate: "Mar 2023",
    },
    {
      name: "Simple Image to Text",
      quote:
        "The seamless integration and remarkable accuracy have truly transformed the way we handle image-to-text conversion. This is precisely the solution we've been seeking.",
      src: "/img2textProject.png",
      link: "https://img2txt-naman.vercel.app/",
      stack: ["Next.js", "Vercel AI SDK", "Claude"],
      createdDate: "Feb 2023",
    },
    {
      name: "Modern Task management system",
      quote:
        "The new task management system has streamlined our workflow with seamless functionality and intuitive features, making it the perfect solution for daily task handling.",
      src: "/taskSystemProject.png",
      link: "https://tm-naman.vercel.app/",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "MobX State Tree"],
      createdDate: "Jan 2023",
    },
    {
      name: "Portfolio v1",
      quote:
        "The attention to detail and smooth functionality have enhanced our online presence. The intuitive design and mode-switching feature are exactly what we needed.",
      src: "/portfoliov1.png",
      link: "https://doshinaman.pythonanywhere.com/",
      stack: ["Django", "Bootstrap"],
      createdDate: "Mar 2022",
    },
    {
      name: "Django Todos Management System",
      quote:
        "The user-friendly design has greatly improved our task management and made our workflow more efficient. Exactly what we needed.",
      src: "/djangoTodosProject.png",
      link: "https://github.com/DoshiNaman/todo-django",
      stack: ["Django", "Bootstrap"],
      createdDate: "Feb 2022",
    },
    {
      name: "EduSmart College Management System",
      quote:
        "This system's attention to detail and innovative features have transformed our workflow. It's exactly what we needed to improve efficiency.",
      src: "/gold.png",
      link: "#",
      stack: ["PhP", "Bootstrap"],
      createdDate: "Mar 2020",
    },
  ];
  return (
    <>
      <AnimatedProjects projects={projects} />;
    </>
  );
};

export default Projects;
