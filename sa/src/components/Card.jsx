import { color } from "@mui/system"
import React from "react"
import header from '../assets/skill-icon/header.png'
import logo from '../assets/skill-icon/react.png'

export default function Card(props) {

    const mainElem = props.item.Content.map(s => {
        let logo_style= "";
        if(s.Language == 'FB Ads')
        {
            logo_style = 'Meta';
        }
        else if(s.Language == "C" || s.Language == "C++")
        {
            logo_style = "c_cpp"
        }
        else if (s.Language == "ReactJS") {
            logo_style = "react"
        }
        else if (s.Language == "Shopify") {
            logo_style = "Shopify"
        }
        else if (s.Language == "Tiktok Ads") {
            logo_style = "Tiktok"
        }
        return (
            <div className="card-item" style={{ background: `${s.color}` }}>
                <div className="card-header">
                    <img src={header} />
                    <div className="card-logo">
                        <img src={s.logo} alt="s" id={logo_style} />
                    </div>
                </div>
                <div className="card-text" style={{ background: `${s.colorText}`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.Language}
                </div>
            </div>
        )
    })

    return (
        <div className="Card">
            {mainElem}
        </div>
    )
}
