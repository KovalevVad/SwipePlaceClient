import React from 'react';
import './Main.css';
import TelegramIcon from '../../Image/Telegram.svg';
import TouristImg from '../../Image/Tourist.jpeg';

const Community = () => {
    return (
        <section className='Community'>
            <div className='Community__wrapper'>
                <div className="Community__block">
                    <h3 className='Community__title'>Путешествуй вместе с нами</h3>
                    <div className="Community__block-wrapper">
                        <p className='Community__description'>Делись, узнавай об интересных местах. Вступи в группу в телеграмме.</p>
                        <figure className='Community__tg-block'>
                            <img className='Community__tg-icon' src={TelegramIcon} alt="Телеграмм" />
                            <figcaption>
                                <a className='Community__tg-link' href="/">@link</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <img className='Community__image' src={TouristImg} alt="Туристы" />
            </div>
        </section>
    )
}
export default Community;
