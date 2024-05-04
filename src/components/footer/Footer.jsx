import React from 'react';
import './Footer.css';

const Footer = () => {
    const mainLinks = [
        { text: 'Главная', href: '/' },
        { text: 'Лента', href: '/' },
        { text: 'Мессенджер', href: '/' },
        { text: 'Избранное', href: '/' },
        { text: 'Личный кабинет', href: '/' }
    ];

    const firstLinks = [
        { text: 'FAQ', href: '/' },
        { text: 'О платформе', href: '/' },
        { text: 'Новости', href: '/' }
    ];

    const renderLink = (link, index, className) => (
        <li key={index} className={`${className}__item`}>
            <a className={`${className}__link`} href={link.href}>{link.text}</a>
        </li>
    );
    
    return (
        <footer className='Footer'>
            <div className='Footer__wrapper'>
                <nav className='Footer__navigation Navigation'>
                    <ul className='Navigation__list-main List-main'>
                        {mainLinks.map((link, index) => renderLink(link, index, 'List-main'))}
                    </ul>
                    <ul className='Navigation__list-first List-first'>
                        {firstLinks.map((link, index) => renderLink(link, index, 'List-first'))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
