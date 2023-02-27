import React from 'react'
import arrow from '../assets/arrow-right.png'
import { BiChevronRightCircle } from 'react-icons/bi'


export default function ProjectCard(props) {

    return (
        <div className="ProjectCard">
            <img src={props.img} />
            <span id='CTA'>
                <p>details</p>
                <BiChevronRightCircle />

            </span>
            <div className="ProjectCard-text" >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.url} target="_blank">LIVE DEMO</a>
            </div>
        </div>
    )
}