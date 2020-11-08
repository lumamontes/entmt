import React from 'react';
import { Link } from 'react-router-dom' 
import './styles.css';

function Button (props) {
    return (
    <Link class="default-small-button" to={props.link}>{props.content}</Link>
    )
}

export default Button;