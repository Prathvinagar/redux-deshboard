import React from 'react';
import './Commoncss.css';
import { useNavigate } from 'react-router-dom';


function Productpage() {

    const navigate = useNavigate()

    function pagelogout() {
        navigate('/')

    }


    return (
        <div>
            <div className='Product-div'>
                <h4 className='Product-nav'>Product-Page</h4>
                <div className='searchbar-div'>
                    <input type='text' name='search' placeholder='Search.....' className='searchbar'></input>
                    <button type="search-submit" className='search-btn'>search</button>
                </div>
                <button className='logout' onClick={pagelogout}>Logout</button>
            </div>
            <h1 className='product-text'>Welcome to the Product-list</h1>
        </div>
    );
}

export default Productpage;