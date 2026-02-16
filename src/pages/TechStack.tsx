import React from "react";
import "./TechStack.css";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { FaPix } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";

const TechStack: React.FC = () => {
    const techs = [
        { name: "React 19", description: "Modern UI library for building dynamic interfaces.", icon: <FaReact />},
        { name: "Redux Toolkit", description: "Advanced state management for scalable applications.", icon: <TbBrandRedux />},
        { name: "Vite", description: "Lightning-fast build tool and development server.", icon: <SiVite /> },
        { name: "TMDB API", description: "The source for all movie data, posters, and reviews.",
             icon: <FaPix />},
        { name: "TypeScript", description: "Type-safe development for robust code quality.", icon: <BiLogoTypescript /> },
        { name: "React Router 7", description: "Modern routing for seamless page transitions.", icon: <SiReactrouter /> },
        { name: "React Toastify", description: "Beautiful notifications for user feedback.", 
            icon: <FaBell /> },
        { name: "Vanilla CSS", description: "Custom, premium styling with modern CSS features.", icon: <IoLogoCss3 /> },
    ];  

    return (
        <div className="tech-stack-page">
            <div className="tech-stack-container">
                <h1 className="page-title">Technical Architecture</h1>
                <p className="page-subtitle">The tools and technologies behind MovieApp's premium experience.</p>

                <div className="tech-grid">
                    {techs.map((tech, index) => (
                        <div className="tech-card" key={index}>
                            <div className="tech-icon">{tech.icon}</div>
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
