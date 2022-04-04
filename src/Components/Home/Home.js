import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

import './Home.css';

const Home = () => {

    return (

       <div>
            <div className='gellery'>
            
            <div className='gellery-info'>
                <h1 className='orange'>Chosec your Daymond Ring</h1>
                <h1 >Your Fancy Daimond Ring</h1>
                <p>This is a Excellent Shop and excellent all Product this site. Top Shop is a Every Product discoutly sells and lowers cost and best service this site with. its 10 years old shop and all years best service and gentelly all worker and best service.</p>
                <button className='orange gellery-btn'>Live Demu</button>
            </div>

            <div className='gellery-image'>
                <img src="daymond.jpg" alt="" />
            </div>
        </div>

        <h1 className='review-title'>Customer Reviews!</h1>
      
        <div className='customer-reviews'>
           <Reviews></Reviews>
  
        </div>

        <div className='reviews-see'>
            <Link to='/reviews'>See All Reviews</Link>
            
        </div>


       </div>
    );
};

export default Home;