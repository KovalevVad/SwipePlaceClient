import React from 'react';
import './Main.css';
import Moscow from '../../img/Card_Moskow.jpg';
import Barcelona from '../../img/Card_Barselona.jpg';
import Paris from '../../img/Card_Paris.jpg';
import Rim from '../../img/Card_Rim.jpg';
import Afini from '../../img/Card_Afini.jpg';
import SaintPtb from '../../img/Card_Saint-Ptb.jpg';



const Cards = () => {
    return (
        <section className='Cards'>
            <div className='Cards__wrapper'>
                <p className="Cards__popular">
                    Популярное
                </p>
                <ul className='Cards__list'>
                    <li className='Cards__list__elem'>
                        <img className='Cards__list__elem-img' src={Moscow} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Москва
                            </span>
                            <span className="Card__list__elem-dash">
                                &ensp;–&ensp;
                            </span>
                            крупнейшая столица Европы, наполненная достопримечательностями, памятниками истории и культуры, а также музеями мирового уровня.
                        </p>
                    </li>
                    <li className='Cards__list__elem'>
                        <img className='Cards__list__elem-img' src={Barcelona} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Барселона
                            </span>
                            <span className="Card__list__elem-dash">
                                &ensp;–&ensp;
                            </span>
                            столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством.
                        </p>
                    </li>
                    <li className='Cards__list__elem'>
                        <img className='Cards__list__elem-img' src={Paris} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Париж
                            </span>
                            <span className="Card__list__elem-dash">
                                &ensp;–&ensp;
                            </span>
                            один из главных европейских городов и мировой центр культуры, искусства, моды и гастрономии.
                        </p>
                    </li>
                    <li className='Cards__list__elem'><img className='Cards__list__elem-img' src={Rim} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Рим
                            </span>
                            <span className="Card__list__elem-dash">
                                &ensp;–&ensp;
                            </span>
                            столица Италии, огромный многонациональный город, история которого насчитывает почти три тысячи лет.
                        </p>
                    </li>
                    <li className='Cards__list__elem'><img className='Cards__list__elem-img' src={Afini} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Афины
                            </span>
                            <span className="Card__list__elem-dash">
                                &ensp;–&ensp;
                            </span>
                            столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности.
                        </p>
                    </li>
                    <li className='Cards__list__elem'><img className='Cards__list__elem-img' src={SaintPtb} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Санкт-Петербург
                            </span>
                            <span className="Card__list__elem-dash">
                                &ensp;–&ensp;
                            </span>
                            русский портовый город на побережье Балтийского моря, который в течение двух веков служил столицей Российской империи.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Cards;
