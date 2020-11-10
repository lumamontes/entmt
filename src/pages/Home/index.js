import React from 'react';
import './style.css'
import Button from '../../assets/Components/Button'
import SmallButton from '../../assets/Components/SmallButton'
import { Link } from 'react-router-dom'

function Home () {
    return (
        <div id="homepage-container">
            <header>
                <img src="" alt=""/>
                <nav>
                    <ul>
                        <li><Link to="">movies</Link></li>
                        <li><Link to="">login</Link></li>
                    </ul>
                    <SmallButton link="/start" content="Sign Up"/>
                </nav>
            </header>


            <div id="homepage-content">
                <h1 className="title">
                Talk about your favorite movies and TV shows
                </h1>
                <Button link="/" content="Start"/>
            </div>  

        </div>
    )
}


export default Home
