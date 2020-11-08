import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import Button from '../../assets/Components/Button'

function Home () {
    return (
        <div id="homepage-container">
            <header>
                <img src="" alt=""/>
                <nav>
                    <ul>
                        <li>aa</li>
                        <li>aa</li>
                    </ul>
                    <Button link="/start" content="Start"/>
                </nav>
            </header>


            <div id="homepage-content">
                <h1>
                Talk about your favorite movies and TV shows 
                </h1>

                <Link to ="/"> Start</Link>
            </div>  

        </div>
    )
}


export default Home
