import React, { useContext } from 'react';
import Poster from './Poster';
import State from './State';
import Category from './Category';
import Display from './Display';
import { AuthContext } from './ContextAPI';


const Home = () => {
    const { user , logout , dark ,setDark} = useContext(AuthContext)
    return (
        <div >
            <div className={dark === true? 'bg-black text-white px-5':'px-5'}>
                <Poster></Poster>
            </div>
            <div className={dark === true? 'bg-black text-white px-5 my-7':'px-5 my-7'}>
                <State></State>
            </div>
            <div className={dark === true? 'bg-black text-white px-8 my-7':'px-8 my-7'}>
                <Display></Display>
            </div>
            <div className={dark === true? 'bg-black text-white px-3 my-7':'px-3 my-7'}>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;