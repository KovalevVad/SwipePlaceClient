import React from 'react';
import Community from './Community';
import Cards from './Cards';
import Carousel from './Carousel';
import { Registration } from './Registration';

const Main = () => {
    return (
        <main>
            <Cards/>
            <Registration />
            <Carousel/>
            <Community/>
        </main>
    )
}

export default Main;
