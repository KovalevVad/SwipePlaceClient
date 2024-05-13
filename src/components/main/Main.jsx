import React from 'react';
import Community from './Community';
import Cards from './Cards';
import Carousel from './Carousel';
import Registration from './Registration';
import Input from './Input';

const Main = () => {
    return (
        <main>
            <Input/>
            <Cards/>
            <Registration />
            <Carousel/>
            <Community/>
        </main>
    )
}

export default Main;
