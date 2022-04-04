import Reviews from '../Reviews/Reviews';

import './Home.css';

const Home = () => {

    return (

       <div>
            <div className='gellery'>
            
            <div className='gellery-info'>
                <h1 className='orange'>Chosec your Daymond Ring</h1>
                <h1 >Your Fancy Daimond Ring</h1>
                <p>adipisicing elit. Necessitatibus, vero quam. Numquam quos repellat nam vero, delectus natus mollitia? Eligendi ipsa neque aspernatur dolor dolorum voluptatibus eius qui. Voluptatum, non.</p>
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

        <button  className='reviews-see'>See All Reviews</button>


       </div>
    );
};

export default Home;