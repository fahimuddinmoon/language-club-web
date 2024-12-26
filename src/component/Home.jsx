import React from 'react';
import Poster from './Poster';
import State from './State';
import Category from './Category';


const Home = () => {
    return (
        <div>
            <div>
                <Poster></Poster>
            </div>
            <div className='my-7'>
                <State></State>
            </div>
            <div className='my-7'>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;