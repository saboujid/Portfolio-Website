import profile from "../assets/about.png"
import cv from "../assets/cv.pdf"
export default function About() {
    return (
        <div className="About" id="about">
            <img src={profile} id="code-icon" />
            <div className="description">
                <h1>About Me</h1>
                <p>Hey there, my name is Saad. I am a passionate frontend developer with a love for ecommerce.
                    Over the years, I have learned various frontend languages and skills, and have been able to apply them to both personal and coursework projects.
                    I have a strong foundation in these technologies, and I am always looking to improve and learn more.
                    My background in design and video editing also allows me to create visually compelling user experiences that are both engaging and easy to use.
                    I am excited to continue growing as a developer and to apply my skills to new and exciting projects</p>
                <div id="CV">
                    <a href={cv} download>Download CV</a>
                </div>
            </div>

        </div>
    )
}