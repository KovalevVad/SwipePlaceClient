import React from 'react';
import './Main.css';
import Moscow from '../../img/Card_Moskow.jpg';
import Barcelona from '../../img/Card_Barselona.jpg';
import Paris from '../../img/Card_Paris.jpg';
import Rim from '../../img/Card_Rim.jpg';
import Afini from '../../img/Card_Afini.jpg';
import SaintPtb from '../../img/Card_Saint-Ptb.jpg';

const Cards = () => {
    const cities = [
        {
            name: 'Москва',
            image: Moscow,
            description: 'Крупнейшая столица Европы, наполненная достопримечательностями, памятниками истории и культуры, а также музеями мирового уровня.'
        },
        {
            name: 'Барселона',
            image: Barcelona,
            description: 'Столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством.'
        },
        {
            name: 'Париж',
            image: Paris,
            description: 'Один из главных европейских городов и мировой центр культуры, искусства, моды и гастрономии.'
        },
        {
            name: 'Рим',
            image: Rim,
            description: 'Столица Италии, огромный многонациональный город, история которого насчитывает почти три тысячи лет.'
        },
        {
            name: 'Афины',
            image: Afini,
            description: 'Столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности.'
        },
        {
            name: 'Санкт-Петербург',
            image: SaintPtb,
            description: 'Русский портовый город на побережье Балтийского моря, который в течение двух веков служил столицей Российской империи.'
        }
    ];

    return (
        <section className='Cards'>
            <div className='Cards__wrapper'>
                <p className="Cards__popular">
                    Популярное
                </p>
                <ul className='Cards__list'>
                    {cities.map(city => (
                        <li key={city.name} className='Cards__list__elem'>
                            <img className='Cards__list__elem-img' src={city.image} alt={city.name} />
                            <p className='Cards__list__elem-text'>
                                <span className='Cards__list__elem-bold_text'>
                                    {city.name}
                                </span>
                                <span className="Card__list__elem-dash">
                                    &ensp;–&ensp;
                                </span>
                                {city.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Cards;
