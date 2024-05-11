import React from 'react';
import './Main.css';
import TouristImg from '../../img/Tourist.jpeg';

const Community = () => {
    return (
        <section className='Community'>
            <div className='Community__wrapper'>
                <div className="Community__block">
                    <h3 className='Community__title'>Путешествуй вместе с нами</h3>
                    <p className='Community__description'>Делись, узнавай об интересных местах. Вступи в группу в телеграмме.</p>
                </div>
                <img className='Community__image' src={TouristImg} alt="Туристы" />
                <p className='Community__background-text'>СДЕЛАЙ ШАГ</p>
            </div>
        </section>
    )
}
export default Community;
