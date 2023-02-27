import profile from '../assets/profile2.png'
import arrow from '../assets/arrow-right.png'

export default function Hero() {
    return (
        <div className="Hero" id='hero'>
            <div className='Hero-content'>
                <h1>
                    <span id='Hero-Hi'>Hi! <br id='Hero-backspace'/> I'm <b id='Saad'> Saad</b></span>
                    <br />
                    <span>Frontend Developer</span>
                </h1>
                <p id='nodisplay'>I am a frontend developer with a passion for e-commerce, I take pleasure in crafting seamless and visually engaging user experiences that are both intuitive and easy to use.
                I am excited to continue growing as a developer and to apply my skills to new and exciting projects</p>
                <a className='Hero-connect' href='#'>
                    <p><a href="https://www.linkedin.com/in/saad-aboujid-118ba519b/" target="_blank">LET'S CONNECT</a></p>
                    <img src={arrow} id='nodisplay'/>
                </a>
            </div>
            <div className="profile-group">
                <img src={profile} className='profile' />
                <p id='name'>SAAD ABOUJID</p>
            </div>
        
        </div>
    )
}