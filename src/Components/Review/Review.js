import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name,picture,comment} = props.review
    return (
        <div className='customer-Comment'>

          
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{comment}</h3>
           
            <div className='ratings'>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
            </div>
            
        </div>
    );
};

export default Review;