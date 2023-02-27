import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

export default function Logos() {
    return (
        <div className="Logos">
            <a href="https://github.com/saboujid" target="_blank" >
                <img src={github} id="github"/>
            </a>
            <a href="https://www.linkedin.com/in/saad-aboujid-118ba519b/" target="_blank">
                <img src={linkedin} id='linkedin'/>
            </a>
        </div>
    )
}