import React from 'react';
import './Home.css';

const Home = () => {
    return (
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
    );
};

export default Home;