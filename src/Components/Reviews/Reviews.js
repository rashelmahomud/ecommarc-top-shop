
import { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => { 

    const [reviews, setReviews] = useState([]);

    useEffect(  () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
   
    return (

 
        <div className='customer-Comments'>
        
        {
          reviews.map(review => <Review
              key={review.id}
              review={review}
          ></Review>)

      }

      </div>

        

    );
};

export default Reviews;